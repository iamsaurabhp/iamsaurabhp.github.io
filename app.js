const APP_VERSION = "1.0";
const CONSENT_COOKIE_NAME = "saurabh_cookie_consent";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;
const CONSENT_VERSION = 1;

document.addEventListener("DOMContentLoaded", () => {
  const topbar = document.getElementById("topbar");
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const themeBtn = document.getElementById("themeBtn");
  const langBtn = document.getElementById("langBtn");
  const printBtn = document.getElementById("printBtn");
  const year = document.getElementById("year");
  const version = document.getElementById("version");
  const skillSearch = document.getElementById("skillSearch");
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const sendBtn = document.getElementById("sendBtn");
  const emailLink = document.getElementById("emailLink");
  const privacyConsent = document.getElementById("privacyConsent");
  const cookieBanner = document.getElementById("cookieBanner");
  const cookieOptions = document.getElementById("cookieOptions");
  const cookieCustomizeBtn = document.getElementById("cookieCustomizeBtn");
  const cookieRejectBtn = document.getElementById("cookieRejectBtn");
  const cookieSaveBtn = document.getElementById("cookieSaveBtn");
  const cookieAcceptBtn = document.getElementById("cookieAcceptBtn");
  const cookieAnalytics = document.getElementById("cookieAnalytics");
  const cookieSettingsBtn = document.getElementById("cookieSettingsBtn");
  const root = document.documentElement;

  // Parallax Pointer Interactive Backdrop
  const setupInteractiveBackground = () => {
    const canAnimateBackdrop = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 768px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = 0;
    let activeTimer = 0;
    let latestX = window.innerWidth * 0.5;
    let latestY = window.innerHeight * 0.34;

    const setBackgroundPosition = (x, y) => {
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;
      const offsetX = ((x / width) - 0.5) * 22;
      const offsetY = ((y / height) - 0.5) * 22;

      root.style.setProperty("--pointer-x", `${x}px`);
      root.style.setProperty("--pointer-y", `${y}px`);
      root.style.setProperty("--bg-x", `${offsetX.toFixed(2)}px`);
      root.style.setProperty("--bg-y", `${offsetY.toFixed(2)}px`);
      root.style.setProperty("--bg-x-inverse", `${(-offsetX).toFixed(2)}px`);
      root.style.setProperty("--bg-y-inverse", `${(-offsetY).toFixed(2)}px`);
    };

    const queueBackgroundPosition = (event) => {
      latestX = event.clientX;
      latestY = event.clientY;

      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        setBackgroundPosition(latestX, latestY);
        animationFrame = 0;
      });
    };

    const pulseBackground = () => {
      root.classList.add("bg-active");
      window.clearTimeout(activeTimer);
      activeTimer = window.setTimeout(() => {
        root.classList.remove("bg-active");
      }, 650);
    };

    const updateScrollShift = () => {
      root.style.setProperty("--scroll-shift", `${(window.scrollY * -0.035).toFixed(2)}px`);
    };

    setBackgroundPosition(window.innerWidth * 0.5, window.innerHeight * 0.34);

    if (!canAnimateBackdrop || prefersReducedMotion) return;

    updateScrollShift();
    window.addEventListener("pointermove", queueBackgroundPosition, { passive: true });
    window.addEventListener("pointerdown", pulseBackground, { passive: true });
    window.addEventListener("scroll", updateScrollShift, { passive: true });
    window.addEventListener("resize", () => {
      setBackgroundPosition(window.innerWidth * 0.5, window.innerHeight * 0.34);
      updateScrollShift();
    }, { passive: true });
  };

  setupInteractiveBackground();

  // Multi-Language Translation dictionary (English / Hindi)
  const translations = {
    en: {
      metaTitle: "Saurabh Patil | Associate Solution Architect",
      metaDescription: "Portfolio of Saurabh Patil, an Associate Solution Architect and Full-Stack Engineer with 5+ years of experience modernizing enterprise applications with React, Node.js, PHP, MySQL, and AWS.",
      canonicalUrl: "https://iamsaurabhp.github.io/",
      ogLocale: "en_US",

      skip: "Skip to content",
      navAria: "Main Navigation",
      openNav: "Open navigation",
      quickInfo: "Quick Info",
      langBtnAria: "Switch to Hindi",
      themeAria: "Toggle theme",
      legalLinksAria: "Legal links",
      brandRole: "Associate Solution Architect • React & Node.js • DevOps",

      navProfile: "Profile",
      navSkills: "Skills",
      navProjects: "Projects",
      navExperience: "Experience",
      navEducation: "Education",
      navContact: "Contact",

      themeBtn: "Theme",
      printBtn: "Resume / PDF",

      heroPill: "Associate Solution Architect • Full-Stack Engineer",
      heroSubtitle: "Associate Solution Architect • Nagpur, MH, India",
      heroLead: "Associate Solution Architect and Full-Stack Engineer with 5+ years of experience building and modernizing enterprise web applications using React.js, Node.js, PHP, MySQL, and AWS. My work spans application architecture, API and database design, performance optimization, CI/CD, production deployment, and developer mentoring.",

      quickContact: "Contact",
      quickProjects: "Projects",
      quickSkills: "Skills",
      resumeLink: "Resume",

      kpiExp: "Years Experience",
      kpiProjects: "Cloud Certifications",
      kpiMigration: "CRM Modernized",

      focusTitle: "Focus",
      focus1: "High-performance React & Next.js user interfaces",
      focus2: "Scalable Microservices & Real-time WebSockets APIs",
      focus3: "DevOps containerization, Nginx routing & AWS cloud hosting",

      profileTitle: "Associate Solution Architect Profile",
      profileText: "I design application architecture for enterprise CRM and web platforms and translate business requirements into technical designs, API contracts, database schemas, proofs of concept, and implementation plans. My hands-on background includes modernizing legacy PHP systems with React and Node.js, improving data access with Redis and MySQL optimization, and supporting production delivery on AWS.",

      strengthsTitle: "Strengths",
      strength1: "Migration & Scalability: Experience refactoring legacy code into decoupled microservices.",
      strength2: "Performance & Latency Optimization: Focused on speed, clean database indexing, and caching.",
      strength3: "DevOps & Automation: Skilled in Docker containerization and AWS CI/CD pipelines.",

      areasTitle: "Areas of Interest",
      areasNote: "Continuous learning in distributed queueing systems, system security protocols, and advanced automated testing.",

      skillsTitle: "Technical Skills",
      skillsHint: "Use search to highlight specific libraries, tools, or frameworks.",
      skillPlaceholder: "Search e.g. React, Docker, AWS...",

      archTitle: "Architecture & Design",
      archText: "Design patterns, distributed systems, decoupled microservices, and secure API gateways.",

      frontendText: "Responsive design, state management, optimized rendering, and custom hooks.",
      backendText: "Scalable API routes, real-time sync with Socket.IO, database schemas, and fast caching stores.",
      engineeringTitle: "DevOps & Tools",
      engineeringText: "Dockerized apps, Nginx reverse proxies, cloud infrastructure hosting, and automated testing.",

      projectsTitle: "Web & Mobile Projects",
      projectsIntro: "A selection of recent personal, academic, and freelance projects showcasing full-stack capabilities.",
      gtaDesc: "A visually striking, SEO-optimized landing page for GTA VI built with Next.js and React. Features pixel-perfect responsive layouts, lazy-loaded assets, and performant animations to engage fans.",
      gta1: "Next.js & React Framework structure",
      gta2: "Pixel-perfect layouts & lazy-loaded assets",
      gta3: "Performant CSS animations & SEO-oriented structure",
      
      chatifyDesc: "Full-featured chat app built with Next.js, Node.js, Express, and MongoDB microservices. Enables real-time messaging, typing indicators, presence status with Socket.IO, OTP-based email auth, and image messaging.",
      chatify1: "Socket.IO real-time notification layer",
      chatify2: "RabbitMQ asynchronous message queues",
      chatify3: "Redis cache and JWT cookie authentication",

      jyotishWebDesc: "Content-rich astrology platform built with React, CodeIgniter, MySQL, and AWS, with Redis-backed caching and production deployment support.",
      jyotishWeb1: "CodeIgniter PHP backend framework",
      jyotishWeb2: "React single-page dashboard app",
      jyotishWeb3: "AWS EC2 hosting with CloudFront & Redis caching",

      jyotishAppDesc: "Flutter-based mobile companion to the Jyotish Vishwakosh platform, with Firebase Authentication, push notifications, and application updates.",
      jyotishApp1: "Flutter Android & iOS framework compatibility",
      jyotishApp2: "Firebase authentication and remote analytics config",
      jyotishApp3: "FCM Push Notification integration",

      experienceTitle: "Professional Experience",
      expSimpleWorksWhen: "Apr 2022 – Present",
      expSimpleWorksTitle: "SimpleWorks",
      expAsaRoleTitle: "Associate Solution Architect",
      expAsaWhenRole: "Dec 2025 – Present • Nagpur",
      expAsaBullet1: "Design application architecture for enterprise CRM and web platforms, defining component boundaries, integrations, data flows, and deployment approaches.",
      expAsaBullet2: "Translate business requirements into technical designs, API contracts, database schemas, proofs of concept, and implementation plans.",
      expAsaBullet3: "Guide decisions involving API design, database modeling, performance, reliability, security, and deployment.",
      expAsaBullet4: "Mentor developers and collaborate with product, engineering, and QA teams through delivery.",
      expSeRoleTitle: "Software Engineer",
      expSeWhenRole: "Apr 2022 – Nov 2025 • Nagpur",
      expSeBullet1: "Led modernization of more than 70% of a legacy PHP/Smarty CRM using React.js and Node.js, separating presentation, API, and business-logic layers.",
      expSeBullet2: "Improved CRM workflows through Redis caching, targeted MySQL indexing, and query and aggregation optimization.",
      expSeBullet3: "Designed operational REST APIs, introduced Docker and GitHub Actions CI/CD, supported AWS deployments, and mentored junior developers.",

      expFreelanceWhen: "Feb 2020 – Oct 2021",
      expFreelanceTitle: "Freelance Software Engineer • Whiteboard Software",
      expFreelanceRole: "Legacy Migrations & Mobile Development",
      expFreelanceBullet1: "Delivered full-stack features for Jyotish Vishwakosh across web and mobile applications.",
      expFreelanceBullet2: "Built React.js modules and CodeIgniter APIs backed by MySQL and AWS.",
      expFreelanceBullet3: "Developed Flutter and Firebase integrations and supported deployment and production operation.",

      educationTitle: "Education & Timeline",
      eduMcaWhen: "Sep 2020 – Jun 2022",
      eduMcaSchool: "Shri Ramdeobaba College of Engineering & Management, Nagpur",
      eduMcaDegree: "MCA (Master of Computer Applications) • CGPA: 8.6 / 10",
      eduMcaBullet1: "Specialized in full-stack web architectures, distributed systems, and database optimization.",
      eduMcaBullet2: "Engaged in advanced cloud computing modules, microservices configurations, and design patterns.",

      eduBcaWhen: "Jun 2017 – May 2020",
      eduBcaSchool: "Shri Shivaji Science College, Nagpur",
      eduBcaDegree: "BCA (Bachelor of Computer Applications) • Grade: 64%",
      eduBcaBullet1: "Acquired strong foundational knowledge in programming concepts, data structures, and relational databases.",
      eduBcaBullet2: "Practiced software engineering methodologies and web development basics.",

      certsTitle: "Certifications",
      certsText: "Professional certifications validate expertise in cloud computing and modern tech platforms.",
      certAwsDesc: "Official AWS Certified Solutions Architect – Associate credential validating expertise in designing resilient, secure, high-performing, and cost-optimized distributed systems on AWS.",
      certOciGenAiDesc: "Official Oracle Cloud Infrastructure 2025 credential validating expertise in designing and implementing Generative AI solutions using OCI AI services, large language models, and RAG architectures.",
      certOciGenAiOrg: "Oracle Certification",
      viewCert: "View Certificate",

      contactTitle: "Get in Touch",
      contactIntro: "I am open to senior full-stack, technical lead, and solution architecture opportunities involving application modernization and cloud delivery.",
      linksTitle: "Links & Info",
      emailLink: "Send Email",
      contactPhoneKey: "Phone",

      formTitle: "Contact Form",
      formName: "Name",
      formNamePh: "Your name",
      formEmailPh: "Email for reply",
      formSubject: "Subject",
      formSubjectPh: "Brief subject",
      formMessage: "Message",
      formMessagePh: "Write message...",
      formPrivacyConsentPrefix: "I agree to send this form data to get in touch.",
      sendBtn: "Send Message",

      formSending: "Sending message...",
      formSendingButton: "Sending...",
      formSuccess: "Message sent successfully.",
      formPrivacyRequired: "Please accept the consent terms before sending.",
      formError: "Failed to send message. Please email me directly.",

      privacyLink: "Privacy Policy",
      cookiesLink: "Cookies",
      cookieSettings: "Cookie settings",
      cookieBannerTitle: "Privacy Settings",
      cookieBannerText: "I use essential cookies to remember system configurations like theme and language preference. Optional analytical cookies can be activated below.",
      cookieNecessary: "Necessary",
      cookieNecessaryText: "Saves active UI configuration selections.",
      cookieAnalytics: "Analytics",
      cookieAnalyticsText: "Aggregates basic site visitation metrics.",
      cookieCustomize: "Customize",
      cookieReject: "Reject",
      cookieSave: "Save Choice",
      cookieAccept: "Accept All",
      footerText: "Personal Portfolio • Associate Solution Architect"
    },

    hi: {
      metaTitle: "सौरभ पाटिल | एसोसिएट सॉल्यूशन आर्किटेक्ट",
      metaDescription: "सौरभ पाटिल का पोर्टफोलियो: 5+ वर्षों के अनुभव वाले एसोसिएट सॉल्यूशन आर्किटेक्ट और फुल-स्टैक इंजीनियर।",
      canonicalUrl: "https://iamsaurabhp.github.io/?lang=hi",
      ogLocale: "hi_IN",

      skip: "विषय पर जाएं",
      navAria: "मुख्य नेविगेशन",
      openNav: "नेविगेशन खोलें",
      quickInfo: "त्वरित जानकारी",
      langBtnAria: "अंग्रेजी में बदलें",
      themeAria: "थीम बदलें",
      legalLinksAria: "कानूनी लिंक",
      brandRole: "एसोसिएट सॉल्यूशन आर्किटेक्ट • React & Node.js • DevOps",

      navProfile: "प्रोफ़ाइल",
      navSkills: "कौशल",
      navProjects: "परियोजनाएं",
      navExperience: "अनुभव",
      navEducation: "शिक्षा",
      navContact: "संपर्क",

      themeBtn: "थीम",
      printBtn: "बायोडाटा / PDF",

      heroPill: "एसोसिएट सॉल्यूशन आर्किटेक्ट • फुल-स्टैक इंजीनियर",
      heroSubtitle: "एसोसिएट सॉल्यूशन आर्किटेक्ट • नागपुर, भारत",
      heroLead: "5+ वर्षों के अनुभव के साथ एसोसिएट सॉल्यूशन आर्किटेक्ट और फुल-स्टैक इंजीनियर। React.js, Node.js, PHP, MySQL और AWS के साथ एंटरप्राइज वेब एप्लिकेशन बनाना और आधुनिक बनाना मेरा मुख्य कार्य है।",

      quickContact: "संपर्क",
      quickProjects: "परियोजनाएं",
      quickSkills: "कौशल",
      resumeLink: "बायोडाटा",

      kpiExp: "वर्षों का अनुभव",
      kpiProjects: "क्लाउड प्रमाणपत्र",
      kpiMigration: "CRM आधुनिकीकरण",

      focusTitle: "मुख्य फोकस",
      focus1: "उच्च प्रदर्शन वाले React और Next.js यूजर इंटरफेस",
      focus2: "स्केलेबल माइक्रोसर्विसेज और रियल-टाइम WebSockets एपीआई",
      focus3: "DevOps कंटेनराइजेशन, Nginx राउटिंग और AWS क्लाउड होस्टिंग",

      profileTitle: "एसोसिएट सॉल्यूशन आर्किटेक्ट प्रोफ़ाइल",
      profileText: "मैं एंटरप्राइज CRM और वेब प्लेटफॉर्म के लिए एप्लिकेशन आर्किटेक्चर डिजाइन करता हूं और व्यावसायिक आवश्यकताओं को तकनीकी डिजाइन, API कॉन्ट्रैक्ट, डेटाबेस स्कीमा और कार्यान्वयन योजनाओं में बदलता हूं। मेरा व्यावहारिक अनुभव React और Node.js के साथ लीगेसी PHP सिस्टम के आधुनिकीकरण, Redis और MySQL ऑप्टिमाइजेशन तथा AWS डिलीवरी में है।",

      strengthsTitle: "मेरी ताकत",
      strength1: "माइग्रेशन और स्केलेबिलिटी: लीगेसी कोड को डीकपल्ड माइक्रोसर्विसेज में रिफैक्टर करने का अनुभव।",
      strength2: "प्रदर्शन और लेटेंसी ऑप्टिमाइज़ेशन: गति, डेटाबेस इंडेक्सिंग और कैशिंग पर विशेष ध्यान।",
      strength3: "DevOps और ऑटोमेशन: डॉकर कंटेनराइजेशन और AWS CI/CD पाइपलाइनों में कुशल।",

      areasTitle: "रुचि के क्षेत्र",
      areasNote: "डिस्ट्रिब्यूटेड कतार प्रणाली, सिस्टम सुरक्षा प्रोटोकॉल और परिष्कृत स्वचालित परीक्षण में निरंतर सीखना जारी है।",

      skillsTitle: "तकनीकी कौशल",
      skillsHint: "विशिष्ट कौशल या टूल को हाइलाइट करने के लिए खोज बार का उपयोग करें।",
      skillPlaceholder: "खोजें जैसे React, Docker, AWS...",

      archTitle: "आर्किटेक्चर और डिज़ाइन",
      archText: "डिज़ाइन पैटर्न, वितरित प्रणाली, डीकपल्ड माइक्रोसर्विसेज और सुरक्षित एपीआई गेटवे।",

      frontendText: "उत्तरदायी डिजाइन, राज्य प्रबंधन, अनुकूलित रेंडरिंग और कस्टम हुक्स।",
      backendText: "स्केलेबल एपीआई रूट, Socket.IO के साथ रियल-टाइम सिंक, डेटाबेस स्कीमा और कैशिंग।",
      engineeringTitle: "DevOps और उपकरण",
      engineeringText: "डॉकर ऐप्स, Nginx रिवर्स प्रॉक्सी, क्लाउड इंफ्रास्ट्रक्चर होस्टिंग और स्वचालित परीक्षण।",

      projectsTitle: "वेब और मोबाइल परियोजनाएं",
      projectsIntro: "फुल-स्टैक क्षमताओं को प्रदर्शित करने वाली हालिया व्यक्तिगत, शैक्षणिक और फ्रीलांस परियोजनाओं का चयन।",
      gtaDesc: "Next.js और React के साथ बनाई गई GTA VI के लिए एक आकर्षक, SEO-अनुकूलित लैंडिंग पेज। प्रशंसकों को आकर्षित करने के लिए रिस्पॉन्सिव लेआउट, लेजी-लोडेड एसेट्स और एनिमेशन शामिल हैं।",
      gta1: "Next.js और React फ्रेमवर्क संरचना",
      gta2: "सटीक लेआउट और लेजी-लोडेड एसेट्स",
      gta3: "बेहतरीन CSS एनिमेशन और SEO-अनुकूल संरचना",

      chatifyDesc: "Next.js, Node.js, Express और MongoDB माइक्रोसर्विसेज के साथ निर्मित रियल-टाइम चैट ऐप। Socket.IO के साथ संदेश भेजने, टाइपिंग इंडिकेटर्स, उपस्थिति स्थिति और OTP आधारित प्रमाणीकरण की सुविधा है।",
      chatify1: "Socket.IO रियल-टाइम नोटिफिकेशन परत",
      chatify2: "RabbitMQ एसिंक्रोनस संदेश कतार",
      chatify3: "Redis कैश और JWT कुकी प्रमाणीकरण",

      jyotishWebDesc: "React, CodeIgniter, MySQL और AWS पर निर्मित ज्योतिष मंच, जिसमें Redis कैशिंग और प्रोडक्शन डिप्लॉयमेंट सपोर्ट शामिल है।",
      jyotishWeb1: "CodeIgniter PHP बैकएंड फ्रेमवर्क",
      jyotishWeb2: "React सिंगल-पेज डैशबोर्ड ऐप",
      jyotishWeb3: "AWS EC2 होस्टिंग CloudFront और Redis के साथ",

      jyotishAppDesc: "ज्योतिष मंच का Flutter-आधारित मोबाइल ऐप, जिसमें Firebase प्रमाणीकरण, पुश नोटिफिकेशन और एप्लिकेशन अपडेट शामिल हैं।",
      jyotishApp1: "फ्लटर एंड्रॉइड और iOS अनुकूलता",
      jyotishApp2: "फायरबेस प्रमाणीकरण और रिमोट एनालिटिक्स",
      jyotishApp3: "FCM पुश नोटिफिकेशन एकीकरण",

      experienceTitle: "व्यावसायिक अनुभव",
      expSimpleWorksWhen: "अप्रैल 2022 – वर्तमान",
      expSimpleWorksTitle: "SimpleWorks",
      expAsaRoleTitle: "एसोसिएट सॉल्यूशन आर्किटेक्ट",
      expAsaWhenRole: "दिसंबर 2025 – वर्तमान • नागपुर",
      expAsaBullet1: "एंटरप्राइज CRM और वेब प्लेटफॉर्म के लिए एप्लिकेशन आर्किटेक्चर, कंपोनेंट सीमाएं, इंटीग्रेशन, डेटा फ्लो और डिप्लॉयमेंट दृष्टिकोण डिजाइन करता हूं।",
      expAsaBullet2: "व्यावसायिक आवश्यकताओं को तकनीकी डिजाइन, API कॉन्ट्रैक्ट, डेटाबेस स्कीमा, POC और कार्यान्वयन योजनाओं में बदलता हूं।",
      expAsaBullet3: "API डिजाइन, डेटाबेस मॉडलिंग, प्रदर्शन, विश्वसनीयता, सुरक्षा और डिप्लॉयमेंट निर्णयों का मार्गदर्शन करता हूं।",
      expAsaBullet4: "डेवलपर्स को मार्गदर्शन देता हूं और उत्पाद, इंजीनियरिंग तथा QA टीमों के साथ काम करता हूं।",
      expSeRoleTitle: "सॉफ्टवेयर इंजीनियर",
      expSeWhenRole: "अप्रैल 2022 – नवंबर 2025 • नागपुर",
      expSeBullet1: "React.js और Node.js के साथ लीगेसी PHP/Smarty CRM के 70% से अधिक हिस्से के आधुनिकीकरण का नेतृत्व किया।",
      expSeBullet2: "Redis कैशिंग, MySQL इंडेक्सिंग और क्वेरी ऑप्टिमाइजेशन से CRM वर्कफ़्लो में सुधार किया।",
      expSeBullet3: "REST API डिजाइन किए, Docker और GitHub Actions CI/CD शुरू किया, AWS डिप्लॉयमेंट सपोर्ट किया और जूनियर डेवलपर्स को मेंटर किया।",


      expFreelanceWhen: "फरवरी 2020 – अक्टूबर 2021",
      expFreelanceTitle: "फ्रीलांस सॉफ्टवेयर इंजीनियर • Whiteboard Software",
      expFreelanceRole: "लीगेसी माइग्रेशन और मोबाइल डेवलपमेंट",
      expFreelanceBullet1: "ज्योतिष विश्वकोष के वेब और मोबाइल एप्लिकेशन के लिए फुल-स्टैक फीचर बनाए।",
      expFreelanceBullet2: "MySQL और AWS पर React.js मॉड्यूल तथा CodeIgniter API बनाए।",
      expFreelanceBullet3: "Flutter और Firebase इंटीग्रेशन विकसित किए तथा डिप्लॉयमेंट और प्रोडक्शन सपोर्ट दिया।",

      educationTitle: "शिक्षा और समयरेखा",
      eduMcaWhen: "सितंबर 2020 – जून 2022",
      eduMcaSchool: "श्री रामदेवबाबा कॉलेज ऑफ इंजीनियरिंग एंड मैनेजमेंट, नागपुर",
      eduMcaDegree: "MCA (मास्टर ऑफ कंप्यूटर एप्लीकेशंस) • CGPA: 8.6 / 10",
      eduMcaBullet1: "फुल-स्टैक वेब आर्किटेक्चर, डिस्ट्रिब्यूटेड सिस्टम और डेटाबेस ऑप्टिमाइज़ेशन में विशेषज्ञता।",
      eduMcaBullet2: "क्लाउड कंप्यूटिंग मॉड्यूल, माइक्रोसर्विसेज कॉन्फ़िगरेशन और डिज़ाइन पैटर्न सीखे।",

      eduBcaWhen: "जून 2017 – मई 2020",
      eduBcaSchool: "श्री शिवाजी साइंस कॉलेज, नागपुर",
      eduBcaDegree: "BCA (बैचलर ऑफ कंप्यूटर एप्लीकेशंस) • ग्रेड: 64%",
      eduBcaBullet1: "प्रोग्रामिंग अवधारणाओं, डेटा संरचनाओं और रिलेशनल डेटाबेस में मजबूत आधारभूत ज्ञान प्राप्त किया।",
      eduBcaBullet2: "सॉफ्टवेयर इंजीनियरिंग पद्धतियों और वेब विकास की बुनियादी बातों का अभ्यास किया।",

      certsTitle: "प्रमाण पत्र",
      certsText: "व्यावसायिक प्रमाणपत्र क्लाउड कंप्यूटिंग और आधुनिक तकनीकी मंचों में विशेषज्ञता को सत्यापित करते हैं।",
      certAwsDesc: "AWS पर लचीली, सुरक्षित, उच्च प्रदर्शन वाली और लागत-अनुकूलित वितरित प्रणालियों को डिजाइन करने में विशेषज्ञता को सत्यापित करने वाला आधिकारिक AWS सॉल्यूशंस आर्किटेक्ट - एसोसिएट प्रमाण पत्र।",
      certOciGenAiDesc: "OCI AI सेवाओं, बड़े भाषा मॉडल और RAG आर्किटेक्चर का उपयोग करके Generative AI समाधान डिजाइन करने और लागू करने में विशेषज्ञता को सत्यापित करने वाला आधिकारिक Oracle Cloud Infrastructure 2025 प्रमाणपत्र।",
      certOciGenAiOrg: "ओरेकल सर्टिफिकेशन",
      viewCert: "प्रमाण पत्र देखें",

      contactTitle: "संपर्क करें",
      contactIntro: "मैं एप्लिकेशन आधुनिकीकरण और क्लाउड डिलीवरी से जुड़ी सीनियर फुल-स्टैक, टेक्निकल लीड और सॉल्यूशन आर्किटेक्चर भूमिकाओं के लिए उपलब्ध हूं।",
      linksTitle: "लिंक और जानकारी",
      emailLink: "ईमेल भेजें",
      contactPhoneKey: "फ़ोन",

      formTitle: "संपर्क फ़ॉर्म",
      formName: "नाम",
      formNamePh: "आपका नाम",
      formEmailPh: "जवाब के लिए ईमेल",
      formSubject: "विषय",
      formSubjectPh: "संक्षिप्त विषय",
      formMessage: "संदेश",
      formMessagePh: "अपना संदेश लिखें...",
      formPrivacyConsentPrefix: "मैं संपर्क करने के लिए इस फॉर्म डेटा को भेजने के लिए सहमत हूं।",
      sendBtn: "संदेश भेजें",

      formSending: "संदेश भेजा जा रहा है...",
      formSendingButton: "भेजा जा रहा है...",
      formSuccess: "संदेश सफलतापूर्वक भेजा गया।",
      formPrivacyRequired: "कृपया भेजने से पहले सहमति शर्तों को स्वीकार करें।",
      formError: "संदेश भेजने में विफल। कृपया मुझे सीधे ईमेल करें।",

      privacyLink: "गोपनीयता नीति",
      cookiesLink: "कुकीज़",
      cookieSettings: "कुकी सेटिंग्स",
      cookieBannerTitle: "गोपनीयता सेटिंग्स",
      cookieBannerText: "मैं थीम और भाषा प्राथमिकता जैसी सिस्टम सेटिंग्स को याद रखने के लिए आवश्यक कुकीज़ का उपयोग करता हूँ। वैकल्पिक कुकीज़ नीचे सक्रिय की जा सकती हैं।",
      cookieNecessary: "आवश्यक",
      cookieNecessaryText: "सक्रिय यूआई कॉन्फ़िगरेशन चयन को सहेजता है।",
      cookieAnalytics: "एनालिटिक्स",
      cookieAnalyticsText: "बुनियादी साइट विज़िट मेट्रिक्स एकत्र करता है।",
      cookieCustomize: "कस्टमाइज़ करें",
      cookieReject: "अस्वीकार करें",
      cookieSave: "चयन सहेजें",
      cookieAccept: "सभी स्वीकार करें",
      footerText: "व्यक्तिगत पोर्टफोलियो • एसोसिएट सॉल्यूशन आर्किटेक्ट"
    }
  };

  const staticTextTranslations = {
    "Web App": { en: "Web App", hi: "वेब ऐप" },
    "Freelance": { en: "Freelance", hi: "फ्रीलांस" },
    "Mobile App": { en: "Mobile App", hi: "मोबाइल ऐप" },
    "HTML5": { en: "HTML5", hi: "HTML5" },
    "CSS3": { en: "CSS3", hi: "CSS3" },
    "JavaScript": { en: "JavaScript", hi: "जावास्क्रिप्ट" },
    "TypeScript": { en: "TypeScript", hi: "टाइपस्क्रिप्ट" },
    "React": { en: "React", hi: "React" },
    "Next.js": { en: "Next.js", hi: "Next.js" },
    "Node.js": { en: "Node.js", hi: "Node.js" },
    "PHP": { en: "PHP", hi: "PHP" },
    "MySQL": { en: "MySQL", hi: "MySQL" },
    "SQL": { en: "SQL", hi: "SQL" },
    "Docker": { en: "Docker", hi: "Docker" },
    "AWS": { en: "AWS", hi: "AWS" },
    "Git": { en: "Git", hi: "Git" },
    "GitHub": { en: "GitHub", hi: "GitHub" },
    "Frontend": { en: "Frontend", hi: "फ्रंटएंड" },
    "Backend & DB": { en: "Backend & DB", hi: "बैकएंड और डेटाबेस" },
    "DevOps & Tools": { en: "DevOps & Tools", hi: "DevOps और उपकरण" },
    "Redux": { en: "Redux", hi: "Redux" },
    "Tailwind CSS": { en: "Tailwind CSS", hi: "Tailwind CSS" },
    "Material UI": { en: "Material UI", hi: "Material UI" },
    "styled-components": { en: "styled-components", hi: "styled-components" },
    "TanStack Query": { en: "TanStack Query", hi: "TanStack Query" },
    "Express": { en: "Express", hi: "Express" },
    "MongoDB": { en: "MongoDB", hi: "MongoDB" },
    "Redis": { en: "Redis", hi: "Redis" },
    "WebSockets": { en: "WebSockets", hi: "WebSockets" },
    "REST APIs": { en: "REST APIs", hi: "REST APIs" },
    "Nginx": { en: "Nginx", hi: "Nginx" },
    "GitHub Actions": { en: "GitHub Actions", hi: "GitHub Actions" },
    "Sentry": { en: "Sentry", hi: "Sentry" },
    "Playwright": { en: "Playwright", hi: "Playwright" },
    "Apache JMeter": { en: "Apache JMeter", hi: "JMeter" },
    "Jira": { en: "Jira", hi: "Jira" },
    "Live Demo": { en: "Live Demo", hi: "डेमो देखें" },
    "GitHub Repository": { en: "GitHub Repository", hi: "GitHub रिपॉजिटरी" },
    "Live Site": { en: "Live Site", hi: "साइट देखें" },
    "Play Store": { en: "Play Store", hi: "प्ले स्टोर" },
    "Solution Architecture": { en: "Solution Architecture", hi: "सॉल्यूशन आर्किटेक्चर" },
    "Systems Design": { en: "Systems Design", hi: "सिस्टम डिज़ाइन" },
    "Microservices": { en: "Microservices", hi: "माइक्रोसर्विसेज" },
    "Distributed Systems": { en: "Distributed Systems", hi: "वितरित प्रणाली" },
    "Design Patterns": { en: "Design Patterns", hi: "डिज़ाइन पैटर्न" },
    "RabbitMQ": { en: "RabbitMQ", hi: "RabbitMQ" },
    "GenAI": { en: "GenAI", hi: "GenAI" }
  };

  const isSupportedLanguage = (lang) => Object.prototype.hasOwnProperty.call(translations, lang);

  const getStoredValue = (key) => {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return "";
    }
  };

  const setStoredValue = (key, value) => {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {}
  };

  const getUrlLanguage = () => {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang");
    return isSupportedLanguage(queryLang) ? queryLang : "";
  };

  const getBrowserLanguage = () => {
    const languages = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || ""];

    for (const language of languages) {
      const code = String(language).toLowerCase().split("-")[0];
      if (code === "hi") return "hi";
      if (code === "en") return "en";
    }
    return "";
  };

  const getCurrentLanguage = () => {
    const urlLang = getUrlLanguage();
    if (urlLang) return urlLang;

    const savedLang = getStoredValue("portfolio.lang");
    if (isSupportedLanguage(savedLang)) return savedLang;

    const browserLang = getBrowserLanguage();
    if (isSupportedLanguage(browserLang)) return browserLang;

    return "en";
  };

  const applyTextTranslations = (lang) => {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    });
  };

  const applyAttributeTranslations = (lang) => {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const attrConfig = el.getAttribute("data-i18n-attr");
      if (!attrConfig) return;

      attrConfig.split(",").forEach((pair) => {
        const [attrName, key] = pair.split(":").map((p) => p.trim());
        if (attrName && key && Object.prototype.hasOwnProperty.call(dict, key)) {
          el.setAttribute(attrName, dict[key]);
        }
      });
    });
  };

  const applyStaticTranslations = (lang) => {
    // Translate technical badge texts and tags dynamically
    document.querySelectorAll(".tag, .badge, .project-links .link, .stack-label, .card.skill h3").forEach((el) => {
      if (!el.dataset.staticOriginal) {
        el.dataset.staticOriginal = el.textContent.trim();
      }
      const original = el.dataset.staticOriginal;
      const trans = staticTextTranslations[original];
      if (trans && trans[lang]) {
        el.textContent = trans[lang];
      }
    });
  };

  const setMetaContent = (selector, content) => {
    const el = document.querySelector(selector);
    if (el && content) el.setAttribute("content", content);
  };

  const applyLanguage = (lang, options = {}) => {
    const activeLang = isSupportedLanguage(lang) ? lang : "en";
    const dict = translations[activeLang];

    document.documentElement.lang = activeLang;
    document.title = dict.metaTitle;
    setMetaContent('meta[name="description"]', dict.metaDescription);
    setMetaContent('meta[property="og:title"]', dict.metaTitle);
    setMetaContent('meta[property="og:url"]', dict.canonicalUrl);
    setMetaContent('meta[property="og:locale"]', dict.ogLocale);
    setMetaContent('meta[property="og:description"]', dict.metaDescription);
    setMetaContent('meta[name="twitter:title"]', dict.metaTitle);
    setMetaContent('meta[name="twitter:description"]', dict.metaDescription);
    
    applyTextTranslations(activeLang);
    applyAttributeTranslations(activeLang);
    applyStaticTranslations(activeLang);

    if (langBtn) {
      langBtn.textContent = activeLang === "en" ? "HI" : "EN";
      langBtn.setAttribute("aria-label", dict.langBtnAria);
    }

    if (options.updateUrl && window.history && window.history.pushState) {
      const target = new URL(window.location.href);
      if (activeLang === "hi") {
        target.searchParams.set("lang", "hi");
      } else {
        target.searchParams.delete("lang");
      }
      window.history.pushState({ lang: activeLang }, "", `${target.pathname}${target.search}${target.hash}`);
    }

    setStoredValue("portfolio.lang", activeLang);
  };

  // Initialize Language
  const initialLang = getCurrentLanguage();
  applyLanguage(initialLang);

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const cur = document.documentElement.lang || "en";
      const next = cur === "en" ? "hi" : "en";
      applyLanguage(next, { updateUrl: true });
    });
  }

  window.addEventListener("popstate", () => {
    applyLanguage(getCurrentLanguage());
  });

  // Dark/Light Theme Control
  const savedTheme = getStoredValue("portfolio.theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme") || "dark";
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      setStoredValue("portfolio.theme", next);
    });
  }

  // Scroll effect on Header
  const handleScroll = () => {
    if (topbar) {
      topbar.classList.toggle("scrolled", window.scrollY > 24);
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Navigation Mobile Hamburger Menu Toggle
  if (navToggle && mainNav && topbar) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!topbar.contains(e.target)) {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Live Skill Search filtering
  if (skillSearch) {
    skillSearch.addEventListener("input", () => {
      const query = skillSearch.value.trim().toLowerCase();
      const tags = document.querySelectorAll("[data-skill]");

      tags.forEach((tag) => {
        const skill = tag.getAttribute("data-skill") || "";
        const visibleText = tag.textContent || "";
        const searchable = `${skill} ${visibleText}`.toLowerCase();

        tag.classList.remove("highlight", "dim");

        if (!query) return;

        if (searchable.includes(query)) {
          tag.classList.add("highlight");
        } else {
          tag.classList.add("dim");
        }
      });
    });
  }

  // Decode Email Action
  if (emailLink) {
    emailLink.addEventListener("click", (e) => {
      e.preventDefault();
      const encoded = emailLink.getAttribute("data-mail");
      if (encoded) {
        window.location.href = `mailto:${window.atob(encoded)}`;
      }
    });
  }

  // Print CV / PDF Action
  if (printBtn?.tagName === "BUTTON") {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Form Submit API Integration using FormSubmit (free & setup-less)
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const activeLang = document.documentElement.lang || "en";
      const dict = translations[activeLang];

      if (privacyConsent && !privacyConsent.checked) {
        if (formStatus) formStatus.textContent = dict.formPrivacyRequired;
        privacyConsent.focus();
        return;
      }

      const formData = new FormData(contactForm);

      if (sendBtn) {
        sendBtn.disabled = true;
        sendBtn.textContent = dict.formSendingButton;
      }
      if (formStatus) formStatus.textContent = dict.formSending;

      try {
        const res = await fetch(contactForm.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        if (!res.ok) throw new Error("Network response not ok");

        contactForm.reset();
        if (formStatus) formStatus.textContent = dict.formSuccess;
      } catch (err) {
        if (formStatus) formStatus.textContent = dict.formError;
      } finally {
        if (sendBtn) {
          sendBtn.disabled = false;
          sendBtn.textContent = dict.sendBtn;
        }
      }
    });
  }

  // Scroll Animations using IntersectionObserver
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -32px 0px"
    });

    document.querySelectorAll(".reveal").forEach((el) => {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.classList.add("visible");
    });
  }

  // Cookie Consent management Banner
  const getCookieValue = (name) => {
    const cookies = document.cookie ? document.cookie.split("; ") : [];
    const cookie = cookies.find((item) => item.startsWith(`${name}=`));
    return cookie ? cookie.slice(name.length + 1) : "";
  };

  const setupCookieConsent = () => {
    const consent = getCookieValue(CONSENT_COOKIE_NAME);
    
    if (consent) {
      if (cookieBanner) cookieBanner.hidden = true;
    } else {
      if (cookieBanner) cookieBanner.hidden = false;
    }

    cookieCustomizeBtn?.addEventListener("click", () => {
      if (cookieOptions) cookieOptions.hidden = !cookieOptions.hidden;
      if (cookieSaveBtn) cookieSaveBtn.hidden = !cookieSaveBtn.hidden;
      cookieCustomizeBtn.setAttribute("aria-expanded", String(!cookieOptions?.hidden));
    });

    const savePreferences = (preferences) => {
      const secure = window.location.protocol === "https:" ? "; Secure" : "";
      const value = encodeURIComponent(JSON.stringify({
        version: CONSENT_VERSION,
        necessary: true,
        analytics: Boolean(preferences.analytics),
        updatedAt: new Date().toISOString()
      }));
      document.cookie = `${CONSENT_COOKIE_NAME}=${value}; Max-Age=${CONSENT_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
      if (cookieBanner) cookieBanner.hidden = true;
    };

    cookieRejectBtn?.addEventListener("click", () => {
      savePreferences({ analytics: false });
    });

    cookieAcceptBtn?.addEventListener("click", () => {
      savePreferences({ analytics: true });
    });

    cookieSaveBtn?.addEventListener("click", () => {
      savePreferences({ analytics: Boolean(cookieAnalytics?.checked) });
    });

    cookieSettingsBtn?.addEventListener("click", () => {
      if (cookieBanner) cookieBanner.hidden = false;
      if (cookieOptions) cookieOptions.hidden = false;
      if (cookieSaveBtn) cookieSaveBtn.hidden = false;
    });
  };

  setupCookieConsent();

  if (year) year.textContent = new Date().getFullYear();
  if (version) version.textContent = APP_VERSION;
});
