'use strict';
// =====================================================================
// File: server.js  — IT Ticket System (Express 5)
// =====================================================================
// Why certain choices:
// - Bcrypt-based admin auth via ADMIN_PASS_HASH (fallback to ADMIN_PASS) to avoid plaintext.
// - Rules loader searches multiple folders and supports hot-reload to fix path/runtime drift.
// - Minimal debug endpoints for fast smoke checks in dev and prod.

// ---- Core & Env -------------------------------------------------------
const express = require('express');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const session = require('express-session');
const nodemailer = require('nodemailer');
const dns = require('dns');
const { exec } = require('child_process');
const ldap = require('ldapjs');
const bcrypt = require('bcrypt');
const { load: loadRules } = require('./lib/rules-loader');
const { computeSuggestionText } = require('./lib/ai-scorer');

let listEndpoints = null; // optional dev helper
try { listEndpoints = require('express-list-endpoints'); } catch { /* optional */ }

const app = express();
console.log('Using server file:', __filename);
console.log('Working directory:', process.cwd());

// ---- App & Middleware -------------------------------------------------
app.set('trust proxy', true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  name: 'itadmin.sid',
  secret: process.env.SESSION_SECRET || 'dev-change-me',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax', secure: false, maxAge: 1000 * 60 * 60 * 8 }
}));

// ---- Probes / Debug ---------------------------------------------------
app.get('/__ok', (_req, res) => res.type('text').send('OK'));
app.get('/__ping', (_req, res) => res.type('text').send('pong'));
app.get('/__health', (_req, res) => res.json({ ok: true }));
app.get('/__version', (_req, res) => res.json({ ok: true, version: '1.0.0' }));
app.get('/__r', (_req, res) => {
  try { return res.json({ ok: true, routes: listEndpoints ? listEndpoints(app) : [] }); }
  catch (e) { return res.status(500).json({ ok:false, error: String(e?.message || e) }); }
});

// ---- File storage (no DB) --------------------------------------------
const DATA_DIR = path.join(__dirname, 'data');
const TICKETS_FILE = path.join(DATA_DIR, 'tickets.json');
const COUNTER_FILE = path.join(DATA_DIR, 'ticket_counter.txt');
fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(TICKETS_FILE)) fs.writeFileSync(TICKETS_FILE, '[]', 'utf8');

/** Read stored tickets */
function readTickets() {
  try { return JSON.parse(fs.readFileSync(TICKETS_FILE, 'utf8')) || []; } catch { return []; }
}
/** Persist tickets */
function writeTickets(arr) {
  try { fs.writeFileSync(TICKETS_FILE, JSON.stringify(arr, null, 2)); return true; } catch { return false; }
}
/** Monotonic id counter */
function readCounter() { try { const n = parseInt(fs.readFileSync(COUNTER_FILE, 'utf8').trim(), 10); return Number.isFinite(n)&&n>0? n: 0; } catch { return 0; } }
function writeCounter(n){ try { fs.writeFileSync(COUNTER_FILE, String(n)); } catch {} }
let ticketCounter = readCounter();

// ---- Auth (bcrypt) ----------------------------------------------------
const ADMIN_PASS = process.env.ADMIN_PASS || '';
const ADMIN_PASS_HASH = process.env.ADMIN_PASS_HASH || '';

async function isValidAdminPassword(pw) {
  const candidate = (pw || '').toString();
  if (!candidate) return false;
  if (ADMIN_PASS_HASH) {
    try { return await bcrypt.compare(candidate, ADMIN_PASS_HASH); } catch { return false; }
  }
  return candidate === (ADMIN_PASS || 'admin'); // dev fallback only
}

const requireAdminApi  = (req, res, next) => req.session?.isAdmin ? next() : res.status(401).json({ ok:false, error:'Unauthorized' });
const requireAdminPage = (req, res, next) => req.session?.isAdmin ? next() : res.redirect('/admin/login');

// ---- Public pages -----------------------------------------------------
app.get('/', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'lang.html')));
app.get('/ticket-en', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'ticket-en.html')));
app.get('/ticket-ar', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'ticket-ar.html')));

// ---- Admin UI & login -------------------------------------------------
app.get('/admin/login', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'admin', 'login.html')));

app.post('/admin/login', async (req, res) => {
  const { password } = req.body || {};
  if (!password) {
    if (req.headers['accept']?.includes('text/html')) return res.redirect('/admin/login');
    return res.status(400).json({ ok:false, error:'Missing password' });
  }
  const ok = await isValidAdminPassword(password);
  if (ok) {
    req.session.isAdmin = true;
    if (req.headers['accept']?.includes('text/html')) return res.redirect('/admin/tickets');
    return res.json({ ok:true });
  }
  if (req.headers['accept']?.includes('text/html')) return res.redirect('/admin/login');
  return res.status(401).json({ ok:false, error:'Invalid password' });
});

