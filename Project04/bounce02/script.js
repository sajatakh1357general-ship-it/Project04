const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
}

const translations = {
  en: {
    docTitle: "Personal Portfolio",
    logo: "MyPortfolio",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navHobbies: "Hobbies",
    navContact: "Contact",
    heroTitle: "Saja Khanfar",
    heroDesc: "Cybersecurity Graduate",
    skillsTitle: "Skills",
    skill1: "Network Security & Wireshark",
    skill2: "Vulnerability Assessment",
    skill3: "Penetration Testing",
    skill4: "Web Security",
    skill5: "Linux / Bash",
    skill6: "SOC Analysis",
    projectsTitle: "Projects Showcase",
    proj0Title: "Project 00: Environment & Shell",
    proj0Desc: "Terminal navigation, environment variables, and essential shell scripting.",
    proj1Title: "Project 01: Git & Collaboration",
    proj1Desc: "Source control management, branching strategies, and commit hygiene.",
    proj2Title: "Project 02: Semantic HTML & CSS",
    proj2Desc: "Building accessible page layouts, typography, and responsive Flexbox structures.",
    proj3Title: "Project 03: Interactive JavaScript",
    proj3Desc: "DOM manipulation, browser event listeners, and dynamic UI state handling.",
    hobbiesTitle: "Hobbies & Interests",
    hobby1: "CTF & Cyber Challenges",
    hobby2: "DoS Simulation & Mitigation",
    hobby3: "Painting",
    hobby4: "Handmade Crafts",
    contactTitle: "Contact Me",
    formName: "Name",
    formEmail: "Email",
    formMsg: "Message",
    namePlaceholder: "Your Name",
    emailPlaceholder: "your.email@example.com",
    msgPlaceholder: "Write your message here...",
    btnSend: "Send Message",
    footerText: "© 2026 Saja Khanfar. All rights reserved.",
    toggleLangBtn: "العربية"
  },
  ar: {
    docTitle: "ملفي الشخصي",
    logo: "معرض أعمالي",
    navAbout: "نبذة عني",
    navSkills: "المهارات",
    navProjects: "المشاريع",
    navHobbies: "الهوايات",
    navContact: "تواصل معي",
    heroTitle: "سجى خنفر",
    heroDesc: "خريجة أمن سيبراني",
    skillsTitle: "المهارات التقنية",
    skill1: "أمن الشبكات وتحليل الحزم (Wireshark)",
    skill2: "تقييم واكتشاف الثغرات",
    skill3: "اختبار الاختراق الأخلاقي",
    skill4: "أمن تطبيقات الويب",
    skill5: "لينكس وبرمجة باش (Bash)",
    skill6: "تحليل العمليات الأمنية (SOC)",
    projectsTitle: "معرض المشاريع",
    proj0Title: "مشروع 00: البيئة والطرفية",
    proj0Desc: "التنقل في الطرفية، متغيرات البيئة، وبرمجة نصوص الـ Shell.",
    proj1Title: "مشروع 01: إدارة النسخ والتعاون",
    proj1Desc: "إدارة الإصدارات بـ Git، تفريع المستودعات، وتنظيم الـ Commits.",
    proj2Title: "مشروع 02: بناء الهيكل والتنسيق",
    proj2Desc: "تصميم صفحات ويب دلالية وسهلة الوصول وتنسيقات متجاوبة بـ Flexbox.",
    proj3Title: "مشروع 03: تفاعلية جافاسكريبت",
    proj3Desc: "التعديل على شجرة الـ DOM، معالجة أحداث المتصفح، وديناميكية الواجهة.",
    hobbiesTitle: "الهوايات والاهتمامات",
    hobby1: "تحديات الأمن السيبراني (CTF)",
    hobby2: "محاكاة هجمات حجب الخدمة والحد منها",
    hobby3: "الرسم",
    hobby4: "الأشغال اليدوية",
    contactTitle: "تواصل معي",
    formName: "الاسم",
    formEmail: "البريد الإلكتروني",
    formMsg: "الرسالة",
    namePlaceholder: "اسمك الكامل",
    emailPlaceholder: "بريدك الإلكتروني",
    msgPlaceholder: "اكتب رسالتك هنا...",
    btnSend: "إرسال الرسالة",
    footerText: "© 2026 سجى خنفر. جميع الحقوق محفوظة.",
    toggleLangBtn: "English"
  }
};

let currentLang = 'en';
const langToggleBtn = document.getElementById('lang-toggle');

if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';

    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (translations[currentLang] && translations[currentLang][key]) {
        element.textContent = translations[currentLang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (translations[currentLang] && translations[currentLang][key]) {
        element.placeholder = translations[currentLang][key];
      }
    });

    langToggleBtn.textContent = translations[currentLang].toggleLangBtn;
  });
}
