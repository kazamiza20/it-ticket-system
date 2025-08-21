module.exports = [
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "انقطاع متكرر في الواي فاي",
      "variation 8",
      "variation 9",
      "variation 24",
      "variation 34",
      "variation 38",
      "variation 43",
      "variation 45",
      "variation 47"
    ],
    "title": "WiFi keeps disconnecting (all cases) / انقطاع متكرر في الواي فاي (جميع الحالات)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش"
    ],
    "severity": "High",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "كابل الإيثرنت متصل لكن لا يوجد إنترنت",
      "variation 4",
      "variation 6",
      "variation 10",
      "variation 12",
      "variation 17",
      "variation 28",
      "variation 30",
      "variation 32",
      "variation 33",
      "variation 35",
      "variation 37",
      "variation 46",
      "variation 50"
    ],
    "title": "Ethernet cable connected but no internet (all cases) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (جميع الحالات)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر"
    ],
    "severity": "High",
    "confidence": 0.92,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "مشاكل اتصال VPN",
      "variation 5",
      "variation 7",
      "variation 11",
      "variation 15",
      "variation 18",
      "variation 20",
      "variation 22",
      "variation 25",
      "variation 26",
      "variation 27",
      "variation 29",
      "variation 39",
      "variation 40",
      "variation 41",
      "variation 42",
      "variation 44"
    ],
    "title": "VPN connection issues (all cases) / مشاكل اتصال VPN (جميع الحالات)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف"
    ],
    "severity": "High",
    "confidence": 0.92,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "DNS لا يحل أسماء النطاقات",
      "variation 13",
      "variation 14",
      "variation 16",
      "variation 19",
      "variation 21",
      "variation 23",
      "variation 31",
      "variation 36",
      "variation 48",
      "variation 49"
    ],
    "title": "DNS not resolving domain names (all cases) / DNS لا يحل أسماء النطاقات (جميع الحالات)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري"
    ],
    "severity": "Medium",
    "confidence": 0.84,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation4"
    ],
    "title": "Ethernet cable connected but no internet (variation 4) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 4)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.92,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation5"
    ],
    "title": "VPN connection issues (variation 5) / مشاكل اتصال VPN (نسخة 5)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.9,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation6"
    ],
    "title": "Ethernet cable connected but no internet (variation 6) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 6)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.9,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation7"
    ],
    "title": "VPN connection issues (variation 7) / مشاكل اتصال VPN (نسخة 7)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.93,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation8"
    ],
    "title": "WiFi keeps disconnecting (variation 8) / انقطاع متكرر في الواي فاي (نسخة 8)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation9"
    ],
    "title": "WiFi keeps disconnecting (variation 9) / انقطاع متكرر في الواي فاي (نسخة 9)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation10"
    ],
    "title": "Ethernet cable connected but no internet (variation 10) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 10)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.9,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation11"
    ],
    "title": "VPN connection issues (variation 11) / مشاكل اتصال VPN (نسخة 11)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.95,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation12"
    ],
    "title": "Ethernet cable connected but no internet (variation 12) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 12)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation13"
    ],
    "title": "DNS not resolving domain names (variation 13) / DNS لا يحل أسماء النطاقات (نسخة 13)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation14"
    ],
    "title": "DNS not resolving domain names (variation 14) / DNS لا يحل أسماء النطاقات (نسخة 14)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.92,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation15"
    ],
    "title": "VPN connection issues (variation 15) / مشاكل اتصال VPN (نسخة 15)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.89,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation16"
    ],
    "title": "DNS not resolving domain names (variation 16) / DNS لا يحل أسماء النطاقات (نسخة 16)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.86,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation17"
    ],
    "title": "Ethernet cable connected but no internet (variation 17) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 17)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.93,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation18"
    ],
    "title": "VPN connection issues (variation 18) / مشاكل اتصال VPN (نسخة 18)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.89,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation19"
    ],
    "title": "DNS not resolving domain names (variation 19) / DNS لا يحل أسماء النطاقات (نسخة 19)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.88,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation20"
    ],
    "title": "VPN connection issues (variation 20) / مشاكل اتصال VPN (نسخة 20)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.93,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation21"
    ],
    "title": "DNS not resolving domain names (variation 21) / DNS لا يحل أسماء النطاقات (نسخة 21)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.84,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation22"
    ],
    "title": "VPN connection issues (variation 22) / مشاكل اتصال VPN (نسخة 22)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.89,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation23"
    ],
    "title": "DNS not resolving domain names (variation 23) / DNS لا يحل أسماء النطاقات (نسخة 23)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.92,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation24"
    ],
    "title": "WiFi keeps disconnecting (variation 24) / انقطاع متكرر في الواي فاي (نسخة 24)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.93,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation25"
    ],
    "title": "VPN connection issues (variation 25) / مشاكل اتصال VPN (نسخة 25)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.95,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation26"
    ],
    "title": "VPN connection issues (variation 26) / مشاكل اتصال VPN (نسخة 26)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.89,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation27"
    ],
    "title": "VPN connection issues (variation 27) / مشاكل اتصال VPN (نسخة 27)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.92,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation28"
    ],
    "title": "Ethernet cable connected but no internet (variation 28) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 28)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.96,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation29"
    ],
    "title": "VPN connection issues (variation 29) / مشاكل اتصال VPN (نسخة 29)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.9,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation30"
    ],
    "title": "Ethernet cable connected but no internet (variation 30) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 30)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.89,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation31"
    ],
    "title": "DNS not resolving domain names (variation 31) / DNS لا يحل أسماء النطاقات (نسخة 31)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.89,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation32"
    ],
    "title": "Ethernet cable connected but no internet (variation 32) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 32)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.92,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation33"
    ],
    "title": "Ethernet cable connected but no internet (variation 33) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 33)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.92,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation34"
    ],
    "title": "WiFi keeps disconnecting (variation 34) / انقطاع متكرر في الواي فاي (نسخة 34)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.94,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation35"
    ],
    "title": "Ethernet cable connected but no internet (variation 35) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 35)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.94,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation36"
    ],
    "title": "DNS not resolving domain names (variation 36) / DNS لا يحل أسماء النطاقات (نسخة 36)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation37"
    ],
    "title": "Ethernet cable connected but no internet (variation 37) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 37)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation38"
    ],
    "title": "WiFi keeps disconnecting (variation 38) / انقطاع متكرر في الواي فاي (نسخة 38)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.92,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation39"
    ],
    "title": "VPN connection issues (variation 39) / مشاكل اتصال VPN (نسخة 39)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.94,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation40"
    ],
    "title": "VPN connection issues (variation 40) / مشاكل اتصال VPN (نسخة 40)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.9,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation41"
    ],
    "title": "VPN connection issues (variation 41) / مشاكل اتصال VPN (نسخة 41)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.94,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation42"
    ],
    "title": "VPN connection issues (variation 42) / مشاكل اتصال VPN (نسخة 42)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.88,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation43"
    ],
    "title": "WiFi keeps disconnecting (variation 43) / انقطاع متكرر في الواي فاي (نسخة 43)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.96,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation44"
    ],
    "title": "VPN connection issues (variation 44) / مشاكل اتصال VPN (نسخة 44)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.95,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation45"
    ],
    "title": "WiFi keeps disconnecting (variation 45) / انقطاع متكرر في الواي فاي (نسخة 45)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.89,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation46"
    ],
    "title": "Ethernet cable connected but no internet (variation 46) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 46)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.95,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation47"
    ],
    "title": "WiFi keeps disconnecting (variation 47) / انقطاع متكرر في الواي فاي (نسخة 47)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation48"
    ],
    "title": "DNS not resolving domain names (variation 48) / DNS لا يحل أسماء النطاقات (نسخة 48)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.85,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation49"
    ],
    "title": "DNS not resolving domain names (variation 49) / DNS لا يحل أسماء النطاقات (نسخة 49)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.89,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation50"
    ],
    "title": "Ethernet cable connected but no internet (variation 50) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 50)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.92,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation51"
    ],
    "title": "Ethernet cable connected but no internet (variation 51) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 51)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation52"
    ],
    "title": "WiFi keeps disconnecting (variation 52) / انقطاع متكرر في الواي فاي (نسخة 52)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.9,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation53"
    ],
    "title": "Ethernet cable connected but no internet (variation 53) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 53)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.96,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation54"
    ],
    "title": "VPN connection issues (variation 54) / مشاكل اتصال VPN (نسخة 54)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.93,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation55"
    ],
    "title": "VPN connection issues (variation 55) / مشاكل اتصال VPN (نسخة 55)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.9,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation56"
    ],
    "title": "Ethernet cable connected but no internet (variation 56) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 56)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.93,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation57"
    ],
    "title": "DNS not resolving domain names (variation 57) / DNS لا يحل أسماء النطاقات (نسخة 57)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation58"
    ],
    "title": "DNS not resolving domain names (variation 58) / DNS لا يحل أسماء النطاقات (نسخة 58)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.92,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation59"
    ],
    "title": "WiFi keeps disconnecting (variation 59) / انقطاع متكرر في الواي فاي (نسخة 59)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.89,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation60"
    ],
    "title": "DNS not resolving domain names (variation 60) / DNS لا يحل أسماء النطاقات (نسخة 60)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.93,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation61"
    ],
    "title": "Ethernet cable connected but no internet (variation 61) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 61)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation62"
    ],
    "title": "DNS not resolving domain names (variation 62) / DNS لا يحل أسماء النطاقات (نسخة 62)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.87,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation63"
    ],
    "title": "Ethernet cable connected but no internet (variation 63) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 63)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation64"
    ],
    "title": "VPN connection issues (variation 64) / مشاكل اتصال VPN (نسخة 64)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation65"
    ],
    "title": "Ethernet cable connected but no internet (variation 65) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 65)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.95,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation66"
    ],
    "title": "Ethernet cable connected but no internet (variation 66) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 66)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.9,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation67"
    ],
    "title": "VPN connection issues (variation 67) / مشاكل اتصال VPN (نسخة 67)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.9,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation68"
    ],
    "title": "DNS not resolving domain names (variation 68) / DNS لا يحل أسماء النطاقات (نسخة 68)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.86,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation69"
    ],
    "title": "VPN connection issues (variation 69) / مشاكل اتصال VPN (نسخة 69)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.96,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation70"
    ],
    "title": "WiFi keeps disconnecting (variation 70) / انقطاع متكرر في الواي فاي (نسخة 70)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation71"
    ],
    "title": "VPN connection issues (variation 71) / مشاكل اتصال VPN (نسخة 71)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.94,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation72"
    ],
    "title": "WiFi keeps disconnecting (variation 72) / انقطاع متكرر في الواي فاي (نسخة 72)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.95,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation73"
    ],
    "title": "Ethernet cable connected but no internet (variation 73) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 73)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.95,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation74"
    ],
    "title": "Ethernet cable connected but no internet (variation 74) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 74)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.9,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation75"
    ],
    "title": "WiFi keeps disconnecting (variation 75) / انقطاع متكرر في الواي فاي (نسخة 75)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.9,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation76"
    ],
    "title": "DNS not resolving domain names (variation 76) / DNS لا يحل أسماء النطاقات (نسخة 76)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.89,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation77"
    ],
    "title": "VPN connection issues (variation 77) / مشاكل اتصال VPN (نسخة 77)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.92,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation78"
    ],
    "title": "WiFi keeps disconnecting (variation 78) / انقطاع متكرر في الواي فاي (نسخة 78)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.94,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation79"
    ],
    "title": "Ethernet cable connected but no internet (variation 79) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 79)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation80"
    ],
    "title": "VPN connection issues (variation 80) / مشاكل اتصال VPN (نسخة 80)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.89,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation81"
    ],
    "title": "Ethernet cable connected but no internet (variation 81) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 81)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.95,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation82"
    ],
    "title": "DNS not resolving domain names (variation 82) / DNS لا يحل أسماء النطاقات (نسخة 82)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.93,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation83"
    ],
    "title": "WiFi keeps disconnecting (variation 83) / انقطاع متكرر في الواي فاي (نسخة 83)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.92,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation84"
    ],
    "title": "Ethernet cable connected but no internet (variation 84) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 84)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation85"
    ],
    "title": "WiFi keeps disconnecting (variation 85) / انقطاع متكرر في الواي فاي (نسخة 85)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.88,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation86"
    ],
    "title": "DNS not resolving domain names (variation 86) / DNS لا يحل أسماء النطاقات (نسخة 86)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.85,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation87"
    ],
    "title": "WiFi keeps disconnecting (variation 87) / انقطاع متكرر في الواي فاي (نسخة 87)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.88,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation88"
    ],
    "title": "Ethernet cable connected but no internet (variation 88) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 88)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.95,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation89"
    ],
    "title": "DNS not resolving domain names (variation 89) / DNS لا يحل أسماء النطاقات (نسخة 89)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.89,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation90"
    ],
    "title": "DNS not resolving domain names (variation 90) / DNS لا يحل أسماء النطاقات (نسخة 90)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.92,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation91"
    ],
    "title": "DNS not resolving domain names (variation 91) / DNS لا يحل أسماء النطاقات (نسخة 91)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation92"
    ],
    "title": "Ethernet cable connected but no internet (variation 92) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 92)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation93"
    ],
    "title": "Ethernet cable connected but no internet (variation 93) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 93)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.9,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation94"
    ],
    "title": "WiFi keeps disconnecting (variation 94) / انقطاع متكرر في الواي فاي (نسخة 94)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.92,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation95"
    ],
    "title": "WiFi keeps disconnecting (variation 95) / انقطاع متكرر في الواي فاي (نسخة 95)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.93,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation96"
    ],
    "title": "Ethernet cable connected but no internet (variation 96) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 96)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.89,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation97"
    ],
    "title": "WiFi keeps disconnecting (variation 97) / انقطاع متكرر في الواي فاي (نسخة 97)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.9,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation98"
    ],
    "title": "WiFi keeps disconnecting (variation 98) / انقطاع متكرر في الواي فاي (نسخة 98)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.88,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation99"
    ],
    "title": "Ethernet cable connected but no internet (variation 99) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 99)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.94,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation100"
    ],
    "title": "VPN connection issues (variation 100) / مشاكل اتصال VPN (نسخة 100)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.92,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation101"
    ],
    "title": "Ethernet cable connected but no internet (variation 101) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 101)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.94,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation102"
    ],
    "title": "Ethernet cable connected but no internet (variation 102) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 102)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.95,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation103"
    ],
    "title": "VPN connection issues (variation 103) / مشاكل اتصال VPN (نسخة 103)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.9,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation104"
    ],
    "title": "WiFi keeps disconnecting (variation 104) / انقطاع متكرر في الواي فاي (نسخة 104)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation105"
    ],
    "title": "Ethernet cable connected but no internet (variation 105) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 105)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.96,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation106"
    ],
    "title": "WiFi keeps disconnecting (variation 106) / انقطاع متكرر في الواي فاي (نسخة 106)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.91,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation107"
    ],
    "title": "WiFi keeps disconnecting (variation 107) / انقطاع متكرر في الواي فاي (نسخة 107)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.93,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation108"
    ],
    "title": "WiFi keeps disconnecting (variation 108) / انقطاع متكرر في الواي فاي (نسخة 108)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.96,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation109"
    ],
    "title": "Ethernet cable connected but no internet (variation 109) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 109)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.88,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation110"
    ],
    "title": "WiFi keeps disconnecting (variation 110) / انقطاع متكرر في الواي فاي (نسخة 110)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.89,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "VPN",
    "keywords": [
      "vpn",
      "connect",
      "remote access",
      "اتصال VPN",
      "variation111"
    ],
    "title": "VPN connection issues (variation 111) / مشاكل اتصال VPN (نسخة 111)",
    "steps": [
      "1. Verify internet connection / التحقق من اتصال الإنترنت",
      "2. Check VPN credentials / مراجعة بيانات الدخول",
      "3. Restart VPN service / إعادة تشغيل خدمة VPN",
      "4. Try different protocol / تجربة بروتوكول مختلف",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.89,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "DNS",
    "keywords": [
      "dns",
      "resolve",
      "server",
      "خادم DNS",
      "variation112"
    ],
    "title": "DNS not resolving domain names (variation 112) / DNS لا يحل أسماء النطاقات (نسخة 112)",
    "steps": [
      "1. Set DNS to Google or Cloudflare / تعيين DNS لجوجل أو كلاودفلير",
      "2. Flush DNS cache / مسح ذاكرة DNS المؤقتة",
      "3. Restart network adapter / إعادة تشغيل محول الشبكة",
      "4. Check firewall settings / فحص إعدادات الجدار الناري",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "Medium",
    "confidence": 0.84,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation113"
    ],
    "title": "WiFi keeps disconnecting (variation 113) / انقطاع متكرر في الواي فاي (نسخة 113)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.94,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation114"
    ],
    "title": "WiFi keeps disconnecting (variation 114) / انقطاع متكرر في الواي فاي (نسخة 114)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.95,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation115"
    ],
    "title": "WiFi keeps disconnecting (variation 115) / انقطاع متكرر في الواي فاي (نسخة 115)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.9,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation116"
    ],
    "title": "WiFi keeps disconnecting (variation 116) / انقطاع متكرر في الواي فاي (نسخة 116)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.88,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation117"
    ],
    "title": "WiFi keeps disconnecting (variation 117) / انقطاع متكرر في الواي فاي (نسخة 117)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.89,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "Ethernet",
    "keywords": [
      "ethernet",
      "no internet",
      "wired",
      "كابل شبكة",
      "variation118"
    ],
    "title": "Ethernet cable connected but no internet (variation 118) / كابل الإيثرنت متصل لكن لا يوجد إنترنت (نسخة 118)",
    "steps": [
      "1. Check cable and port / فحص الكابل والمنفذ",
      "2. Renew IP address / تجديد عنوان IP",
      "3. Update network adapter driver / تحديث تعريف بطاقة الشبكة",
      "4. Test with another cable / اختبار بكابل آخر",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.92,
    "lang": [
      "en",
      "ar"
    ]
  },
  {
    "category": "Network",
    "subcategory": "WiFi",
    "keywords": [
      "wifi",
      "wireless",
      "connection drop",
      "انقطاع اتصال",
      "variation119"
    ],
    "title": "WiFi keeps disconnecting (variation 119) / انقطاع متكرر في الواي فاي (نسخة 119)",
    "steps": [
      "1. Restart router / إعادة تشغيل الراوتر",
      "2. Update wireless drivers / تحديث تعريفات الشبكة",
      "3. Change WiFi channel / تغيير قناة الواي فاي",
      "4. Check for interference / البحث عن مصادر التشويش",
      "5. Test on another device / الاختبار على جهاز آخر"
    ],
    "severity": "High",
    "confidence": 0.89,
    "lang": [
      "en",
      "ar"
    ]
  }
];