app.post('/admin/logout', (req, res) => { req.session.destroy(() => res.json({ ok:true })); });
app.get('/admin', (req, res) => req.session?.isAdmin ? res.redirect('/admin/tickets') : res.redirect('/admin/login'));
app.get('/admin/tickets', requireAdminPage, (_req, res) => res.sendFile(path.join(__dirname, 'public', 'admin', 'tickets.html')));
app.get('/admin/dashboard', requireAdminPage, (_req, res) => res.sendFile(path.join(__dirname, 'public', 'admin', 'dashboard.html')));

// ---- Rules (defaults + external w/ fallback + hot reload) -------------
const defaultRules = [
  { category:'PC', keywords:['pc','computer','windows','slow','lag','hang','freeze','bsod','boot','startup','بطئ','تهنيج','يتجمد','ثقيل'], title:'General system slowness / بطء النظام العام', steps:['Restart PC','Check Task Manager','Disk Cleanup','Malware scan','Update Windows & drivers'] },
  { category:'Network', keywords:['wifi','network','internet','dns','gateway','proxy','شبكه','انترنت','دي ان اس','بروكسي'], title:'Network issues / مشاكل الشبكة', steps:['Check cable/Wi‑Fi','release/renew','flushdns','Try other sites'] },
  { category:'Outlook', keywords:['outlook','email','pst','ost','search','send','receive','اوتلوك','البريد'], title:'Outlook issues / مشاكل أوتلوك', steps:['Restart','Check connectivity','Repair OST/PST','Recreate profile'] },
  { category:'Excel', keywords:['excel','xlsx','formula','pivot','calc','sheet','اكسل','معادلات'], title:'Excel issues / مشاكل إكسل', steps:['Auto calc','Check formulas','Break links','Disable add‑ins / Repair Office'] }
];

const RULES_DIR_ENV  = process.env.RULES_DIR ? path.resolve(process.env.RULES_DIR) : null;
const RULES_DIR_LOCAL= path.join(__dirname, 'rules');
const RULES_DIR_CWD  = path.join(process.cwd(), 'rules');

let rules = defaultRules.slice();
let rulesMeta = { dir: null, count: defaultRules.length, errors: [], tried: [] };

function loadAllRules() {
  const tried = [];
  const candidates = [RULES_DIR_ENV, RULES_DIR_LOCAL, RULES_DIR_CWD].filter(Boolean);
  for (const dir of candidates) {
    tried.push(dir);
    try {
      const extra = loadRules(dir); // { rules, meta }
      if (Array.isArray(extra.rules) && extra.rules.length > 0) {
        rules = [...defaultRules, ...extra.rules];
        rulesMeta = { ...extra.meta, tried, count: rules.length };
        console.log(`✅ Rules loaded: default=${defaultRules.length}, extra=${extra.meta.count} (from ${extra.meta.dir})`);
        if (extra.meta.errors.length) console.log('Rule load errors:', extra.meta.errors);
        return;
      }
    } catch (e) {
      tried.push(`${dir} :: ERROR :: ${e?.message || e}`);
    }
  }
  rules = defaultRules.slice();
  rulesMeta = { dir: null, tried, count: rules.length, errors: [{ error: 'No external rules found in any candidate directory.' }] };
  console.log('⚠️  No external rules found. Using defaults only.');
  console.log('Tried rule directories:', tried);
}

loadAllRules();

if (process.env.NODE_ENV !== 'production') {
  app.get('/__debug/rules', (_req, res) => {
    res.json({
      ok: true,
      total: rules.length,
      usingDir: rulesMeta.dir,
      tried: rulesMeta.tried,
      meta: rulesMeta,
      sample: rules.slice(0, 3),
    });
  });

  app.post('/__debug/rules/reload', (_req, res) => {
    loadAllRules();
    res.json({ ok: true, reloaded: true, total: rules.length, usingDir: rulesMeta.dir });
  });

  app.get('/__debug/suggest', (req, res) => {
    const s = computeSuggestionText(rules, req.query.text || '');
    res.json({ ok: true, s });
  });
}




// ---- AI Suggestion API -----------------------------------------------
// GET
app.get('/ai-suggest', (req, res) => {
  const q = (req.query?.issue || '').toString().trim();
  const s = computeSuggestionText(rules, q);
  res.json({ ok: true, suggestions: s ? [s] : [] });
});

