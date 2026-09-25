import type { PersonalInfo, Project, SkillCategory, EducationItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Majdouleen Mahmoud',
  title: 'Full-Stack & Mobile Application Developer',
  bio: 'Specializing in cross-platform mobile development with Flutter and scalable backend architectures with Laravel & REST APIs. Passionate about building seamless user experiences, clean system architecture, and robust database systems.',
  location: 'Damascus, Syria',
  email: 'majdouleenmahmood1@gmail.com',
  phone: '+963 959031594',
  github: 'github.com/majdoulee2006',
  githubUrl: 'https://github.com/majdoulee2006',
  status: 'Available for Junior Roles & Internships',
  avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
  resumeUrl: '/Majdouleen_Mahmoud.pdf',
};

export const projectsDataEn: Project[] = [
  {
    id: 'edubridge',
    title: 'EduBridge System',
    subtitle: 'Educational Institution Automation Ecosystem',
    description: 'Comprehensive educational institution automation platform featuring real-time attendance verification, multi-role web dashboards, student registration workflows, and automated affair management.',
    fullDescription: 'EduBridge is a full-stack educational institution management system built as a graduation project. It bridges students, teachers, and affairs officers through a seamless mobile interface (Flutter) and a high-performance backend (Laravel REST API). Features include biometrics/QR-based attendance verification, student profile management, push notification dispatcher, and real-time grade tracking.',
    grade: '96% Grade',
    badgeText: 'Graduation Project • Top Honors (96%)',
    category: 'Full-Stack Mobile',
    featured: true,
    bentoSpan: 'col-span-1 md:col-span-2 row-span-2',
    techStack: ['Flutter', 'Dart', 'Laravel', 'PHP', 'REST APIs', 'MySQL', 'WebSockets', 'QR Scanner'],
    features: [
      'Native-feeling Flutter mobile interface for students & instructors',
      'Laravel REST API backend with RBAC security & token auth',
      'Two-step attendance workflow: QR detection + Face verification',
      'Affairs Officer web portal for student registration approval',
      'Real-time automated notification engine for alerts & announcements',
      'Relational database architecture designed in MySQL with indexing'
    ],
    metrics: [
      { label: 'Graduation Project', value: '96%' },
      { label: 'Architecture', value: 'Clean Code + BLoC' },
      { label: 'API Endpoints', value: '45+' }
    ],
    githubUrl: 'https://github.com/majdoulee2006',
    liveUrl: 'https://edu-bradge.netlify.app/',
    demoType: 'mobile',
    accentColor: 'from-emerald-500/20 via-sky-500/10 to-transparent',
    imageUrl: '/images/edubridge.jpg'
  },
  {
    id: 'mall-management',
    title: 'Mall Management System',
    subtitle: 'Desktop Enterprise Administrative Platform',
    description: 'Desktop administrative management system engineered for complex commercial retail operations, store lease tracking, inventory control, and transaction analytics.',
    fullDescription: 'A robust desktop application built with C# and .NET to automate retail mall operations. It enables facility managers to track tenant contracts, calculate revenue metrics, manage maintenance requests, and generate structured financial reports through an intuitive administrative dashboard.',
    badgeText: 'Desktop System',
    category: 'Desktop System',
    featured: true,
    bentoSpan: 'col-span-1 md:col-span-1 row-span-1',
    techStack: ['C#', '.NET', 'SQL Server', 'Windows Forms', 'LINQ'],
    features: [
      'Multi-tenant tracking and shop space allocation management',
      'Automated lease expiration alerts & rental invoicing',
      'Detailed revenue & transaction analytics with report exporting',
      'Role-based access management for store owners and facility admins'
    ],
    metrics: [
      { label: 'Platform', value: '.NET Framework' },
      { label: 'Language', value: 'C#' }
    ],
    githubUrl: 'https://github.com/majdoulee2006',
    demoType: 'desktop',
    accentColor: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    imageUrl: '/images/mall-management.jpg'
  },
  {
    id: 'attendance-verification',
    title: 'Face & QR Attendance Engine',
    subtitle: 'Real-Time Biometric & Scanner Verification',
    description: 'High-speed student attendance verification module integrated with mobile camera for instant QR recognition and biometric matching.',
    fullDescription: 'An advanced biometric module integrated into the EduBridge ecosystem. It performs automated QR code scanning combined with camera-based face verification for fraud-proof classroom attendance recording.',
    badgeText: 'Smart Biometrics',
    category: 'AI & Web',
    featured: true,
    bentoSpan: 'col-span-1 md:col-span-1 row-span-1',
    techStack: ['Flutter', 'OpenCV', 'ArcFace AI', 'Camera API', 'Laravel API'],
    features: [
      'Sub-second QR code parsing and token validation',
      'Anti-spoofing face recognition verification',
      'Offline caching with automatic background sync when reconnected'
    ],
    metrics: [
      { label: 'Latency', value: '< 300ms' },
      { label: 'Accuracy', value: '99.2%' }
    ],
    githubUrl: 'https://github.com/majdoulee2006',
    demoType: 'web',
    accentColor: 'from-violet-500/20 via-purple-500/10 to-transparent'
  },
  {
    id: 'realtime-notifications',
    title: 'Multi-Channel Messaging Hub',
    subtitle: 'Laravel & Flutter Real-Time Alert System',
    description: 'Event-driven notification system connecting web admin panels with mobile client apps for instant alert dispatching.',
    fullDescription: 'A custom push notification engine built on Laravel event listeners and WebSockets, delivering real-time academic announcements, schedule updates, and system alerts to Flutter mobile clients.',
    badgeText: 'Real-Time System',
    category: 'Backend API',
    featured: false,
    bentoSpan: 'col-span-1 md:col-span-2 row-span-1',
    techStack: ['Laravel', 'WebSockets', 'FCM', 'Flutter', 'MySQL'],
    features: [
      'Event-driven broadcast architecture with fallback to FCM',
      'Unread counter sync across multiple active sessions',
      'Rich notification formatting with deep link routing'
    ],
    metrics: [
      { label: 'Protocol', value: 'WebSockets' },
      { label: 'Delivery', value: 'Instant' }
    ],
    githubUrl: 'https://github.com/majdoulee2006',
    demoType: 'mobile',
    accentColor: 'from-amber-500/20 via-orange-500/10 to-transparent'
  }
];

