'use strict';

function computeSuggestionText(rules, text) {
  const q = (text || '').toString().trim();
  if (!q) return null;


  const lower = q.toLowerCase();
  // Strong phrase boosters (bilingual)
  const phraseBoosters = [
    // Printer (EN)
    { re: /\bpaper\s*jam(s|med)?\b/i, cat: 'printer', bonus: 5 },
    { re: /\b(jam|jammed)\b/i, cat: 'printer', bonus: 3 },
    { re: /\b(no\s*print|not\s*printing|stuck\s*paper)\b/i, cat: 'printer', bonus: 3 },
    { re: /\b(toner|ink|cartridge|tray|fuser)\b/i, cat: 'printer', bonus: 2 },
    { re: /\b(hp|ricoh|canon|epson|brother|xerox)\b/i, cat: 'printer', bonus: 2 },
    // Printer (AR + KSA slang)
    { re: /انحشار|إنحشار|علق(ت)?\s*الطابعة|ما\s*تطبع|لا\s*تطبع|ورق\s*معلق/i, cat: 'printer', bonus: 5 },
    
    // Network (EN)
    { re: /\b(no\s*internet|dns\s*error|gateway\s*unreachable)\b/i, cat: 'network', bonus: 4 },
    // Network (AR + KSA slang)
    { re: /النت\s*\b(فاصل|ضعيف)\b|الشبكة\s*تعطي\s*خطأ|\bدي\s*ان\s*اس\b|قطع\s*بالراوتر/i, cat: 'network', bonus: 4 },
    // Outlook (EN/AR)
    { re: /\boutlook\s*(not\s*opening|send(ing)?\s*fail(ed)?|search\s*not\s*working)\b/i, cat: 'outlook', bonus: 4 },
    { re: /اوتلوك|اوتلوك\s*ما\s*يفتح|الايميل\s*ما\s*يرسل|بحث\s*outlook\s*ما\s*يشتغل/i, cat: 'outlook', bonus: 4 },

  ];
  const boosters = phraseBoosters.filter(b => b.re.test(q));


  const hints = {
    pc: /\b(pc|computer|windows|freeze|freezing|lag|hang|bsod|boot|startup|slow)\b/i,
    excel: /\b(excel|xlsx|workbook|sheet|formula|pivot)\b/i,
    word: /\b(word|docx)\b/i,
    outlook: /\b(outlook|pst|ost|email|send|receive)\b/i,
    printer: /\b(printer|print|paper|ink|toner|tray|hp|canon|ricoh|epson|brother|xerox)\b/i,
    network: /\b(network|wifi|connection|internet|router|switch|dns|gateway|proxy)\b/i,
  };

  const ranked = (Array.isArray(rules) ? rules : [])
    .map(rule => {
      const kw = Array.isArray(rule.keywords)
        ? rule.keywords.map(s => String(s).toLowerCase())
        : [];


      let strongHits = 0, weakHits = 0;
      for (const k of kw) {
        if (!k) continue;
        const escaped = k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const wb = new RegExp(`\\b${escaped}\\b`, 'i'); // strong word-boundary match
        if (wb.test(lower)) { strongHits += 1; continue; }
        if (lower.includes(k)) weakHits += 1; // weak substring match
      }
      const cat = String(rule.category || '').toLowerCase();
      let catBonus = 0;
      if (cat === 'pc' && hints.pc.test(q)) catBonus += 2;
      if (cat === 'excel' && hints.excel.test(q)) catBonus += 2;
      if (cat === 'word' && hints.word.test(q)) catBonus += 2;
      if (cat === 'outlook' && hints.outlook.test(q)) catBonus += 2;
      if (cat === 'printer' && hints.printer.test(q)) catBonus += 3;
      if (cat === 'network' && hints.network.test(q)) catBonus += 2;


      let phraseBonus = 0;
      for (const b of boosters) {
        if (!b.cat || b.cat === cat) phraseBonus += b.bonus;
      }


      const score = strongHits * 2 + weakHits + catBonus + phraseBonus;
      if (score <= 0) return null;


      const denom = Math.max(3, Math.min(12, kw.length || 3));
      const confRaw = (strongHits * 2 + weakHits + catBonus * 0.6 + phraseBonus) / denom;
      const confidence = Number(Math.max(0, Math.min(1, confRaw)).toFixed(2));


      return { rule, score, confidence };
    })
    .filter(Boolean)
    .sort((a, b) => (b.score - a.score) || (b.confidence - a.confidence));


  if (!ranked.length) {
    return {
      title: 'Please provide more details / يرجى تزويدنا بتفاصيل أكثر',
      steps: [
        'Add the exact error message / اكتب نص رسالة الخطأ',
        'Explain what you already tried / اذكر ما قمت بتجربته',
        'Include app/site names involved / اذكر أسماء البرامج/المواقع'
      ],
      confidence: 0
    };
  }
  const top = ranked[0];
  return {
    title: top.rule.title || 'Suggestion',
    steps: Array.isArray(top.rule.steps) ? top.rule.steps : [],
    confidence: Number(Math.min(1, Math.max(0, top.confidence)).toFixed(2)),
    category: top.rule.category || null
  };
}


module.exports = { computeSuggestionText };