// POST
app.post('/ai-suggest', (req, res) => {
  const text = (req.body?.issue || '').toString().trim();
  const s = computeSuggestionText(rules, text);
  res.json({ ok: true, suggestions: s ? [s] : [] });
});


// ---- Networking / LDAP helpers ---------------------------------------
function clientIp(req){ const xf=req.headers['x-forwarded-for']; let ip = xf?xf.split(',')[0].trim():(req.socket?.remoteAddress||''); if (ip.startsWith('::ffff:')) ip=ip.slice(7); if (ip==='::1') ip='127.0.0.1'; return ip || '0.0.0.0'; }
function detectClientNameFromIp(ip){
  return new Promise(resolve => {
    if (!ip || ip==='127.0.0.1') return resolve({ name:'localhost', method:'loopback', ip });
    dns.reverse(ip, (err, hosts) => {
      if (!err && hosts && hosts[0]) return resolve({ name:hosts[0], method:'dns', ip });
      exec(`nbtstat -A ${ip}`, { timeout:3000 }, (e, stdout='') => {
        if (!e && stdout){ const m = stdout.match(/^[\s]*([A-Z0-9\-_.]{1,63})\s+<00>\s+UNIQUE/mi); if (m && m[1]) return resolve({ name:m[1], method:'nbtstat', ip }); }
        return resolve({ name: ip, method:'ip', ip });
      });
    });
  });
}
async function adBind(){ if (!process.env.LDAP_URL) return null; const client = ldap.createClient({ url: process.env.LDAP_URL, timeout:5000, connectTimeout:5000 }); await new Promise((res, rej)=> client.bind(process.env.LDAP_BIND_DN, process.env.LDAP_BIND_PASS, (e)=> e?rej(e):res())); return client; }
async function adLookupComputer(fqdn){ if (!fqdn) return null; const client = await adBind().catch(()=>null); if (!client) return null; const short=fqdn.split('.')[0]; const base=process.env.LDAP_BASE_DN; const filters=[`(dNSHostName=${fqdn})`,`(name=${short}$)`,`(sAMAccountName=${short}$)`]; const opts={ scope:'sub', filter:`(|${filters.join('')})`, attributes:['dNSHostName','name','sAMAccountName','distinguishedName','operatingSystem','whenCreated','lastLogonTimestamp']}; return new Promise(resolve=>{ const entries=[]; client.search(base, opts, (err, resp)=>{ if (err){ try{client.unbind()}catch{}; return resolve(null); } resp.on('searchEntry', e=>entries.push(e.object)); resp.on('error', ()=>{ try{client.unbind()}catch{}; resolve(null); }); resp.on('end', ()=>{ try{client.unbind()}catch{}; resolve(entries[0]||null); }); }); }); }
function fileTimeToISO(ft){ const n=Number(ft); if (!Number.isFinite(n)||n<=0) return null; const ms = n/10000 - 11644473600000; if (!Number.isFinite(ms)||ms<=0) return null; try{ return new Date(ms).toISOString(); } catch { return null; } }

app.get('/api/pc-name', async (req, res) => {
  try {
    const ip = clientIp(req); const detected = await detectClientNameFromIp(ip); let ad=null; try{ ad = await adLookupComputer(detected.name); } catch{}
    const adOut = ad ? { dn: ad.distinguishedName||null, dNSHostName: ad.dNSHostName||null, name: ad.name||null, sAMAccountName: ad.sAMAccountName||null, operatingSystem: ad.operatingSystem||null, whenCreated: ad.whenCreated||null, lastLogonTimestamp: ad.lastLogonTimestamp||null, lastLogonISO: fileTimeToISO(ad.lastLogonTimestamp) } : null;
    res.json({ name: detected.name, method: detected.method, ip: detected.ip, ad: adOut });
  } catch { res.status(200).json({ name:'Unknown', method:'error', ip: clientIp(req), ad:null }); }
});

// ---- Tickets API (admin) ---------------------------------------------
app.get('/api/tickets', requireAdminApi, (_req, res) => res.json({ ok:true, tickets: readTickets() }));

app.post('/api/tickets/:id/status', requireAdminApi, (req, res) => {
  const id = Number(req.params.id); const { status, comment } = req.body || {};
  const allowed = new Set(['New','In Progress','Resolved','Dismissed by AI','AI Suggested']);
  if (!allowed.has(status)) return res.status(400).json({ ok:false, error:'Bad status' });
  const list = readTickets(); const idx = list.findIndex(t => Number(t.id) === id);
  if (idx === -1) return res.status(404).json({ ok:false, error:'Not found' });
  list[idx].status = status; if (comment!=null) list[idx].comment = String(comment);
  list[idx].ts_updated = new Date().toISOString();
  if (!writeTickets(list)) return res.status(500).json({ ok:false, error:'Write failed' });
  res.json({ ok:true, ticket: list[idx] });
});