export const projectsDataAr: Project[] = [
  {
    id: 'edubridge',
    title: 'نظام EduBridge المتكامل',
    subtitle: 'منظومة أتمتة المؤسسات التعليمية والأكاديمية',
    description: 'منصة أتمتة شاملة للمؤسسات التعليمية تشتمل على التحقق الفوري من الحضور، لوحات تحكم متعددة الصلاحيات، وإدارة شؤون الطلاب والدرجات.',
    fullDescription: 'EduBridge هو نظام إدارة مؤسسات تعليمية متكامل تم إنشاؤه كمشروع تخرج وحاز على درجة امتياز (96%). يربط بين الطلاب والمدرسين وموظفي الشؤون عبر تطبيق موبايل سلس (Flutter) وخلفية ذات أداء عالٍ (Laravel REST API). يتضمن ميزات مثل تسجيل الحضور بالبصمة البيومترية ورمز الـ QR، إدارة ملفات الطلاب، محرك إشعارات فورية، ومتابعة الدرجات.',
    grade: 'معدل 96%',
    badgeText: 'مشروع التخرج • درجات امتياز (96%)',
    category: 'Full-Stack Mobile',
    featured: true,
    bentoSpan: 'col-span-1 md:col-span-2 row-span-2',
    techStack: ['Flutter', 'Dart', 'Laravel', 'PHP', 'REST APIs', 'MySQL', 'WebSockets', 'QR Scanner'],
    features: [
      'تطبيق موبايل أصيل باستخدام Flutter للطلاب وأعضاء الكادر التدريسي',
      'خلفية برمجية بـ Laravel REST API مع نظام صلاحيات وأمان مرتفع RBAC',
      'نظام توثيق الحضور خطوتين: مسح الـ QR + التعرف البيومتري على الوجه',
      'بوابة ويب لموظف الشؤون لإدارة وتسجيل وموافقة الطلاب',
      'محرك إشعارات فورية مؤتمت للتنبيهات والإعلانات الأكاديمية',
      'معمارية قاعدة بيانات علاقاتية مبنية بـ MySQL مع فهارس الأداء'
    ],
    metrics: [
      { label: 'درجة مشروع التخرج', value: '96%' },
      { label: 'المعمارية البرمجية', value: 'Clean Code + BLoC' },
      { label: 'نقاط الـ API', value: '+45 endpoint' }
    ],
    githubUrl: 'https://github.com/majdoulee2006',
    liveUrl: 'https://edu-bradge.netlify.app/',
    demoType: 'mobile',
    accentColor: 'from-emerald-500/20 via-sky-500/10 to-transparent',
    imageUrl: '/images/edubridge.jpg'
  },
  {
    id: 'mall-management',
    title: 'نظام إدارة المراكز التجارية (Mall)',
    subtitle: 'منصة إدارية لسطح المكتب للمؤسسات والتجزئة',
    description: 'نظام إدارة مكتبي مصمم للعمليات التجارية في المراكز التسويقية، متابعة عقود الإيجار، إدارة المخزون وتحليلات المبيعات.',
    fullDescription: 'تطبيق سطح مكتب قوي ومتين تم إنشاؤه باستخدام C# و .NET لأتمتة عمليات المراكز التجارية والتجزئة. يتيح لمدراء المراكز متابعة عقود المستأجرين، حساب المبيعات، إدارة طلبات الصيانة، وإنشاء تقارير مالية منظمة من خلال لوحة تحكم إدارية مريحة.',
    badgeText: 'نظام سطح مكتب',
    category: 'Desktop System',
    featured: true,
    bentoSpan: 'col-span-1 md:col-span-1 row-span-1',
    techStack: ['C#', '.NET', 'SQL Server', 'Windows Forms', 'LINQ'],
    features: [
      'متابعة المستأجرين وتوزيع المساحات التجارية والمحلات',
      'تنبيهات مؤتمتة لانتهاء عقود الإيجار وإصدار الفواتير',
      'تحليلات دقيقة للمبيعات والمعاملات المالية مع إمكانية التصدير',
      'نظام إعطاء صلاحيات مخصص لأصحاب المحلات ومدراء المراكز'
    ],
    metrics: [
      { label: 'المنصة', value: '.NET Framework' },
      { label: 'لغة البرمجة', value: 'C#' }
    ],
    githubUrl: 'https://github.com/majdoulee2006',
    demoType: 'desktop',
    accentColor: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    imageUrl: '/images/mall-management.jpg'
  },
  {
    id: 'attendance-verification',
    title: 'محرك التحقق من الحضور بالوجه و الـ QR',
    subtitle: 'نظام توثيق فوري بالبصمة البيومترية والمحيطية',
    description: 'وحدة تحقق من الحضور عالية السرعة مدمجة مع كاميرا الموبايل للتعرف المباشر على رموز الـ QR ومطابقة البصمة البيومترية للوجه.',
    fullDescription: 'وحدة بيومترية متقدمة مدمجة ضمن منظومة EduBridge. تقم بقراءة الـ QR والتأكد من هويّة الطالب بالوجه لمنع التزوير وضمان دقة تسجيل الحضور داخل القاعات الأكاديمية.',
    badgeText: 'ذكاء اصطناعي بيومتري',
    category: 'AI & Web',
    featured: true,
    bentoSpan: 'col-span-1 md:col-span-1 row-span-1',
    techStack: ['Flutter', 'OpenCV', 'ArcFace AI', 'Camera API', 'Laravel API'],
    features: [
      'تحليل رمز الـ QR والتحقق من التوكن بأقل من ثانية',
      'مكافحة الانتحال والتحقق البيومتري الذكي للوجه',
      'تخزين مؤقت بدون إنترنت مع مزامنة تلقائية فور الاتصال'
    ],
    metrics: [
      { label: 'زمن الاستجابة', value: '< 300ms' },
      { label: 'دقة المطابقة', value: '99.2%' }
    ],
    githubUrl: 'https://github.com/majdoulee2006',
    demoType: 'web',
    accentColor: 'from-violet-500/20 via-purple-500/10 to-transparent'
  },
  {
    id: 'realtime-notifications',
    title: 'مركز الإشعارات الفورية متعدد القنوات',
    subtitle: 'نظام تنبيهات فوري بين Laravel و Flutter',
    description: 'نظام إشعارات يعتمد على الأحداث يربط بين لوحات تحكم الويب وتطبيقات الموبايل لإرسال التنبيهات والأخبار فوراً.',
    fullDescription: 'محرك إشعارات مخصص مبني على استماع الأحداث في Laravel و WebSockets، يقدم الإعلانات الأكاديمية، تحديثات الجداول والتنبيهات الهامة إلى تطبيقات Flutter على جوالات الطلاب فور حدوثها.',
    badgeText: 'نظام فوري المزامنة',
    category: 'Backend API',
    featured: false,
    bentoSpan: 'col-span-1 md:col-span-2 row-span-1',
    techStack: ['Laravel', 'WebSockets', 'FCM', 'Flutter', 'MySQL'],
    features: [
      'معمارية بث تعتمد على الأحداث (Event-driven) مع احتياطي FCM',
      'مزامنة العداد غير المقروء عبر الجلسات النشطة المتعددة',
      'تنسيق الإشعارات وتوجيه الروابط المباشرة داخل التطبيق'
    ],
    metrics: [
      { label: 'البروتوكول', value: 'WebSockets' },
      { label: 'سرعة التسليم', value: 'فورية' }
    ],
    githubUrl: 'https://github.com/majdoulee2006',
    demoType: 'mobile',
    accentColor: 'from-amber-500/20 via-orange-500/10 to-transparent'
  }
];

