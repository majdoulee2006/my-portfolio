import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    nav: {
      name: 'Majdouleen Mahmoud',
      devTitle: 'Flutter & Mobile Specialist',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills & Tech',
      education: 'Education',
      contact: 'Contact',
      contactBtn: 'Contact Me',
      cvBtn: 'CV',
      downloadCv: 'Download CV',
      availableForHire: 'Available for hire',
    },
    hero: {
      name: 'Majdouleen Mahmoud',
      status: 'Available for Junior Roles & Internships',
      greetingHi: "Hi, I'm",
      roles: [
        'Flutter & Mobile Specialist',
        'Laravel & REST API Architect',
        'Biometric AI Solutions Developer',
        'C# & .NET Desktop Engineer',
      ],
      location: 'Damascus, Syria',
      institution: 'Damascus Training Centre (DTC / UNRWA)',
      scoreBadge: 'Graduation Project: 96%',
      diplomaBadge: 'Diploma GPA: 83.84%',
      bio: 'Specializing in cross-platform mobile development with Flutter and scalable backend architectures with Laravel & REST APIs. Passionate about building seamless user experiences, clean system architecture, and robust database systems.',
      coreTech: 'Core Tech:',
      contactMe: 'Contact Me',
      whatsappChat: 'WhatsApp Chat',
      downloadCv: 'Download CV',
      viewProjects: 'View Projects',
      copyEmail: 'Copy Email',
      emailCopied: 'Copied!',
      copyPhone: 'Copy Phone',
      phoneCopied: 'Copied!',
      terminalTitle: 'majdouleen_dev_spec.dart',
      cardTabProfile: 'Developer Profile',
      cardTabCode: 'Architecture Spec',
      gradPillLabel: 'GRADUATION PROJECT',
      gradPillVal: '96% Honors',
      specPillLabel: 'DIPLOMA GPA',
      specPillVal: '83.84%',
    },
    stats: {
      gradScore: 'Graduation Project',
      gradDetail: 'EduBridge System',
      diplomaGrade: 'IT Diploma Grade',
      diplomaDetail: 'Damascus Training Centre',
      coreFrameworks: 'Core Frameworks',
      frameworkDetail: 'Flutter & Laravel',
      status: 'Ready to Hire',
      statusDetail: 'Junior & Internship Roles',
    },
    projects: {
      badge: 'Featured Portfolio Works',
      titlePrefix: 'Featured',
      titleAccent: 'Projects & Engineering',
      description: 'Interactive showcase of full-stack mobile applications, backend REST APIs, desktop administration systems, and smart biometric modules.',
      filterAll: 'All',
      filterMobile: 'Full-Stack Mobile',
      filterDesktop: 'Desktop System',
      filterAI: 'AI & Web',
      filterBackend: 'Backend API',
      viewDetails: 'View System Details',
      liveDemo: 'Live App Demo',
    },
    modal: {
      overview: 'System Overview',
      features: 'Key Architecture & Features',
      techStack: 'Technologies & Frameworks',
      metrics: 'System Performance Metrics',
      close: 'Close',
      visitSite: 'Visit Live Application',
      viewGithub: 'View GitHub Repository',
      portfolioTag: 'Majdouleen Mahmoud • Portfolio',
    },
    dock: {
      copyEmail: 'Copy Email',
      copiedToast: 'Email copied to clipboard!',
      call: 'Call',
      hireMe: 'Hire Me',
    },
    tech: {
      badge: 'Technical Expertise & Stack',
      titlePrefix: 'Tech Stack &',
      titleAccent: 'Core Competencies',
      description: 'Specialized cross-platform mobile developer, backend REST API architect, and database systems programmer.',
      levelAdvanced: 'Advanced',
      levelIntermediate: 'Intermediate',
    },
    education: {
      badge: 'Academic Qualification',
      titlePrefix: 'Education &',
      titleAccent: 'Achievements',
      description: 'Formal software engineering diploma education with honors performance.',
      gradeBadge: 'Diploma Grade: 83.84%',
      degree: 'Diploma in Information Technology',
      institution: 'Damascus Training Centre (DTC / UNRWA)',
      location: 'Damascus, Syria',
      period: '2024 – 2026',
      highlights: [
        'Graduation Project "EduBridge" awarded outstanding score of 96%',
        'Specialization in Flutter Mobile App Development & Laravel REST APIs',
        'Hands-on mastery in relational database design (MySQL) and C# .NET desktop software',
        'Solid training in Object-Oriented Programming (OOP) and Software Architecture',
      ],
    },
    contact: {
      badge: 'Get In Touch',
      titlePrefix: "Let's Work",
      titleAccent: 'Together',
      description: 'Currently open for Junior Full-Stack Developer roles, Mobile Application opportunities, internships, and engineering projects.',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone / WhatsApp',
      locationLabel: 'Location',
      githubLabel: 'GitHub Profile',
      cvCardTitle: 'Curriculum Vitae',
      cvFileName: 'Majdouleen Mahmoud Resume',
      downloadPdf: 'Download PDF',
      formTitle: 'Send a Message',
      nameLabel: 'Your Name',
      emailInputLabel: 'Your Email',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      sendBtn: 'Send Message',
      successMsg: '✓ Opening default mail client with your message details!',
      copy: 'Copy',
      copied: 'Copied',
      whatsapp: 'WhatsApp',
    },
    footer: {
      name: 'Majdouleen Mahmoud',
      subtitle: 'Full-Stack & Mobile Application Developer • Damascus, Syria',
      credit: 'Crafted with Flutter & Laravel expertise',
    },
  },
  ar: {
    nav: {
      name: 'مجدولين محمود',
      devTitle: 'مطورة تطبيقات الموبايل والأنظمة المتكاملة',
      about: 'عني',
      projects: 'المشاريع',
      skills: 'المهارات',
      education: 'التعليم',
      contact: 'اتصل بي',
      contactBtn: 'تواصل معي',
      cvBtn: 'السيرة الذاتية',
      downloadCv: 'تحميل السيرة الذاتية',
      availableForHire: 'متاحة للعمل والتوظيف',
    },
    hero: {
      name: 'مجدولين محمود',
      status: 'متاحة لفرص العمل والتدريب (Junior & Internships)',
      greetingHi: 'مرحباً، أنا',
      roles: [
        'متخصصة Flutter وتطبيقات الموبايل',
        'مهندسة خلفيات Laravel و REST APIs',
        'مطورة حلول الذكاء الاصطناعي والبيومترية',
        'مطورة برامج سطح المكتب C# & .NET',
      ],
      location: 'دمشق، سوريا',
      institution: 'مركز تدريب دمشق (DTC / UNRWA)',
      scoreBadge: 'مشروع التخرج 96%',
      diplomaBadge: 'معدل الدبلوم: 83.84%',
      bio: 'متخصصة في تطوير تطبيقات الهواتف المحمولة متعددة المنصات باستخدام Flutter وبناء البنيات البرمجية الخلفية القابلة للتوسع بـ Laravel و REST APIs. شغوفة بتقديم تجربة مستخدم سلسة، وهندسة برمجية نظيفة، وأنظمة قواعد بيانات متينة.',
      coreTech: 'التقنيات الأساسية:',
      contactMe: 'تواصل معي',
      whatsappChat: 'محادثة واتساب',
      downloadCv: 'تحميل السيرة الذاتية',
      viewProjects: 'عرض المشاريع',
      copyEmail: 'نسخ البريد',
      emailCopied: 'تم النسخ!',
      copyPhone: 'نسخ الرقم',
      phoneCopied: 'تم النسخ!',
      terminalTitle: 'majdouleen_dev_spec.dart',
      cardTabProfile: 'بطاقة المطور',
      cardTabCode: 'المعمارية البرمجية',
      gradPillLabel: 'مشروع التخرج',
      gradPillVal: '96% امتياز عالي',
      specPillLabel: 'معدل الدبلوم العام',
      specPillVal: '83.84%',
    },
    stats: {
      gradScore: 'مشروع التخرج',
      gradDetail: 'نظام EduBridge',
      diplomaGrade: 'معدل الدبلوم',
      diplomaDetail: 'مركز تدريب دمشق',
      coreFrameworks: 'إطارات التطوير',
      frameworkDetail: 'Flutter & Laravel',
      status: 'حالة التوظيف',
      statusDetail: 'جاهزة للعمل فوراً',
    },
    projects: {
      badge: 'أبرز الأعمال البرمجية',
      titlePrefix: 'المشاريع و',
      titleAccent: 'هندسة البرمجيات',
      description: 'معرض تفاعلي لتطبيقات الموبايل المتكاملة، وأنظمة الـ REST API الخلفية، وبرامج إدارة سطح المكتب، وأنظمة البصمة والذكاء الاصطناعي.',
      filterAll: 'الكل',
      filterMobile: 'تطبيقات موبايل',
      filterDesktop: 'أنظمة سطح المكتب',
      filterAI: 'الذكاء الاصطناعي والويب',
      filterBackend: 'أنظمة خلفية APIs',
      viewDetails: 'عرض تفاصيل النظام',
      liveDemo: 'معاينة حية للنظام',
    },
    modal: {
      overview: 'نظرة عامة على النظام',
      features: 'المميزات والمعمارية البرمجية',
      techStack: 'التقنيات والإطارات المستخدمة',
      metrics: 'مؤشرات الأداء والنظام',
      close: 'إغلاق',
      visitSite: 'زيارة تطبيق الويب الحي',
      viewGithub: 'عرض المستودع على GitHub',
      portfolioTag: 'معرض أعمال مجدولين محمود',
    },
    dock: {
      copyEmail: 'نسخ الإيميل',
      copiedToast: 'تم نسخ البريد بنجاح!',
      call: 'اتصال',
      hireMe: 'تواصل معي',
    },
    tech: {
      badge: 'الخبرات والمهارات التقنية',
      titlePrefix: 'المهارات و',
      titleAccent: 'التقنيات الأساسية',
      description: 'متخصصة برمجية في تطوير تطبيقات الهواتف المحمولة، بناء خلفيات الـ REST API، وأنظمة قواعد البيانات المتكاملة.',
      levelAdvanced: 'متقدم جداً',
      levelIntermediate: 'متقدم',
    },
    education: {
      badge: 'المؤهلات الأكاديمية',
      titlePrefix: 'التعليم و',
      titleAccent: 'الإنجازات',
      description: 'دبلوم أكاديمي رسمي في تكنولوجيا المعلومات وهندسة البرمجيات بدرجة امتياز.',
      gradeBadge: 'معدل الدبلوم: 83.84%',
      degree: 'دبلوم تكنولوجيا المعلومات',
      institution: 'مركز تدريب دمشق (DTC / UNRWA)',
      location: 'دمشق، سوريا',
      period: '2024 – 2026',
      highlights: [
        'مشروع التخرج "EduBridge" حصل على درجة امتياز بمعدل 96%',
        'تخصص متقدم في تطوير تطبيقات الموبايل بـ Flutter وخلفيات الـ REST APIs بـ Laravel',
        'إتقان تصميم وإدارة قواعد البيانات العلاقاتية (MySQL) وبرامج سطح المكتب بـ C# .NET',
        'تدريب مكثف في البرمجة الكائنية التوجه (OOP) وهندسة النظم البرمجية',
      ],
    },
    contact: {
      badge: 'تواصل معي',
      titlePrefix: 'لنعمل معاً',
      titleAccent: 'لبناء مشروعك',
      description: 'متاحة حالياً لفرص العمل كـ Junior Full-Stack Developer، وتطوير تطبيقات الموبايل، والفرص التدريبية والمشاريع البرمجية.',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف / الواتساب',
      locationLabel: 'الموقع الجغرافي',
      githubLabel: 'حساب GitHub',
      cvCardTitle: 'السيرة الذاتية (CV)',
      cvFileName: 'سيرة مجدولين محمود الذاتية',
      downloadPdf: 'تحميل PDF',
      formTitle: 'إرسال رسالة مباشرة',
      nameLabel: 'اسمك الكامل',
      emailInputLabel: 'بريدك الإلكتروني',
      subjectLabel: 'عنوان الرسالة',
      messageLabel: 'تفاصيل الرسالة',
      sendBtn: 'إرسال الرسالة',
      successMsg: '✓ جاري فتح تطبيق البريد الإلكتروني لإرسال رسالتك!',
      copy: 'نسخ',
      copied: 'تم النسخ',
      whatsapp: 'واتساب',
    },
    footer: {
      name: 'مجدولين محمود',
      subtitle: 'مطورة تطبيقات الموبايل والويب المتكاملة • دمشق، سوريا',
      credit: 'تم البناء والبرمجة بخبرات Flutter & Laravel',
    },
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved === 'ar' || saved === 'en') ? saved : 'en';
  });

  const isRtl = language === 'ar';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    localStorage.setItem('portfolio_lang', language);
  }, [language, isRtl]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (path: string): any => {
    const keys = path.split('.');
    let current: any = translations[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        return path;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isRtl, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
