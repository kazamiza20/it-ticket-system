'use strict';
const fs = require('fs');
const path = require('path');


const asArray = (x) => (Array.isArray(x) ? x : []);
const isNonEmptyString = (s) => typeof s === 'string' && s.trim() !== '';


function normalizeRules(arr) {
const out = [];
for (const r of asArray(arr)) {
if (!r || typeof r !== 'object') continue;
const title = isNonEmptyString(r.title) ? String(r.title).trim() : '';
const steps = asArray(r.steps).map((s) => String(s));
if (!title || steps.length === 0) continue; // skip invalid entries
out.push({
category: isNonEmptyString(r.category) ? String(r.category) : 'Misc',
keywords: asArray(r.keywords).map((k) => String(k).toLowerCase()),
title,
steps,
});
}
return out;
}


function tryLoadFile(fullPath) {
const ext = path.extname(fullPath).toLowerCase();
if (ext === '.json') {
const raw = fs.readFileSync(fullPath, 'utf8');
return JSON.parse(raw);
}
delete require.cache[require.resolve(fullPath)]; // dev-friendly reload
return require(fullPath);
}


function load(dir) {
const rulesDir = dir || path.join(__dirname, '..', 'rules');
const meta = { dir: rulesDir, files: [], count: 0, errors: [] };
let all = [];
if (!fs.existsSync(rulesDir)) return { rules: [], meta };


const files = fs
.readdirSync(rulesDir)
.filter((f) => /\.(json|js|cjs)$/i.test(f))
.sort();


for (const f of files) {
const full = path.join(rulesDir, f);
try {
let mod = tryLoadFile(full);
if (mod && Array.isArray(mod.rules)) mod = mod.rules; // { rules: [...] }
if (mod && Array.isArray(mod.default)) mod = mod.default; // { default: [...] }
const norm = normalizeRules(mod);
all = all.concat(norm);
meta.files.push({ file: f, items: norm.length });
meta.count += norm.length;
} catch (e) {
meta.errors.push({ file: f, error: (e && e.message) ? e.message : String(e) });
}
}
return { rules: all, meta };
}


module.exports = { load, normalizeRules };