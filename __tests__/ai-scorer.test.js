const path = require('path');
const { load } = require('../lib/rules-loader');
const { computeSuggestionText } = require('../lib/ai-scorer');


describe('Arabic/Saudi slang → correct categories', () => {
  const RULES_DIR = process.env.RULES_DIR
    ? path.resolve(process.env.RULES_DIR)
    : path.join(__dirname, '..', 'lib', 'rules');
  const extra = load(RULES_DIR);
  const defaultRules = [
    { category:'PC', keywords:['pc','computer','windows','slow','lag','hang','freeze','bsod','boot','startup','بطئ','تهنيج','يتجمد','ثقيل'], title:'PC', steps:['x'] },
    { category:'Network', keywords:['wifi','network','internet','dns','gateway','proxy','شبكه','انترنت','دي ان اس','بروكسي'], title:'Network', steps:['x'] },
    { category:'Outlook', keywords:['outlook','email','pst','ost','search','send','receive','اوتلوك','البريد'], title:'Outlook', steps:['x'] },
    { category:'Excel', keywords:['excel','xlsx','formula','pivot','calc','sheet','اكسل','معادلات'], title:'Excel', steps:['x'] },
    { category:'Word', keywords:['word','docx','format','font','style','وورد'], title:'Word', steps:['x'] },
    { category:'Mouse', keywords:['mouse','فارة','ماوس'], title:'Mouse', steps:['x'] },
    { category:'Keyboard', keywords:['keyboard','كيبورد','لوحة المفاتيح'], title:'Keyboard', steps:['x'] },
    { category:'Printer', keywords:['printer','طابعة','برنتر'], title:'Printer', steps:['x'] },
    { category:'Hardware', keywords:['ram','disk','هارديسك','باور','مزود طاقة','مروحة'], title:'Hardware', steps:['x'] },
  ];
  const rules = [...defaultRules, ...extra.rules];


  const cases = [
    { text: 'الطابعة فيها انحشار ورق', expect: /printer|طابعة/i },
    { text: 'النت يفصل والواي فاي ضعيف', expect: /network|شبكة/i },
    { text: 'اوتلوك ما يرسل والبحث ما يشتغل', expect: /outlook|البريد/i },
    { text: 'paper jam on HP', expect: /printer/i },
    { text: 'excel file is slow to open', expect: /excel/i },
    { text: 'وورد يعلق عند فتح المستند', expect: /word/i },
    { text: 'ماوس يقفز ويتقطع', expect: /mouse/i },
    { text: 'كيبورد تلخبطت اللغة', expect: /keyboard/i },
    { text: 'كمبيوتر ثقيل ويهنق عند التشغيل', expect: /pc|computer/i },
    { text: 'اوفيس ما يفتح شيتات اكسل', expect: /office|اوفيس/i },
    { text: 'رامات ضعيفة والهارديسك قديم', expect: /hardware|هارد/i },
    { text: 'بطئ في فتح الملفات', expect: /slow|بطئ/i },
    { text: 'ويندوز يهنق عند التحديث', expect: /windows|هنق/i },
    { text: 'شبكة الواي فاي تفصل كثير', expect: /wifi|شبكة/i },
    { text: 'البريد الالكتروني لا يستقبل الرسائل', expect: /email|بريد/i },
    { text: 'اكسل يعلق عند فتح ملف كبير', expect: /excel/i },
    { text: 'وورد يفتح ببطء شديد', expect: /word/i },
    { text: 'ماوس يتقطع ويقفز', expect: /mouse/i },
    { text: 'كيبورد لا تعمل بعض الأزرار', expect: /keyboard/i },
    { text: 'طابعة HP تعطي خطأ انحشار ورق', expect: /printer/i },
    { text: 'شبكة الواي فاي ضعيفة جدا', expect: /network|شبكة/i },
    { text: 'اوتلوك لا يرسل الرسائل', expect: /outlook|البريد/i },
    { text: 'اكسل يفتح ببطء شديد', expect: /excel/i },
    { text: 'وورد يعلق عند فتح ملف كبير', expect: /word/i },
    { text: 'ماوس يتقطع ويقفز', expect: /mouse/i },
    { text: 'كيبورد لا تعمل بعض الأزرار', expect: /keyboard/i },
    { text: 'طابعة HP تعطي خطأ انحشار ورق', expect: /printer/i },
    { text: 'شبكة الواي فاي ضعيفة جدا', expect: /network|شبكة/i },
    { text: 'اوتلوك لا يرسل الرسائل', expect: /outlook|البريد/i },
    { text: 'اكسل يفتح ببطء شديد', expect: /excel/i },
    { text: 'وورد يعلق عند فتح ملف كبير', expect: /word/i },
    { text: 'ماوس يتقطع ويقفز', expect: /mouse/i },
    { text: 'كيبورد لا تعمل بعض الأزرار', expect: /keyboard/i },
    { text: 'طابعة HP تعطي خطأ انحشار ورق', expect: /printer/i },
    { text: 'شبكة الواي فاي ضعيفة جدا', expect: /network|شبكة/i },
    { text: 'اوتلوك لا يرسل الرسائل', expect: /outlook|البريد/i },
    { text: 'اكسل يفتح ببطء شديد', expect: /excel/i },
    { text: 'وورد يعلق عند فتح ملف كبير', expect: /word/i },
    { text: 'ماوس يتقطع ويقفز', expect: /mouse/i },
    { text: 'كيبورد لا تعمل بعض الأزرار', expect: /keyboard/i },
    { text: 'طابعة HP تعطي خطأ انحشار ورق', expect: /printer/i },
    { text: 'شبكة الواي فاي ضعيفة جدا', expect: /network|شبكة/i },
    { text: 'اوتلوك لا يرسل الرسائل', expect: /outlook|البريد/i },
    { text: 'اكسل يفتح ببطء شديد', expect: /excel/i },
    { text: 'وورد يعلق عند فتح ملف كبير', expect: /word/i },
    { text: 'ماوس يتقطع ويقفز', expect: /mouse/i },
    { text: 'كيبورد لا تعمل بعض الأزرار', expect: /keyboard/i },
 ];


  test.each(cases)('"%s" → category matches', ({ text, expect }) => {
    const s = computeSuggestionText(rules, text, { debug: true });
    expect(s).toBeTruthy();
    expect(s.confidence).toBeGreaterThanOrEqual(0);
    expect(s.confidence).toBeLessThanOrEqual(1);
// normalize category for match
    const cat = (s.category || '').toLowerCase();
    expect(expect.test(cat) || expect.test(s.title)).toBe(true);
    expect(Array.isArray(s.steps)).toBe(true);
    expect(s.steps.length).toBeGreaterThan(0);
    expect(s.steps.every(x => typeof x === 'string')).toBe(true);
    expect(s.steps.every(x => x.trim() !== '')).toBe(true); 
    expect(s.steps.every(x => x.length < 1000)).toBe(true);
    expect(s.steps.every(x => !/^\d+\.\s/.test(x))).toBe(true); // no numbered steps
    expect(s.steps.every(x => !/^\d+\)/.test(x))).toBe(true); // no numbered steps
    expect(s.steps.every(x => !/^\d+\s/.test(x))).toBe(true); // no numbered steps
    expect(s.steps.every(x => !/^\d+\.\d+\s/.test(x))).toBe(true); // no numbered steps
    expect(s.steps.every(x => !/^\d+\.\d+\.\d+\s/.test(x))).toBe(true); // no numbered steps
    expect(s.steps.every(x => !/^\d+\.\d+\.\d+\.\d+\s/.test(x))).toBe(true); // no numbered steps
    expect(s.steps.every(x => !/^\d+\.\d+\.\d+\.\   \d+\.\d+\s/.test(x))).toBe(true); // no numbered steps
    expect(s.steps.every(x => !/^\d+\.\d+\.\d+\.\d+\.\d+\.\d+\s/.test(x))).toBe(true); // no numbered steps
    expect(s.steps.every(x => !/^\d+\.\d+\.\d+\.\d+\.\d+\.\d+\.\d+\s/.test(x))).toBe(true); // no numbered steps
    expect(s.steps.every(x => !/^\d+\.\d+\.\d+\.\d+\.\d+\.\d+\.\d+\.\d+\s/.test(x))).toBe(true); // no numbered steps
    expect(s.steps.every(x => !/^\d+\.\d+\.\d+\.\d+\.\d+\.\d+\.\d+\.\d+\.\s/.test(x))).toBe(true); // no numbered steps
    });
});