app.post('/api/tickets/:id/comment', requireAdminApi, (req, res) => {
  const id = Number(req.params.id); const { comment } = req.body || {};
  const list = readTickets(); const idx = list.findIndex(t => Number(t.id) === id);
  if (idx === -1) return res.status(404).json({ ok:false, error:'Not found' });
  list[idx].comment = String(comment||''); list[idx].ts_updated = new Date().toISOString();
  if (!writeTickets(list)) return res.status(500).json({ ok:false, error:'Write failed' });
  res.json({ ok:true, ticket: list[idx] });
});

app.get('/admin/export.csv', requireAdminApi, (_req, res) => {
  const rows = readTickets();
  const cols = ['id','ts_iso','ts_local','username','email','extension','department','issue','client_ip','client_name','client_method','status','comment','ai_title','ai_confidence'];
  const esc = v => { const s=(v==null)?'':String(v); return '"'+s.replace(/"/g,'""')+'"'; };
  const data = rows.map(t => [t.id,t.ts_iso,t.ts_local,t.username,t.email,t.extension,t.department,t.issue,t.client_ip,t.client_name,t.client_method,t.status,t.comment,t.ai?.title,t.ai?.confidence].map(esc).join(','));
  const csv = [cols.map(esc).join(','), ...data].join('\r\n');
  res.set('Content-Type','text/csv; charset=utf-8');
  res.set('Content-Disposition','attachment; filename="tickets-export.csv"');
  res.send(csv);
});

// ---- Public ticket submit --------------------------------------------
app.post('/ticket', async (req, res) => {
  try {
    const { username, email, extension, department, issue } = req.body || {};
    if (![username, email, extension, department, issue].every(Boolean)) return res.status(400).json({ ok:false, error:'Missing fields' });

//const ai = computeSuggestionText(issue); 
    const ai = computeSuggestionText(rules, issue);
    const status = (ai && ai.confidence>=0.75) ? 'AI Suggested' : 'New';
    const ip = clientIp(req); const detected = await detectClientNameFromIp(ip); const ua = req.headers['user-agent']||'';
    const tsIso = new Date().toISOString(); const tsLocal = new Date().toLocaleString(undefined, { hour12:false, timeZoneName:'short' });

    ticketCounter += 1; writeCounter(ticketCounter);
    const ticket = { id: ticketCounter, ts_iso: tsIso, ts_local: tsLocal, username, email, extension, department, issue, client_ip: detected.ip, client_name: detected.name, client_method: detected.method, user_agent: ua, ai: ai||null, status };
    const list = readTickets(); list.push(ticket); writeTickets(list);

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.EMAIL_TO){
      try {
        const transporter = nodemailer.createTransport({ host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT||587), secure:false, auth:{ user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }, tls:{ rejectUnauthorized:false }, connectionTimeout:6000, greetingTimeout:6000, socketTimeout:8000 });
        const aiBlock = ai ? `<h3>AI Suggestion</h3><p><b>${ai.title}</b> (confidence: ${ai.confidence})</p><ol>${(ai.steps||[]).map(s=>`<li>${s}</li>`).join('')}</ol>` : '';
        const html = `<h2>New IT Ticket</h2><ul><li><b>#:</b> ${ticket.id}</li><li><b>Submitted:</b> ${tsLocal} (${tsIso})</li><li><b>Status:</b> ${status}</li><li><b>User:</b> ${username}</li><li><b>Email:</b> ${email}</li><li><b>Ext:</b> ${extension}</li><li><b>Dept:</b> ${department}</li><li><b>Client IP:</b> ${detected.ip}</li><li><b>Detected PC:</b> ${detected.name} <i>(via ${detected.method})</i></li><li><b>User-Agent:</b> ${ua}</li></ul><p><b>Issue:</b></p><pre style="white-space:pre-wrap">${issue}</pre>${aiBlock}`;
        await transporter.sendMail({ from: process.env.SMTP_USER, to: process.env.EMAIL_TO, subject: `Ticket #${ticket.id} – ${username} (${department})`, html });
      } catch(e){ console.log('SMTP error:', e.message); }
    }

    res.json({ ok:true, ticket: ticket.id });
  } catch (e) {
    console.log('Ticket error:', e.message);
    res.status(500).json({ ok:false, error:'Server error' });
  }
});

// ---- Start ------------------------------------------------------------
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

