// scripts/augment-arabic-keywords.js
// Usage (PowerShell):
//   node scripts/augment-arabic-keywords.js --src "D:\\it ticket system\\lib\\rules" --out "D:\\it ticket system\\lib\\rules_aug"
// Then set RULES_DIR to the --out folder (or keep your loader merging both).

'use strict';
const fs = require('fs');
const path = require('path');

function asArray(x){ return Array.isArray(x) ? x : []; }
function uniqLower(arr){
  const seen = new Set();
  const out = [];
  for (const v of arr){
    const s = String(v||'').trim();
    if(!s) continue;
    const k = s.toLowerCase();
    if(!seen.has(k)){ seen.add(k); out.push(s); }
  }
  return out;
}

// --- Saudi/Gulf local slang & spellings (AR + EN translit) ---
const SAUDI_TERMS = {
  pc: [
    'بطئ','بطيء','ثقيل','يثقل','تهنيق','يهنق','معلق','يعّلق','شاشة زرقاء','شاشة سوداء',
    'يطفي فجأة','يعيد التشغيل','ما يشتغل','ويندوز','كمبيوتر','حاسب','تحديثات','تعريفات'
  ],
  network: [
    'شبكة','شبكه','النت','الانترنت','انترنت','واي فاي','وايفاي','راوتر','سويتش','بروكسي','دي ان اس','دي إن إس',
    'يفصل','فصل','ضعيف','بطيء مره','بطيء مرة','داون','ما يفتح','بوابة','بوابه','جيتواي','DNS','Proxy','Gateway','WiFi','Router','Switch'
  ],
  outlook: [
    'اوتلوك','البريد','إيميل','ايميل','الايميل','الايميلات','ما يرسل','ما يستقبل','الارسال','الاستقبال',
    'صندوق البريد','فل','ممتلي','بحث ما يشتغل','تعطل البحث','ارشيف','أرشيف'
  ],
  excel: [
    'اكسل','إكسل','شيت','شيتات','ورقة عمل','معادلات','دوال','دالة','يحوس','تهنيق','يعلق','ملف ثقيل','يفتح بطيء'
  ],
  word: [
    'وورد','مستند','ملف وورد','يفتح بطيء','يعلق','تعطل'
  ],
  printer: [
    'طابعة','الطابعة','برنتر','تعليق ورق','انحشار','إنحشار','ورق محشور','عالق','ما تطبع','لا تطبع','لا يطبع',
    'تطبع سادة','تطبع فاضي','تطبع باهت','باهت','حبر','خرطوش','تونر','درج','سحب ورق','صيانة','HP','Ricoh','Canon','Epson','Brother','Xerox'
  ],
  mouse: [
    'ماوس','الفارة','المؤشر','يتقطع','يقفز','دبل كليك','استجابة','بطارية'
  ],
  keyboard: [
    'كيبورد','لوحة المفاتيح','أزرار','زراير','ما تشتغل','تبدلت اللغة','تتلخبط','تلخبط'
  ],
  hardware: [
    'رام','هارد','هارديسك','قرص','باور','مزود طاقة','مروحة','حرارة','طقه','صوت','يفصل فجأة'
  ],
  office: [
    'اوفيس','أوفيس','باوربوينت','باور بوينت','وورد','إكسل','أوتلوك'
  ]
};

// Try to guess canonical category key from rule.category/title/keywords
function mapCategory(rule){
  const c = String(rule.category||'').toLowerCase();
  const t = String(rule.title||'').toLowerCase();
  const k = asArray(rule.keywords).map(x=>String(x).toLowerCase()).join(' ');
  const hay = c + ' ' + t + ' ' + k;
  if (/(printer|طابع|طابعة|برنتر)/i.test(hay)) return 'printer';
  if (/(network|wifi|dns|gateway|proxy|شبكة|شبكه|انترنت|راوتر|سويتش)/i.test(hay)) return 'network';
  if (/(outlook|pst|ost|اوتلوك|بريد|إيميل|ايميل)/i.test(hay)) return 'outlook';
  if (/(excel|xlsx|اكسل|إكسل)/i.test(hay)) return 'excel';
  if (/(word|وورد)/i.test(hay)) return 'word';
  if (/(mouse|فارة|ماوس)/i.test(hay)) return 'mouse';
  if (/(keyboard|كيبورد|لوحة المفاتيح)/i.test(hay)) return 'keyboard';
  if (/(pc|computer|windows|كمبيوتر|ويندوز)/i.test(hay)) return 'pc';
  if (/(office|اوفيس|أوفيس)/i.test(hay)) return 'office';
  if (/(ram|disk|هارد|باور|مزود|مروحة)/i.test(hay)) return 'hardware';
  return null;
}

// Load one module: .json | .js | .cjs
function loadModule(full){
  try {
    const mod = require(full);
    if (Array.isArray(mod)) return mod;
    if (mod && Array.isArray(mod.rules)) return mod.rules;
    if (mod && Array.isArray(mod.default)) return mod.default;
  } catch (e){
    // eslint-disable-next-line no-console
    console.warn('Skip (load error):', full, '-', e.message);
  }
  return [];
}

function augmentRules(rules){
  const out = [];
  for (const r of asArray(rules)){
    const catKey = mapCategory(r);
    const base = asArray(r.keywords);
    const extra = catKey ? SAUDI_TERMS[catKey] || [] : [];
    const merged = uniqLower(base.concat(extra));
    out.push({ ...r, keywords: merged });
  }
  return out;
}

function main(){
  const argv = process.argv.join(' ');
  const srcIdx = argv.indexOf('--src') >= 0 ? process.argv.indexOf('--src') : -1;
  const outIdx = argv.indexOf('--out') >= 0 ? process.argv.indexOf('--out') : -1;
  const src = srcIdx > -1 ? process.argv[srcIdx+1] : path.join(process.cwd(), 'lib', 'rules');
  const outDir = outIdx > -1 ? process.argv[outIdx+1] : path.join(process.cwd(), 'lib', 'rules_aug');

  const srcDir = path.resolve(src);
  const dstDir = path.resolve(outDir);

  if (!fs.existsSync(srcDir)){
    console.error('Source rules dir not found:', srcDir);
    process.exit(1);
  }
  fs.mkdirSync(dstDir, { recursive: true });

  const files = fs.readdirSync(srcDir).filter(f => /\.(json|js|cjs)$/i.test(f));
  let totalIn = 0, totalOut = 0;
  const manifest = [];

  for (const f of files){
    const full = path.join(srcDir, f);
    const items = loadModule(full);
    totalIn += items.length;
    const aug = augmentRules(items);

    const base = path.parse(f).name;
    const outPath = path.join(dstDir, base + '.json');
    fs.writeFileSync(outPath, JSON.stringify(aug, null, 2), 'utf8');

    manifest.push({ file: f, out: path.relative(process.cwd(), outPath), count: aug.length });
    totalOut += aug.length;
  }

  const report = { ok: true, srcDir, outDir: dstDir, files: manifest, totalIn, totalOut };
  fs.writeFileSync(path.join(dstDir, '_manifest.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
}

if (require.main === module) main();