export const skillCategoriesEn: SkillCategory[] = [
  {
    title: 'Mobile & Frontend',
    iconName: 'Smartphone',
    skills: [
      { name: 'Flutter', level: 'Advanced', highlight: true, description: 'Cross-platform app development, BLoC pattern, custom UI widgets' },
      { name: 'Dart', level: 'Advanced', highlight: true, description: 'Async programming, OOP, strong typing, clean architecture' },
      { name: 'HTML5 & CSS3', level: 'Advanced', highlight: false, description: 'Responsive layouts, modern flex/grid, web animations' },
      { name: 'JavaScript', level: 'Intermediate', highlight: false, description: 'ES6+, async/await, DOM manipulation, dynamic web apps' },
      { name: 'Tailwind CSS', level: 'Intermediate', highlight: false, description: 'Utility-first styling, responsive design systems' }
    ]
  },
  {
    title: 'Backend & Databases',
    iconName: 'Server',
    skills: [
      { name: 'Laravel (PHP)', level: 'Advanced', highlight: true, description: 'RESTful APIs, Eloquent ORM, authentication, middleware' },
      { name: 'REST APIs', level: 'Advanced', highlight: true, description: 'API design, JSON formatting, bearer token security, Swagger' },
      { name: 'MySQL', level: 'Advanced', highlight: true, description: 'Schema design, foreign key relationships, complex joins, indexing' },
      { name: 'PHP', level: 'Advanced', highlight: false, description: 'Object-oriented PHP, Composer package management' }
    ]
  },
  {
    title: 'Tools & Core Development',
    iconName: 'Cpu',
    skills: [
      { name: 'C# & .NET', level: 'Intermediate', highlight: true, description: 'Desktop window applications, OOP, LINQ query engine' },
      { name: 'Git & GitHub', level: 'Advanced', highlight: true, description: 'Version control, branch management, collaborative pull requests' },
      { name: 'Postman', level: 'Advanced', highlight: false, description: 'API testing, collection runner, environment variable configuration' },
      { name: 'Database Architecture', level: 'Advanced', highlight: false, description: 'ERD modeling, normalization, transaction management' }
    ]
  }
];

