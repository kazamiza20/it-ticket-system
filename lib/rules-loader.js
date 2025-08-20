// lib/rules-loader.js
const fs = require('fs');
const path = require('path');

function asArray(x) { return Array.isArray(x) ? x : []; }

function normalizeRules(arr) {
  const out = [];
  for (const r of asArray(arr)) {
    if (!r) continue;
    const title = String(r.title || '').trim();
    const steps = asArray(r.steps).map(s => String(s));
    if (!title || !steps.length) continue; // skip invalid entries
    out.push({
      category: r.category ? String(r.category) : 'Misc',
      keywords: asArray(r.keywords).map(k => String(k).toLowerCase()),
      title,
      steps
    });
  }
  return out;
}

function load(dir) {
  const rulesDir = dir || path.join(__dirname, '..', 'rules');
  const meta = { dir: rulesDir, files: [], count: 0, errors: [] };
  let all = [];
  if (!fs.existsSync(rulesDir)) return { rules: [], meta };

  for (const f of fs.readdirSync(rulesDir)) {
    if (!/\.(json|js|cjs)$/i.test(f)) continue;
    const full = path.join(rulesDir, f);
    try {
      let mod = require(full);
      if (mod && Array.isArray(mod.rules)) mod = mod.rules;      // { rules: [...] }
      if (mod && Array.isArray(mod.default)) mod = mod.default;  // { default: [...] }
      const norm = normalizeRules(mod);
      all.push(...norm);
      meta.files.push({ file: f, items: norm.length });
      meta.count += norm.length;
    } catch (e) {
      meta.errors.push({ file: f, error: String(e && e.message || e) });
    }
  }
  return { rules: all, meta };
}

module.exports = { load, normalizeRules };
