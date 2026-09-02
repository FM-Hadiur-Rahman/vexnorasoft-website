import type { Lang, SiteContent } from "@/types/site";

export const siteContent: Record<Lang, SiteContent> = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      pricing: "Pricing",
      testimonials: "Testimonials",
      contact: "Contact",
      cta: "Book a Consultation",
    },

    hero: {
      badge: "Premium software partner for modern businesses",
      title1: "We design and build",
      title2: "premium digital products",
      title3: "that help businesses grow.",
      desc: "VexnoraSoft creates modern web applications, mobile apps, SaaS platforms, AI systems, and custom business software with a strong focus on scalability, security, and real operational needs.",
      primary: "Start Your Project",
      secondary: "Explore Services",
      chips: [
        "Web & Mobile Apps",
        "Business Automation",
        "AI & Smart Solutions",
      ],
    },

    feature: {
      eyebrow: "Core Capability",
      title: "From idea to complete digital product",
      live: "Active",
      items: [
        [
          "Discovery & Strategy",
          "We define business goals, user journeys, requirements, and the technical roadmap.",
        ],
        [
          "UI/UX & Frontend",
          "We create modern, intuitive, and user-focused digital experiences.",
        ],
        [
          "Backend & Integrations",
          "Scalable APIs, authentication, payments, dashboards, automation, and third-party integrations.",
        ],
        [
          "Deployment & Scaling",
          "Production deployment, optimization, infrastructure, monitoring, and future-ready scaling.",
        ],
      ],
    },

    trust: [
      ["Engineering Quality", "Fast, secure, scalable"],
      ["Modern Technology", "React, Next.js, Node.js"],
      ["Business Focused", "Built for real operations"],
      ["Flexible Delivery", "From MVP to full platform"],
    ],

    services: {
      eyebrow: "Services",
      title: "Modern software solutions for real business requirements.",
      desc: "We help businesses and organizations build custom software, SaaS platforms, web and mobile applications, AI systems, and automation solutions designed for long-term growth.",
      items: [
        {
          title: "Custom Software Development",
          desc: "Business applications, operational platforms, dashboards, portals, and custom systems designed around your specific processes and requirements.",
        },
        {
          title: "SaaS & Platform Engineering",
          desc: "Multi-tenant SaaS products, subscription systems, marketplaces, digital platforms, administration tools, and scalable cloud-based architectures.",
        },
        {
          title: "Mobile App Development",
          desc: "Modern applications for iOS and Android with polished UX, APIs, authentication, payments, notifications, and real-time functionality.",
        },
        {
          title: "AI & Automation",
          desc: "AI-powered systems, intelligent automation, computer vision, workflow optimization, analytics, and practical business applications of AI.",
        },
      ],
    },

    work: {
      eyebrow: "Selected Work",
      title: "Real software products built for real business operations.",
      desc: "Our work spans SaaS platforms, AI systems, restaurant technology, marketplaces, mobile applications, and business operations software.",
      items: [
        {
          name: "Reivio Web & Mobile App",
          type: "Travel & Booking Platform",
          summary:
            "A modern digital platform designed to connect stays, travel, mobility, bookings, and scalable marketplace operations.",
        },
        {
          name: "ZonoVision AI Theft Detection",
          type: "AI Security Solution",
          summary:
            "An AI-powered retail security system using computer vision, real-time video analysis, intelligent detection, and operational alerts.",
        },
        {
          name: "Mr. Baker Mobile App",
          type: "Food & Commerce App",
          summary:
            "A mobile ordering experience for bakery and food operations with product browsing, customer ordering, and digital commerce functionality.",
        },
        {
          name: "Time Track Work Management App",
          type: "Work Management Platform",
          summary:
            "A digital platform for managing working hours, productivity, teams, operational records, and reporting.",
        },
        {
          name: "SPAR Online Grocery App",
          type: "E-Commerce Platform",
          summary:
            "A grocery commerce solution supporting digital product discovery, cart management, ordering, and local delivery operations.",
        },
        {
          name: "Pizza Casa Online Ordering App",
          type: "Restaurant Ordering System",
          summary:
            "A restaurant ordering platform with digital menus, online checkout, customer ordering, and streamlined order management.",
        },
      ],
      ready: "Available for custom business adaptation",
    },

    pricing: {
      eyebrow: "Engagement Models",
      title: "Flexible ways to build and operate software with us.",
      desc: "The right engagement model depends on project scope, technical complexity, integrations, delivery requirements, and long-term product goals.",
      plans: [
        {
          name: "Project Delivery",
          price: "Scope-based",
          subtitle: "For defined software projects",
          features: [
            "Discovery & planning",
            "UI/UX & software engineering",
            "API & system integrations",
            "Production deployment",
            "Handover & support",
          ],
          cta: "Discuss Your Project",
        },
        {
          name: "Dedicated Development Team",
          price: "Monthly",
          subtitle: "For continuous product development",
          features: [
            "Dedicated engineering capacity",
            "Continuous delivery",
            "Product development",
            "Cloud & DevOps support",
            "Long-term improvement",
          ],
          cta: "Discuss Your Team",
          featured: true,
        },
        {
          name: "SaaS & Platform",
          price: "Custom Plan",
          subtitle: "For software platforms and SaaS products",
          features: [
            "Cloud-based platform",
            "Subscription model",
            "Continuous updates",
            "Technical support",
            "Scalable infrastructure",
          ],
          cta: "Explore Solutions",
        },
      ],
    },

    testimonials: {
      eyebrow: "How We Work",
      title:
        "A structured engineering process from business discovery to long-term operation.",
      items: [
        {
          quote:
            "We begin by understanding the business problem, users, operational requirements, and measurable objectives.",
          name: "Discover",
          role: "Business & Product Discovery",
        },
        {
          quote:
            "We design scalable architecture and build reliable software with strong user experience and maintainable engineering.",
          name: "Build",
          role: "Design & Engineering",
        },
        {
          quote:
            "After launch, we support optimization, monitoring, infrastructure, improvements, and future product development.",
          name: "Operate",
          role: "Launch & Continuous Improvement",
        },
      ],
    },

    about: {
      eyebrow: "Why VexnoraSoft",
      title:
        "A strong connection between modern technology and practical business needs.",
      desc: "We do more than write code. We build software that improves operations, supports growth, and creates long-term business value.",
      points: [
        "Germany-based business presence",
        "Full-stack software engineering",
        "SaaS & platform development",
        "AI & automation capabilities",
        "Cloud & DevOps experience",
        "Long-term product thinking",
      ],
    },

    banner: {
      eyebrow: "Ready to build?",
      title: "Turn your idea into a powerful digital product.",
      desc: "Whether you need custom business software, a SaaS platform, an AI system, a mobile application, or process automation, we can help define and build the right solution.",
      cta: "Start a Conversation",
    },

    contact: {
      eyebrow: "Contact",
      title: "Start your next project with VexnoraSoft.",
      desc: "Talk to us about your software platform, app, SaaS product, AI system, integration, or automation requirements.",
      labels: {
        email: "Email",
        website: "Website",
        location: "Location",
        name: "Your name",
        emailInput: "Your email",
        company: "Company name",
        service: "Service needed",
        message: "Tell us about your project",
        submit: "Send Inquiry",
        success: "Your message has been sent successfully.",
        sending: "Sending...",
      },
      services: [
        "Custom Software",
        "Web Application",
        "Mobile App",
        "SaaS Platform",
        "Automation",
        "AI Solution",
      ],
    },

    founder: {
      badge: "Founder",
      title: "F M Hadiur Rahman",
      subtitle: "Founder & Software Engineer",
      description:
        "Focused on turning business ideas into scalable digital products, SaaS platforms, operational systems, and modern software applications.",
      description2:
        "The focus is on strong software architecture, practical user experience, reliable engineering, and measurable long-term business value.",
      stats: [
        { label: "Focus", value: "Software & SaaS" },
        { label: "Market", value: "Germany + Global" },
        { label: "Engineering", value: "Full Stack" },
      ],
      skills: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "AWS"],
      ctaPrimary: "Start a Conversation",
      ctaSecondary: "View Our Work",
      image: "/images/founder.jpg",
    },

    team: {
      badge: "Our Team",
      title: "The people behind VexnoraSoft",
      desc: "Our team combines software engineering, AI capability, modern product development, and practical business thinking to build reliable digital solutions.",
      ctaPrimary: "Talk to Our Team",
      ctaSecondary: "View Our Work",
      members: [
        {
          name: "F M Hadiur Rahman",
          role: "Founder & Full Stack Developer",
          bio: "Focused on scalable SaaS platforms, business software, web applications, system integrations, cloud infrastructure, and modern digital products.",
          image: "/images/hadiur.jpg",
          tags: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "AWS"],
        },
        {
          name: "Nihal Nallari",
          role: "Founder & AI Engineer",
          bio: "Focused on AI systems, machine learning, computer vision, intelligent automation, and practical AI applications for business.",
          image: "/images/nihal.jpg",
          tags: [
            "AI Systems",
            "ML",
            "Automation",
            "Python",
            "LLMs",
            "Computer Vision",
          ],
        },
      ],
    },

    footer: {
      left: "© 2026 VexnoraSoft. All rights reserved.",
      right: "Powered by VexnoraSoft",
    },
  },

  de: {
    nav: {
      services: "Leistungen",
      work: "Projekte",
      pricing: "Zusammenarbeit",
      testimonials: "Arbeitsweise",
      contact: "Kontakt",
      cta: "Beratung anfragen",
    },

    hero: {
      badge: "Softwarepartner für moderne Unternehmen",
      title1: "Wir entwickeln",
      title2: "leistungsstarke digitale Produkte",
      title3: "für reale Geschäftsprozesse.",
      desc: "VexnoraSoft entwickelt moderne Webanwendungen, mobile Apps, SaaS-Plattformen, KI-Systeme und individuelle Business-Software – mit Fokus auf Skalierbarkeit, Sicherheit und reale betriebliche Anforderungen.",
      primary: "Projekt starten",
      secondary: "Leistungen ansehen",
      chips: [
        "Web & Mobile Apps",
        "Business-Automation",
        "KI & Smart Solutions",
      ],
    },

    feature: {
      eyebrow: "Kernkompetenz",
      title: "Von der Idee zum vollständigen digitalen Produkt",
      live: "Aktiv",
      items: [
        [
          "Analyse & Strategie",
          "Wir definieren Geschäftsziele, Anforderungen, Nutzerwege und die technische Roadmap.",
        ],
        [
          "UI/UX & Frontend",
          "Wir entwickeln moderne, intuitive und nutzerorientierte digitale Oberflächen.",
        ],
        [
          "Backend & Integrationen",
          "Skalierbare APIs, Authentifizierung, Zahlungen, Dashboards, Automatisierungen und Systemintegrationen.",
        ],
        [
          "Deployment & Skalierung",
          "Produktivsetzung, Optimierung, Infrastruktur, Monitoring und skalierbare Weiterentwicklung.",
        ],
      ],
    },

    trust: [
      ["Engineering-Qualität", "Schnell, sicher, skalierbar"],
      ["Moderne Technologien", "React, Next.js, Node.js"],
      ["Business-orientiert", "Für reale Abläufe entwickelt"],
      ["Flexible Umsetzung", "Vom MVP bis zur Plattform"],
    ],

    services: {
      eyebrow: "Leistungen",
      title: "Moderne Softwarelösungen für reale Geschäftsanforderungen.",
      desc: "Wir unterstützen Unternehmen und Organisationen bei der Entwicklung individueller Software, SaaS-Plattformen, Web- und Mobile-Anwendungen sowie KI- und Automatisierungslösungen.",
      items: [
        {
          title: "Individuelle Softwareentwicklung",
          desc: "Business-Anwendungen, operative Plattformen, Dashboards, Portale und individuelle Systeme, die exakt auf Prozesse und Anforderungen abgestimmt sind.",
        },
        {
          title: "SaaS & Plattform Engineering",
          desc: "Multi-Tenant-SaaS, Abonnement-Systeme, Marktplätze, digitale Plattformen, Administration und skalierbare Cloud-Architekturen.",
        },
        {
          title: "Mobile App Entwicklung",
          desc: "Moderne Anwendungen für iOS und Android mit hochwertigem UX, APIs, Authentifizierung, Zahlungen, Benachrichtigungen und Echtzeitfunktionen.",
        },
        {
          title: "KI & Automatisierung",
          desc: "KI-Systeme, intelligente Automatisierung, Computer Vision, optimierte Workflows, Datenanalyse und praktische KI-Anwendungen für Unternehmen.",
        },
      ],
    },

    work: {
      eyebrow: "Ausgewählte Projekte",
      title: "Reale Softwareprodukte für reale Geschäftsprozesse.",
      desc: "Unsere Arbeit umfasst SaaS-Plattformen, KI-Systeme, Restaurant-Technologie, Marktplätze, mobile Anwendungen und operative Business-Software.",
      items: [
        {
          name: "Reivio Web- & Mobile-App",
          type: "Reise- & Buchungsplattform",
          summary:
            "Eine moderne digitale Plattform zur Verbindung von Unterkünften, Reisen, Mobilität, Buchungen und skalierbaren Marktplatzprozessen.",
        },
        {
          name: "ZonoVision KI-Diebstahlerkennung",
          type: "KI-Sicherheitslösung",
          summary:
            "Ein KI-basiertes Sicherheitssystem für den Einzelhandel mit Computer Vision, Echtzeit-Videoanalyse, intelligenter Erkennung und operativen Alarmen.",
        },
        {
          name: "Mr. Baker Mobile App",
          type: "Food & Commerce App",
          summary:
            "Eine mobile Bestelllösung für Bäckerei- und Food-Betriebe mit Produktauswahl, Kundenbestellungen und digitaler Commerce-Funktionalität.",
        },
        {
          name: "Time Track Work Management App",
          type: "Arbeitsmanagement-Plattform",
          summary:
            "Eine digitale Plattform zur Verwaltung von Arbeitszeiten, Produktivität, Teams, operativen Daten und Reporting.",
        },
        {
          name: "SPAR Online Grocery App",
          type: "E-Commerce-Plattform",
          summary:
            "Eine digitale Grocery-Lösung für Produktsuche, Warenkorb, Bestellungen und lokale Lieferprozesse.",
        },
        {
          name: "Pizza Casa Online Ordering App",
          type: "Restaurant-Bestellsystem",
          summary:
            "Eine Restaurant-Plattform mit digitaler Speisekarte, Online-Checkout, Kundenbestellung und effizienter Auftragsverwaltung.",
        },
      ],
      ready: "Individuell für Ihr Unternehmen anpassbar",
    },

    pricing: {
      eyebrow: "Zusammenarbeitsmodelle",
      title: "Flexible Modelle für Entwicklung und langfristigen Betrieb.",
      desc: "Das passende Modell richtet sich nach Projektumfang, technischer Komplexität, Integrationen, Lieferanforderungen und langfristigen Produktzielen.",
      plans: [
        {
          name: "Project Delivery",
          price: "Nach Umfang",
          subtitle: "Für klar definierte Softwareprojekte",
          features: [
            "Analyse & Planung",
            "UI/UX & Softwareentwicklung",
            "API- & Systemintegrationen",
            "Produktiv-Deployment",
            "Übergabe & Support",
          ],
          cta: "Projekt besprechen",
        },
        {
          name: "Dedicated Development Team",
          price: "Monatlich",
          subtitle: "Für kontinuierliche Produktentwicklung",
          features: [
            "Dedizierte Engineering-Kapazität",
            "Kontinuierliche Lieferung",
            "Produktentwicklung",
            "Cloud- & DevOps-Support",
            "Langfristige Weiterentwicklung",
          ],
          cta: "Team besprechen",
          featured: true,
        },
        {
          name: "SaaS & Platform",
          price: "Individuelles Modell",
          subtitle: "Für Plattformen und SaaS-Produkte",
          features: [
            "Cloud-basierte Plattform",
            "Abonnement-Modell",
            "Kontinuierliche Updates",
            "Technischer Support",
            "Skalierbare Infrastruktur",
          ],
          cta: "Lösungen ansehen",
        },
      ],
    },

    testimonials: {
      eyebrow: "Unsere Arbeitsweise",
      title:
        "Ein strukturierter Engineering-Prozess von der Analyse bis zum langfristigen Betrieb.",
      items: [
        {
          quote:
            "Wir beginnen mit einem klaren Verständnis des Geschäftsproblems, der Nutzer, der betrieblichen Anforderungen und der messbaren Ziele.",
          name: "Discover",
          role: "Business & Product Discovery",
        },
        {
          quote:
            "Wir entwickeln skalierbare Architekturen und zuverlässige Software mit hochwertiger Nutzererfahrung und wartbarer technischer Basis.",
          name: "Build",
          role: "Design & Engineering",
        },
        {
          quote:
            "Nach dem Launch unterstützen wir Optimierung, Monitoring, Infrastruktur, Weiterentwicklung und langfristige Produktverbesserung.",
          name: "Operate",
          role: "Launch & Continuous Improvement",
        },
      ],
    },

    about: {
      eyebrow: "Warum VexnoraSoft",
      title:
        "Eine starke Verbindung zwischen moderner Technologie und praktischen Geschäftsanforderungen.",
      desc: "Wir schreiben nicht einfach nur Code. Wir entwickeln Software, die Abläufe verbessert, Wachstum ermöglicht und langfristigen Geschäftswert schafft.",
      points: [
        "Geschäftspräsenz in Deutschland",
        "Full-Stack Software Engineering",
        "SaaS- & Plattform-Entwicklung",
        "KI- & Automatisierungskompetenz",
        "Cloud- & DevOps-Erfahrung",
        "Langfristiges Produktdenken",
      ],
    },

    banner: {
      eyebrow: "Bereit für den nächsten Schritt?",
      title:
        "Verwandeln Sie Ihre Idee in ein leistungsstarkes digitales Produkt.",
      desc: "Ob individuelle Business-Software, SaaS-Plattform, KI-System, mobile Anwendung oder Prozessautomatisierung – wir helfen bei Konzeption und Umsetzung.",
      cta: "Gespräch starten",
    },

    contact: {
      eyebrow: "Kontakt",
      title: "Starten Sie Ihr nächstes Projekt mit VexnoraSoft.",
      desc: "Sprechen Sie mit uns über Ihre Softwareplattform, App, Ihr SaaS-Produkt, KI-System, Integrationen oder Automatisierungsanforderungen.",
      labels: {
        email: "E-Mail",
        website: "Website",
        location: "Standort",
        name: "Ihr Name",
        emailInput: "Ihre E-Mail",
        company: "Unternehmen",
        service: "Gewünschte Leistung",
        message: "Beschreiben Sie Ihr Projekt",
        submit: "Anfrage senden",
        success: "Ihre Nachricht wurde erfolgreich gesendet.",
        sending: "Wird gesendet...",
      },
      services: [
        "Individuelle Software",
        "Web-Anwendung",
        "Mobile App",
        "SaaS-Plattform",
        "Automatisierung",
        "KI-Lösung",
      ],
    },

    founder: {
      badge: "Gründer",
      title: "F M Hadiur Rahman",
      subtitle: "Founder & Software Engineer",
      description:
        "Der Fokus liegt darauf, Geschäftsideen in skalierbare digitale Produkte, SaaS-Plattformen, operative Systeme und moderne Softwareanwendungen zu verwandeln.",
      description2:
        "Im Mittelpunkt stehen robuste Softwarearchitektur, praktische Nutzererfahrung, zuverlässiges Engineering und langfristiger Geschäftswert.",
      stats: [
        { label: "Fokus", value: "Software & SaaS" },
        { label: "Markt", value: "Deutschland + Global" },
        { label: "Engineering", value: "Full Stack" },
      ],
      skills: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "AWS"],
      ctaPrimary: "Gespräch starten",
      ctaSecondary: "Unsere Projekte ansehen",
      image: "/images/founder.jpg",
    },

    team: {
      badge: "Unser Team",
      title: "Die Menschen hinter VexnoraSoft",
      desc: "Unser Team verbindet Software Engineering, KI-Kompetenz, moderne Produktentwicklung und praktisches Business-Denken, um zuverlässige digitale Lösungen zu entwickeln.",
      ctaPrimary: "Mit unserem Team sprechen",
      ctaSecondary: "Unsere Projekte ansehen",
      members: [
        {
          name: "F M Hadiur Rahman",
          role: "Founder & Full Stack Developer",
          bio: "Fokus auf skalierbare SaaS-Plattformen, Business-Software, Web-Anwendungen, Systemintegrationen, Cloud-Infrastruktur und moderne digitale Produkte.",
          image: "/images/hadiur.jpg",
          tags: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "AWS"],
        },
        {
          name: "Nihal Nallari",
          role: "Founder & AI Engineer",
          bio: "Fokus auf KI-Systeme, Machine Learning, Computer Vision, intelligente Automatisierung und praktische KI-Anwendungen für Unternehmen.",
          image: "/images/nihal.jpg",
          tags: [
            "AI Systems",
            "ML",
            "Automation",
            "Python",
            "LLMs",
            "Computer Vision",
          ],
        },
      ],
    },

    footer: {
      left: "© 2026 VexnoraSoft. Alle Rechte vorbehalten.",
      right: "Powered by VexnoraSoft",
    },
  },

  bn: {
    nav: {
      services: "সেবাসমূহ",
      work: "আমাদের কাজ",
      pricing: "সহযোগিতা",
      testimonials: "কাজের পদ্ধতি",
      contact: "যোগাযোগ",
      cta: "পরামর্শ বুক করুন",
    },

    hero: {
      badge: "আধুনিক ব্যবসার জন্য সফটওয়্যার পার্টনার",
      title1: "আমরা ডিজাইন ও তৈরি করি",
      title2: "শক্তিশালী ডিজিটাল পণ্য",
      title3: "যা বাস্তব ব্যবসাকে এগিয়ে নিয়ে যায়।",
      desc: "VexnoraSoft আধুনিক ওয়েব অ্যাপ্লিকেশন, মোবাইল অ্যাপ, SaaS প্ল্যাটফর্ম, AI সিস্টেম এবং কাস্টম বিজনেস সফটওয়্যার তৈরি করে — স্কেলেবিলিটি, নিরাপত্তা ও বাস্তব ব্যবসায়িক প্রয়োজনকে কেন্দ্র করে।",
      primary: "প্রজেক্ট শুরু করুন",
      secondary: "আমাদের সেবা দেখুন",
      chips: ["ওয়েব ও মোবাইল অ্যাপ", "বিজনেস অটোমেশন", "AI ও স্মার্ট সলিউশন"],
    },

    feature: {
      eyebrow: "মূল সক্ষমতা",
      title: "আইডিয়া থেকে পূর্ণাঙ্গ ডিজিটাল পণ্য",
      live: "সক্রিয়",
      items: [
        [
          "ডিসকভারি ও স্ট্র্যাটেজি",
          "ব্যবসায়িক লক্ষ্য, ব্যবহারকারীর প্রয়োজন, কার্যপ্রবাহ এবং প্রযুক্তিগত রোডম্যাপ নির্ধারণ করি।",
        ],
        [
          "UI/UX ও ফ্রন্টএন্ড",
          "আধুনিক, সহজ এবং ব্যবহারকারী-কেন্দ্রিক ডিজিটাল ইন্টারফেস তৈরি করি।",
        ],
        [
          "ব্যাকএন্ড ও ইন্টিগ্রেশন",
          "স্কেলেবল API, অথেন্টিকেশন, পেমেন্ট, ড্যাশবোর্ড, অটোমেশন এবং তৃতীয় পক্ষের সিস্টেম ইন্টিগ্রেশন তৈরি করি।",
        ],
        [
          "ডিপ্লয়মেন্ট ও স্কেলিং",
          "প্রোডাকশন ডিপ্লয়মেন্ট, অপ্টিমাইজেশন, অবকাঠামো, মনিটরিং এবং ভবিষ্যৎ স্কেলিংয়ের ব্যবস্থা করি।",
        ],
      ],
    },

    trust: [
      ["উচ্চমানের ইঞ্জিনিয়ারিং", "দ্রুত, নিরাপদ ও স্কেলেবল"],
      ["আধুনিক প্রযুক্তি", "React, Next.js, Node.js"],
      ["ব্যবসা-কেন্দ্রিক", "বাস্তব অপারেশনের জন্য তৈরি"],
      ["ফ্লেক্সিবল ডেলিভারি", "MVP থেকে পূর্ণাঙ্গ প্ল্যাটফর্ম"],
    ],

    services: {
      eyebrow: "আমাদের সেবা",
      title: "বাস্তব ব্যবসায়িক চাহিদার জন্য আধুনিক সফটওয়্যার সলিউশন।",
      desc: "আমরা প্রতিষ্ঠানকে কাস্টম সফটওয়্যার, SaaS প্ল্যাটফর্ম, ওয়েব ও মোবাইল অ্যাপ, AI এবং অটোমেশন সলিউশন তৈরি করতে সহায়তা করি।",
      items: [
        {
          title: "কাস্টম সফটওয়্যার ডেভেলপমেন্ট",
          desc: "ব্যবসার নির্দিষ্ট প্রক্রিয়া অনুযায়ী বিজনেস অ্যাপ্লিকেশন, ড্যাশবোর্ড, পোর্টাল এবং পূর্ণাঙ্গ সফটওয়্যার প্ল্যাটফর্ম।",
        },
        {
          title: "SaaS ও প্ল্যাটফর্ম ইঞ্জিনিয়ারিং",
          desc: "মাল্টি-টেন্যান্ট SaaS, সাবস্ক্রিপশন সিস্টেম, মার্কেটপ্লেস, অ্যাডমিন প্ল্যাটফর্ম এবং স্কেলেবল ক্লাউড আর্কিটেকচার।",
        },
        {
          title: "মোবাইল অ্যাপ ডেভেলপমেন্ট",
          desc: "iOS ও Android-এর জন্য আধুনিক অ্যাপ — API, অথেন্টিকেশন, পেমেন্ট, নোটিফিকেশন ও রিয়েল-টাইম ফিচারসহ।",
        },
        {
          title: "AI ও অটোমেশন",
          desc: "AI-ভিত্তিক সিস্টেম, কম্পিউটার ভিশন, স্মার্ট অটোমেশন, ওয়ার্কফ্লো অপ্টিমাইজেশন এবং বাস্তব ব্যবসায়িক AI সলিউশন।",
        },
      ],
    },

    work: {
      eyebrow: "নির্বাচিত কাজ",
      title: "বাস্তব ব্যবসার জন্য তৈরি বাস্তব সফটওয়্যার পণ্য।",
      desc: "আমাদের কাজের মধ্যে রয়েছে SaaS প্ল্যাটফর্ম, AI সিস্টেম, রেস্টুরেন্ট প্রযুক্তি, মার্কেটপ্লেস, মোবাইল অ্যাপ এবং ব্যবসায়িক অপারেশন সফটওয়্যার।",
      items: [
        {
          name: "Reivio Web & Mobile App",
          type: "ভ্রমণ ও বুকিং প্ল্যাটফর্ম",
          summary:
            "স্টে, ভ্রমণ, মোবিলিটি, বুকিং এবং স্কেলেবল মার্কেটপ্লেস অপারেশনকে একত্রিত করার জন্য তৈরি আধুনিক ডিজিটাল প্ল্যাটফর্ম।",
        },
        {
          name: "ZonoVision AI Theft Detection",
          type: "AI সিকিউরিটি সলিউশন",
          summary:
            "কম্পিউটার ভিশন, রিয়েল-টাইম ভিডিও বিশ্লেষণ, স্মার্ট ডিটেকশন এবং অ্যালার্টের মাধ্যমে রিটেইল সিকিউরিটির জন্য তৈরি AI সিস্টেম।",
        },
        {
          name: "Mr. Baker Mobile App",
          type: "ফুড ও কমার্স অ্যাপ",
          summary:
            "পণ্য ব্রাউজিং, ডিজিটাল অর্ডার এবং কাস্টমার অভিজ্ঞতার জন্য তৈরি আধুনিক মোবাইল ফুড অর্ডারিং অ্যাপ।",
        },
        {
          name: "Time Track Work Management App",
          type: "কর্মপরিচালনা প্ল্যাটফর্ম",
          summary:
            "কর্মঘণ্টা, উৎপাদনশীলতা, টিম অপারেশন, রেকর্ড এবং রিপোর্টিং পরিচালনার জন্য তৈরি ডিজিটাল প্ল্যাটফর্ম।",
        },
        {
          name: "SPAR Online Grocery App",
          type: "ই-কমার্স প্ল্যাটফর্ম",
          summary:
            "অনলাইন পণ্য ব্রাউজিং, কার্ট, অর্ডার এবং স্থানীয় ডেলিভারি অপারেশনের জন্য তৈরি ডিজিটাল গ্রোসারি সলিউশন।",
        },
        {
          name: "Pizza Casa Online Ordering App",
          type: "রেস্টুরেন্ট অর্ডারিং সিস্টেম",
          summary:
            "ডিজিটাল মেনু, অনলাইন চেকআউট, গ্রাহক অর্ডার এবং রেস্টুরেন্ট অর্ডার ম্যানেজমেন্টের জন্য তৈরি প্ল্যাটফর্ম।",
        },
      ],
      ready: "আপনার ব্যবসার জন্য কাস্টমাইজ করা সম্ভব",
    },

    pricing: {
      eyebrow: "সহযোগিতার ধরন",
      title: "সফটওয়্যার তৈরি ও পরিচালনার জন্য ফ্লেক্সিবল মডেল।",
      desc: "প্রজেক্টের পরিধি, প্রযুক্তিগত জটিলতা, ইন্টিগ্রেশন, ডেলিভারি প্রয়োজন এবং দীর্ঘমেয়াদি লক্ষ্য অনুযায়ী সহযোগিতার ধরন নির্ধারণ করা হয়।",
      plans: [
        {
          name: "Project Delivery",
          price: "Scope-based",
          subtitle: "নির্দিষ্ট সফটওয়্যার প্রজেক্টের জন্য",
          features: [
            "ডিসকভারি ও পরিকল্পনা",
            "UI/UX ও সফটওয়্যার ডেভেলপমেন্ট",
            "API ও সিস্টেম ইন্টিগ্রেশন",
            "প্রোডাকশন ডিপ্লয়মেন্ট",
            "হ্যান্ডওভার ও সাপোর্ট",
          ],
          cta: "প্রজেক্ট নিয়ে কথা বলুন",
        },
        {
          name: "Dedicated Development Team",
          price: "Monthly",
          subtitle: "দীর্ঘমেয়াদি সফটওয়্যার ডেভেলপমেন্টের জন্য",
          features: [
            "ডেডিকেটেড ইঞ্জিনিয়ারিং",
            "নিয়মিত ডেলিভারি",
            "প্রোডাক্ট ডেভেলপমেন্ট",
            "Cloud ও DevOps সাপোর্ট",
            "দীর্ঘমেয়াদি উন্নয়ন",
          ],
          cta: "টিম নিয়ে কথা বলুন",
          featured: true,
        },
        {
          name: "SaaS & Platform",
          price: "Custom Plan",
          subtitle: "SaaS ও ডিজিটাল প্ল্যাটফর্মের জন্য",
          features: [
            "ক্লাউড-ভিত্তিক প্ল্যাটফর্ম",
            "সাবস্ক্রিপশন মডেল",
            "নিয়মিত আপডেট",
            "টেকনিক্যাল সাপোর্ট",
            "স্কেলেবল অবকাঠামো",
          ],
          cta: "সলিউশন দেখুন",
        },
      ],
    },

    testimonials: {
      eyebrow: "আমাদের কাজের পদ্ধতি",
      title:
        "ব্যবসায়িক সমস্যা বোঝা থেকে দীর্ঘমেয়াদি অপারেশন পর্যন্ত একটি সম্পূর্ণ ইঞ্জিনিয়ারিং প্রক্রিয়া।",
      items: [
        {
          quote:
            "প্রথমে আমরা ব্যবসার সমস্যা, ব্যবহারকারী, অপারেশনাল চাহিদা এবং পরিমাপযোগ্য লক্ষ্যগুলো বুঝে নিই।",
          name: "Discover",
          role: "Business & Product Discovery",
        },
        {
          quote:
            "তারপর স্কেলেবল আর্কিটেকচার, পরিষ্কার UX এবং শক্তিশালী সফটওয়্যার ইঞ্জিনিয়ারিংয়ের মাধ্যমে পণ্য তৈরি করি।",
          name: "Build",
          role: "Design & Engineering",
        },
        {
          quote:
            "লঞ্চের পরেও আমরা অপ্টিমাইজেশন, মনিটরিং, অবকাঠামো, উন্নয়ন এবং ভবিষ্যৎ ফিচার নিয়ে কাজ করি।",
          name: "Operate",
          role: "Launch & Continuous Improvement",
        },
      ],
    },

    about: {
      eyebrow: "কেন VexnoraSoft",
      title:
        "আধুনিক প্রযুক্তি এবং বাস্তব ব্যবসায়িক প্রয়োজনের শক্তিশালী সমন্বয়।",
      desc: "আমরা শুধু কোড লিখি না। এমন সফটওয়্যার তৈরি করি যা বাস্তব অপারেশন সহজ করে, ব্যবসাকে স্কেল করতে সাহায্য করে এবং দীর্ঘমেয়াদি মূল্য তৈরি করে।",
      points: [
        "জার্মানি-ভিত্তিক ব্যবসায়িক উপস্থিতি",
        "Full-stack সফটওয়্যার ইঞ্জিনিয়ারিং",
        "SaaS ও প্ল্যাটফর্ম ডেভেলপমেন্ট",
        "AI ও অটোমেশন সক্ষমতা",
        "Cloud ও DevOps অভিজ্ঞতা",
        "দীর্ঘমেয়াদি প্রোডাক্ট চিন্তাভাবনা",
      ],
    },

    banner: {
      eyebrow: "নতুন কিছু তৈরি করতে চান?",
      title: "আপনার ধারণাকে একটি শক্তিশালী ডিজিটাল পণ্যে রূপ দিন।",
      desc: "কাস্টম সফটওয়্যার, SaaS প্ল্যাটফর্ম, AI সিস্টেম, মোবাইল অ্যাপ বা ব্যবসায়িক অটোমেশন — আপনার প্রয়োজন অনুযায়ী সঠিক সমাধান পরিকল্পনা ও তৈরি করতে আমরা সহায়তা করি।",
      cta: "আলোচনা শুরু করুন",
    },

    contact: {
      eyebrow: "যোগাযোগ",
      title: "VexnoraSoft-এর সঙ্গে আপনার পরবর্তী প্রজেক্ট শুরু করুন।",
      desc: "আপনার সফটওয়্যার, অ্যাপ, SaaS প্ল্যাটফর্ম, AI সিস্টেম, ইন্টিগ্রেশন বা অটোমেশন প্রয়োজন নিয়ে আমাদের সঙ্গে আলোচনা করুন।",
      labels: {
        email: "ইমেইল",
        website: "ওয়েবসাইট",
        location: "অবস্থান",
        name: "আপনার নাম",
        emailInput: "আপনার ইমেইল",
        company: "প্রতিষ্ঠানের নাম",
        service: "প্রয়োজনীয় সেবা",
        message: "আপনার প্রজেক্ট সম্পর্কে লিখুন",
        submit: "বার্তা পাঠান",
        success: "আপনার বার্তা সফলভাবে পাঠানো হয়েছে।",
        sending: "পাঠানো হচ্ছে...",
      },
      services: [
        "কাস্টম সফটওয়্যার",
        "ওয়েব অ্যাপ্লিকেশন",
        "মোবাইল অ্যাপ",
        "SaaS প্ল্যাটফর্ম",
        "অটোমেশন",
        "AI সলিউশন",
      ],
    },

    founder: {
      badge: "প্রতিষ্ঠাতা",
      title: "F M Hadiur Rahman",
      subtitle: "Founder & Software Engineer",
      description:
        "ব্যবসার ধারণাকে স্কেলেবল ডিজিটাল পণ্য, SaaS প্ল্যাটফর্ম, অপারেশনাল সিস্টেম এবং আধুনিক সফটওয়্যার অ্যাপ্লিকেশনে রূপান্তর করার ওপর কাজ করি।",
      description2:
        "মূল লক্ষ্য হলো শক্তিশালী সফটওয়্যার আর্কিটেকচার, ব্যবহারযোগ্য ডিজাইন, নির্ভরযোগ্য ইঞ্জিনিয়ারিং এবং দীর্ঘমেয়াদি ব্যবসায়িক মূল্য তৈরি করা।",
      stats: [
        { label: "ফোকাস", value: "Software & SaaS" },
        { label: "মার্কেট", value: "Germany + Global" },
        { label: "ইঞ্জিনিয়ারিং", value: "Full Stack" },
      ],
      skills: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "AWS"],
      ctaPrimary: "আলোচনা শুরু করুন",
      ctaSecondary: "আমাদের কাজ দেখুন",
      image: "/images/founder.jpg",
    },

    team: {
      badge: "আমাদের টিম",
      title: "VexnoraSoft-এর পেছনের মানুষগুলো",
      desc: "আমাদের টিম সফটওয়্যার ইঞ্জিনিয়ারিং, AI, আধুনিক প্রোডাক্ট ডেভেলপমেন্ট এবং বাস্তব ব্যবসায়িক চিন্তাভাবনাকে একত্রিত করে নির্ভরযোগ্য ডিজিটাল সলিউশন তৈরি করে।",
      ctaPrimary: "আমাদের সঙ্গে কথা বলুন",
      ctaSecondary: "আমাদের কাজ দেখুন",
      members: [
        {
          name: "F M Hadiur Rahman",
          role: "Founder & Full Stack Developer",
          bio: "স্কেলেবল SaaS প্ল্যাটফর্ম, বিজনেস সফটওয়্যার, ওয়েব অ্যাপ্লিকেশন, সিস্টেম ইন্টিগ্রেশন, ক্লাউড অবকাঠামো এবং আধুনিক ডিজিটাল পণ্য নিয়ে কাজ করেন।",
          image: "/images/hadiur.jpg",
          tags: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "AWS"],
        },
        {
          name: "Nihal Nallari",
          role: "Founder & AI Engineer",
          bio: "AI সিস্টেম, মেশিন লার্নিং, কম্পিউটার ভিশন, ইন্টেলিজেন্ট অটোমেশন এবং বাস্তব ব্যবসায়িক AI অ্যাপ্লিকেশন নিয়ে কাজ করেন।",
          image: "/images/nihal.jpg",
          tags: [
            "AI Systems",
            "ML",
            "Automation",
            "Python",
            "LLMs",
            "Computer Vision",
          ],
        },
      ],
    },

    footer: {
      left: "© 2026 VexnoraSoft. সর্বস্বত্ব সংরক্ষিত।",
      right: "Powered by VexnoraSoft",
    },
  },
};