export const skillCategoriesAr: SkillCategory[] = [
  {
    title: 'الموبايل والواجهات الأمامية',
    iconName: 'Smartphone',
    skills: [
      { name: 'Flutter', level: 'Advanced', highlight: true, description: 'تطوير تطبيقات الموبايل متعددة المنصات، نمط BLoC، عناصر UI مخصصة' },
      { name: 'Dart', level: 'Advanced', highlight: true, description: 'البرمجة غير المتزامنة، OOP، الأنواع القوية، المعمارية النظيفة' },
      { name: 'HTML5 & CSS3', level: 'Advanced', highlight: false, description: 'تصاميم متجاوبة، Flexbox و Grid الحديثة، حركات الويب' },
      { name: 'JavaScript', level: 'Intermediate', highlight: false, description: 'ES6+، Async/Await، التفاعل مع العناصر، تطبيقات ويب حركية' },
      { name: 'Tailwind CSS', level: 'Intermediate', highlight: false, description: 'تصميم سريع وبناء أنظمة واجهات متجاوبة' }
    ]
  },
  {
    title: 'الخلفيات وقواعد البيانات',
    iconName: 'Server',
    skills: [
      { name: 'Laravel (PHP)', level: 'Advanced', highlight: true, description: 'بناء RESTful APIs، Eloquent ORM، المصادقة والـ Middleware' },
      { name: 'REST APIs', level: 'Advanced', highlight: true, description: 'تصميم الواجهات البرمجية، تنسيق JSON، توثيق Bearer Token' },
      { name: 'MySQL', level: 'Advanced', highlight: true, description: 'تصميم المخططات، العلاقات والأجوبة المعقدة، الفهارس والأداء' },
      { name: 'PHP', level: 'Advanced', highlight: false, description: 'البرمجة كائنية التوجه بـ PHP وإدارة الحزم بـ Composer' }
    ]
  },
  {
    title: 'الأدوات وهندسة البرمجيات',
    iconName: 'Cpu',
    skills: [
      { name: 'C# & .NET', level: 'Intermediate', highlight: true, description: 'تطبيقات سطح المكتب لنظام ويندوز، OOP، واستعلامات LINQ' },
      { name: 'Git & GitHub', level: 'Advanced', highlight: true, description: 'إدارة النسخ والتحكم بالمستودعات والعمل الجماعي' },
      { name: 'Postman', level: 'Advanced', highlight: false, description: 'اختبار الواجهات البرمجية APIs، المجموعات والمتغيرات' },
      { name: 'هندسة قواعد البيانات', level: 'Advanced', highlight: false, description: 'مخططات ERD، الضبط وتصحيح المعاملات التزامن' }
    ]
  }
];

export const getProjects = (lang: string): Project[] => {
  return lang === 'ar' ? projectsDataAr : projectsDataEn;
};

export const getSkillCategories = (lang: string): SkillCategory[] => {
  return lang === 'ar' ? skillCategoriesAr : skillCategoriesEn;
};

// Fallback exports for backward compatibility
export const projectsData = projectsDataEn;
export const skillCategories = skillCategoriesEn;
export const educationData: EducationItem[] = [
  {
    degree: 'Diploma in Information Technology',
    institution: 'Damascus Training Centre (DTC / UNRWA)',
    location: 'Damascus, Syria',
    period: '2024 – 2026',
    grade: '83.84% Grade',
    description: 'Comprehensive 2-year technical diploma program specializing in Software Engineering, Mobile Application Development, Web Development, and Database Systems.',
    highlights: [
      'Graduation Project "EduBridge" awarded outstanding score of 96%',
      'Specialization in Flutter Mobile App Development & Laravel REST APIs',
      'Hands-on mastery in relational database design (MySQL) and C# .NET desktop software',
      'Solid training in Object-Oriented Programming (OOP) and Software Architecture'
    ]
  }
];
export const statsData = [
  { label: 'Graduation Project', value: '96%', detail: 'EduBridge Project' },
  { label: 'IT Diploma Grade', value: '83.84%', detail: 'Damascus Training Centre' },
  { label: 'Core Frameworks', value: 'Flutter & Laravel', detail: 'Mobile & Backend' },
  { label: 'Status', value: 'Ready to Hire', detail: 'Junior & Internship Roles' },
];
