import type { Lang, SiteContent } from "@/types/site";

export const siteContent: Record<Lang, SiteContent> = {
  // ============================================================
  // ENGLISH
  // ============================================================

  en: {
    nav: {
      services: "Services",
      work: "Work",
      pricing: "Engagement",
      testimonials: "How We Work",
      contact: "Contact",
      cta: "Book a Consultation",
    },

    // ============================================================
    // HERO
    // ============================================================

    hero: {
      badge: "Software engineering for modern businesses",

      title1: "We design and build",
      title2: "powerful digital products",
      title3: "for real business operations.",

      desc: "VexnoraSoft engineers modern web applications, mobile products, SaaS platforms, AI systems and custom business software — combining strong architecture, thoughtful user experience and practical operational understanding.",

      primary: "Start Your Project",
      secondary: "Explore Services",

      chips: [
        "Web & Mobile Products",
        "Business Automation",
        "AI & Intelligent Systems",
      ],
    },

    feature: {
      eyebrow: "Engineering Capability",

      title: "Connected digital systems from idea to operation",

      live: "Active",

      items: [
        [
          "Discovery & Strategy",
          "We understand the business problem, users, workflows, requirements and measurable goals before defining the technical direction.",
        ],

        [
          "Experience & Engineering",
          "We turn requirements into intuitive interfaces, maintainable software and scalable product architecture.",
        ],

        [
          "Systems & Integrations",
          "APIs, authentication, payments, databases, automation and external systems are connected into one reliable platform.",
        ],

        [
          "Deploy & Operate",
          "We prepare products for production, infrastructure, monitoring, optimization and continuous future development.",
        ],
      ],
    },

    // ============================================================
    // TRUST / POSITIONING
    // ============================================================

    trust: [
      [
        "Engineering Quality",
        "Reliable architecture and maintainable software",
      ],

      ["Modern Technology", "Current web, cloud and application engineering"],

      ["Operational Thinking", "Designed around real business workflows"],

      [
        "Flexible Delivery",
        "From focused product builds to long-term development",
      ],
    ],

    // ============================================================
    // SERVICES
    // ============================================================

    services: {
      eyebrow: "Engineering Capabilities",

      title: "Software engineered around how your business actually works.",

      desc: "From customer-facing digital products to the systems behind daily operations, we design and engineer technology that solves real problems, integrates with existing workflows and can evolve with the business.",

      items: [
        {
          title: "Custom Software Development",

          desc: "Operational platforms, business applications, administration systems, portals, dashboards and custom digital tools engineered around your workflows and requirements.",
        },

        {
          title: "SaaS & Platform Engineering",

          desc: "Multi-tenant SaaS products, marketplaces, subscription platforms, business ecosystems and scalable cloud-based systems designed for long-term product growth.",
        },

        {
          title: "Web & Mobile Products",

          desc: "Modern customer and employee experiences across web, iOS and Android with authentication, APIs, payments, notifications, real-time functionality and polished interfaces.",
        },

        {
          title: "AI & Intelligent Automation",

          desc: "Practical AI systems, computer vision, workflow automation, intelligent processing, analytics and AI-assisted business operations connected to real software products.",
        },
      ],
    },

    // ============================================================
    // WORK
    // ============================================================

    work: {
      eyebrow: "Selected Work",

      title: "Digital products built around real operational challenges.",

      desc: "Our engineering work spans SaaS products, artificial intelligence, hospitality technology, marketplaces, mobile experiences and operational business systems.",

      items: [
        {
          name: "Reivio Web & Mobile App",

          type: "Travel & Marketplace Platform",

          summary:
            "A digital travel ecosystem designed to connect stays, bookings, mobility and marketplace operations within one scalable platform.",
        },

        {
          name: "ZonoVision AI Theft Detection",

          type: "AI & Computer Vision",

          summary:
            "An intelligent monitoring solution using computer vision and real-time processing to support operational retail security workflows.",
        },

        {
          name: "Mr. Baker Mobile App",

          type: "Food & Digital Commerce",

          summary:
            "A customer-focused mobile ordering experience supporting product discovery, digital ordering and connected food-service operations.",
        },

        {
          name: "Time Track Work Management App",

          type: "Workforce Operations",

          summary:
            "A digital operations platform for working hours, team activity, records, productivity workflows and management reporting.",
        },

        {
          name: "SPAR Online Grocery App",

          type: "Digital Grocery Commerce",

          summary:
            "An online grocery experience supporting digital product discovery, basket management, ordering and local commerce workflows.",
        },

        {
          name: "Pizza Casa Online Ordering App",

          type: "Restaurant Ordering",

          summary:
            "A restaurant ordering experience connecting digital menus, checkout, customer ordering and operational order workflows.",
        },
      ],

      ready: "Adaptable to individual business requirements",
    },

    // ============================================================
    // ENGAGEMENT
    // ============================================================

    pricing: {
      eyebrow: "Engagement Models",

      title: "Different ways to build serious software together.",

      desc: "The right collaboration model depends on the problem, product maturity, technical complexity, internal capabilities and how much continuous engineering support is required.",

      plans: [
        {
          name: "Project Delivery",

          price: "Custom Scope",

          subtitle: "For defined software initiatives",

          features: [
            "Business & technical discovery",
            "Product and architecture definition",
            "UI/UX & software engineering",
            "Systems and API integration",
            "Deployment and handover",
          ],

          cta: "Discuss Your Project",
        },

        {
          name: "Dedicated Development Team",

          price: "Custom Monthly",

          subtitle: "For continuous product engineering",

          features: [
            "Dedicated engineering capacity",
            "Continuous product delivery",
            "Frontend & backend engineering",
            "Cloud and infrastructure support",
            "Long-term technical development",
          ],

          cta: "Discuss Your Team",

          featured: true,
        },

        {
          name: "SaaS & Platform",

          price: "Custom Model",

          subtitle: "For platform-based business solutions",

          features: [
            "Cloud-based platform",
            "Product configuration",
            "Integrations and workflows",
            "Continuous improvements",
            "Technical support",
          ],

          cta: "Explore Solutions",
        },
      ],
    },

    // ============================================================
    // HOW WE WORK
    // ============================================================

    testimonials: {
      eyebrow: "How We Work",

      title:
        "A clear engineering process from understanding the problem to operating the product.",

      items: [
        {
          name: "Discover",

          role: "Business & Product Discovery",

          quote:
            "We begin by understanding the business problem, users, workflows, constraints and measurable outcomes before making technology decisions.",
        },

        {
          name: "Design & Build",

          role: "Architecture, Experience & Engineering",

          quote:
            "We translate the requirements into product architecture, user experience and maintainable software through an iterative engineering process.",
        },

        {
          name: "Launch & Operate",

          role: "Deployment & Continuous Improvement",

          quote:
            "After production launch, the focus shifts to reliability, monitoring, optimization, infrastructure and future product development.",
        },
      ],
    },

    // ============================================================
    // WHY VEXNORASOFT
    // ============================================================

    about: {
      eyebrow: "Why VexnoraSoft",

      title: "Technology decisions grounded in real business operations.",

      desc: "The goal is not simply to ship features. We connect business understanding, product thinking and engineering so the software remains useful, maintainable and valuable after launch.",

      points: [
        "Business-oriented software engineering",

        "Full-stack product development",

        "SaaS & platform architecture",

        "AI & automation capability",

        "Cloud & system integration experience",

        "Long-term product thinking",
      ],
    },

    banner: {
      eyebrow: "Have a project in mind?",

      title: "Turn a business challenge into a working digital system.",

      desc: "Whether the requirement is custom software, a SaaS product, an AI-enabled system, a mobile application or operational automation, we can help structure the problem and engineer the appropriate solution.",

      cta: "Start a Conversation",
    },

    // ============================================================
    // CONTACT
    // ============================================================

    contact: {
      eyebrow: "Start a Conversation",

      title: "Tell us what you want to build, improve or automate.",

      desc: "Share your business challenge, product idea or operational requirement. A complete technical specification is not necessary — understanding the problem is enough to start the conversation.",

      labels: {
        email: "Email",

        website: "Website",

        location: "Location",

        name: "Your Name",

        emailInput: "Your Email",

        company: "Company",

        service: "Area of Interest",

        message: "Tell us about the project",

        submit: "Send Inquiry",

        success: "Your message has been sent successfully.",

        sending: "Sending...",
      },

      services: [
        "Custom Software Development",
        "SaaS & Platform Engineering",
        "Web Application",
        "Mobile Application",
        "AI & Automation",
        "System Integration",
      ],
    },

    // ============================================================
    // FOUNDER
    // ============================================================

    founder: {
      badge: "Founder & Engineering",

      title: "F M Hadiur Rahman",

      subtitle: "Founder & Software Engineer",

      description:
        "Focused on transforming business requirements into scalable digital products, SaaS platforms, connected operational systems and modern software applications.",

      description2:
        "The approach combines software architecture, product thinking, practical user experience and hands-on engineering with an emphasis on systems that remain useful and maintainable over time.",

      stats: [
        {
          label: "Focus",
          value: "Software & SaaS",
        },

        {
          label: "Market",
          value: "Germany + Global",
        },

        {
          label: "Engineering",
          value: "Full Stack",
        },
      ],

      skills: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "AWS"],

      ctaPrimary: "Start a Conversation",

      ctaSecondary: "Explore Our Work",

      image: "/images/founder.jpg",
    },

    // ============================================================
    // TEAM
    // ============================================================

    team: {
      badge: "Our Team",

      title: "Engineering, AI and product thinking under one roof.",

      desc: "VexnoraSoft brings together software engineering and artificial intelligence expertise to build practical digital products and operational systems.",

      ctaPrimary: "Talk to Our Team",

      ctaSecondary: "Explore Our Work",

      members: [
        {
          name: "F M Hadiur Rahman",

          role: "Founder & Full Stack Developer",

          bio: "Focused on SaaS platforms, business software, web applications, integrations, cloud infrastructure and end-to-end digital product engineering.",

          image: "/images/hadiur.jpg",

          tags: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "AWS"],
        },

        {
          name: "Nihal Nallari",

          role: "Founder & AI Engineer",

          bio: "Focused on machine learning, computer vision, intelligent automation and practical AI systems designed to solve operational business problems.",

          image: "/images/nihal.jpg",

          tags: [
            "AI Systems",
            "Machine Learning",
            "Automation",
            "Python",
            "LLMs",
            "Computer Vision",
          ],
        },
      ],
    },

    // ============================================================
    // FOOTER
    // ============================================================

    footer: {
      left: "Software, SaaS, AI and digital systems engineered around real business operations.",

      right: "Designed in Germany. Built for global digital business.",
    },
  },

  // ============================================================
  // GERMAN
  // ============================================================

  de: {
    nav: {
      services: "Leistungen",
      work: "Projekte",
      pricing: "Zusammenarbeit",
      testimonials: "Arbeitsweise",
      contact: "Kontakt",
      cta: "Beratung anfragen",
    },

    // ============================================================
    // HERO
    // ============================================================

    hero: {
      badge: "Software Engineering für moderne Unternehmen",

      title1: "Wir entwickeln",
      title2: "leistungsstarke digitale Produkte",
      title3: "für reale Geschäftsprozesse.",

      desc: "VexnoraSoft entwickelt moderne Webanwendungen, mobile Produkte, SaaS-Plattformen, KI-Systeme und individuelle Business-Software – mit durchdachter Architektur, guter Nutzererfahrung und einem klaren Verständnis realer betrieblicher Anforderungen.",

      primary: "Projekt starten",

      secondary: "Leistungen ansehen",

      chips: [
        "Web- & Mobile-Produkte",
        "Business-Automation",
        "KI & intelligente Systeme",
      ],
    },

    feature: {
      eyebrow: "Engineering-Kompetenz",

      title: "Vernetzte digitale Systeme von der Idee bis zum Betrieb",

      live: "Aktiv",

      items: [
        [
          "Analyse & Strategie",
          "Wir verstehen Geschäftsproblem, Nutzer, Abläufe, Anforderungen und messbare Ziele, bevor die technische Richtung definiert wird.",
        ],

        [
          "Experience & Engineering",
          "Anforderungen werden in intuitive Oberflächen, wartbare Software und eine skalierbare Produktarchitektur übersetzt.",
        ],

        [
          "Systeme & Integrationen",
          "APIs, Authentifizierung, Zahlungen, Datenbanken, Automatisierungen und externe Systeme werden zuverlässig miteinander verbunden.",
        ],

        [
          "Deployment & Betrieb",
          "Wir bereiten Produkte auf Produktivbetrieb, Infrastruktur, Monitoring, Optimierung und kontinuierliche Weiterentwicklung vor.",
        ],
      ],
    },

    // ============================================================
    // TRUST
    // ============================================================

    trust: [
      [
        "Engineering-Qualität",
        "Zuverlässige Architektur und wartbare Software",
      ],

      [
        "Moderne Technologien",
        "Aktuelles Web-, Cloud- und Application Engineering",
      ],

      ["Operatives Verständnis", "Für reale Geschäftsabläufe entwickelt"],

      [
        "Flexible Zusammenarbeit",
        "Vom fokussierten Projekt bis zur langfristigen Entwicklung",
      ],
    ],

    // ============================================================
    // SERVICES
    // ============================================================

    services: {
      eyebrow: "Engineering-Kompetenzen",

      title: "Software, die sich an Ihren realen Geschäftsabläufen orientiert.",

      desc: "Von digitalen Kundenerlebnissen bis zu den Systemen hinter dem täglichen Betrieb entwickeln wir Technologie, die konkrete Probleme löst, bestehende Abläufe integriert und langfristig mit dem Unternehmen wachsen kann.",

      items: [
        {
          title: "Individuelle Softwareentwicklung",

          desc: "Operative Plattformen, Business-Anwendungen, Administrationssysteme, Portale, Dashboards und individuelle digitale Werkzeuge für konkrete Prozesse und Anforderungen.",
        },

        {
          title: "SaaS & Plattform Engineering",

          desc: "Multi-Tenant-SaaS-Produkte, Marktplätze, Abonnement-Plattformen und skalierbare Cloud-Systeme für langfristige digitale Geschäftsmodelle.",
        },

        {
          title: "Web- & Mobile-Produkte",

          desc: "Moderne Anwendungen für Web, iOS und Android mit Authentifizierung, APIs, Zahlungen, Benachrichtigungen, Echtzeitfunktionen und hochwertiger Nutzererfahrung.",
        },

        {
          title: "KI & intelligente Automatisierung",

          desc: "Praktische KI-Systeme, Computer Vision, intelligente Prozessautomatisierung, Datenverarbeitung und KI-gestützte Funktionen als Bestandteil realer Softwareprodukte.",
        },
      ],
    },

    // ============================================================
    // WORK
    // ============================================================

    work: {
      eyebrow: "Ausgewählte Projekte",

      title: "Digitale Produkte für reale operative Herausforderungen.",

      desc: "Unsere Engineering-Arbeit umfasst SaaS-Produkte, künstliche Intelligenz, Hospitality-Technologie, Marktplätze, mobile Anwendungen und operative Business-Systeme.",

      items: [
        {
          name: "Reivio Web- & Mobile-App",

          type: "Travel- & Marketplace-Plattform",

          summary:
            "Ein digitales Reise-Ökosystem, das Unterkünfte, Buchungen, Mobilität und Marketplace-Prozesse innerhalb einer skalierbaren Plattform verbindet.",
        },

        {
          name: "ZonoVision AI Theft Detection",

          type: "KI & Computer Vision",

          summary:
            "Eine intelligente Monitoring-Lösung mit Computer Vision und Echtzeitverarbeitung zur Unterstützung operativer Sicherheitsprozesse im Einzelhandel.",
        },

        {
          name: "Mr. Baker Mobile App",

          type: "Food & Digital Commerce",

          summary:
            "Eine mobile Bestelllösung für Produktauswahl, digitale Bestellungen und vernetzte Abläufe im Food-Service.",
        },

        {
          name: "Time Track Work Management App",

          type: "Workforce Operations",

          summary:
            "Eine digitale Plattform zur Verwaltung von Arbeitszeiten, Teamaktivitäten, operativen Daten, Produktivitätsprozessen und Reporting.",
        },

        {
          name: "SPAR Online Grocery App",

          type: "Digital Grocery Commerce",

          summary:
            "Eine digitale Grocery-Lösung für Produktsuche, Warenkorb, Bestellungen und lokale Commerce- und Lieferprozesse.",
        },

        {
          name: "Pizza Casa Online Ordering App",

          type: "Restaurant Ordering",

          summary:
            "Eine Restaurant-Lösung, die digitale Speisekarte, Checkout, Kundenbestellungen und operative Auftragsprozesse miteinander verbindet.",
        },
      ],

      ready: "Individuell an Geschäftsanforderungen anpassbar",
    },

    // ============================================================
    // ENGAGEMENT
    // ============================================================

    pricing: {
      eyebrow: "Zusammenarbeitsmodelle",

      title: "Flexible Wege, gemeinsam anspruchsvolle Software zu entwickeln.",

      desc: "Das passende Modell hängt von Geschäftsproblem, Produktreife, technischer Komplexität, internen Ressourcen und dem langfristig benötigten Engineering-Support ab.",

      plans: [
        {
          name: "Project Delivery",

          price: "Individueller Umfang",

          subtitle: "Für definierte Softwareprojekte",

          features: [
            "Business- & technische Analyse",
            "Produkt- und Architekturkonzept",
            "UI/UX & Software Engineering",
            "System- und API-Integrationen",
            "Deployment & Übergabe",
          ],

          cta: "Projekt besprechen",
        },

        {
          name: "Dedicated Development Team",

          price: "Individuell monatlich",

          subtitle: "Für kontinuierliche Produktentwicklung",

          features: [
            "Dedizierte Engineering-Kapazität",
            "Kontinuierliche Produktentwicklung",
            "Frontend- & Backend-Engineering",
            "Cloud- & Infrastruktur-Support",
            "Langfristige technische Weiterentwicklung",
          ],

          cta: "Team besprechen",

          featured: true,
        },

        {
          name: "SaaS & Platform",

          price: "Individuelles Modell",

          subtitle: "Für plattformbasierte Business-Lösungen",

          features: [
            "Cloud-basierte Plattform",
            "Produktkonfiguration",
            "Integrationen & Workflows",
            "Kontinuierliche Weiterentwicklung",
            "Technischer Support",
          ],

          cta: "Lösungen ansehen",
        },
      ],
    },

    // ============================================================
    // PROCESS
    // ============================================================

    testimonials: {
      eyebrow: "Unsere Arbeitsweise",

      title:
        "Ein klarer Engineering-Prozess vom Verständnis des Problems bis zum langfristigen Betrieb.",

      items: [
        {
          name: "Verstehen",

          role: "Business- & Product Discovery",

          quote:
            "Wir beginnen mit einem klaren Verständnis von Geschäftsproblem, Nutzern, Abläufen, Rahmenbedingungen und messbaren Ergebnissen.",
        },

        {
          name: "Design & Entwicklung",

          role: "Architektur, Experience & Engineering",

          quote:
            "Die Anforderungen werden in Produktarchitektur, Nutzererlebnis und wartbare Software innerhalb eines iterativen Engineering-Prozesses übersetzt.",
        },

        {
          name: "Launch & Betrieb",

          role: "Deployment & kontinuierliche Verbesserung",

          quote:
            "Nach dem Produktivstart stehen Zuverlässigkeit, Monitoring, Optimierung, Infrastruktur und zukünftige Produktentwicklung im Mittelpunkt.",
        },
      ],
    },

    // ============================================================
    // WHY
    // ============================================================

    about: {
      eyebrow: "Warum VexnoraSoft",

      title: "Technologieentscheidungen auf Basis realer Geschäftsabläufe.",

      desc: "Unser Ziel ist nicht einfach die Lieferung möglichst vieler Features. Wir verbinden Business-Verständnis, Produktdenken und Engineering, damit Software auch nach dem Launch langfristig nützlich, wartbar und wertvoll bleibt.",

      points: [
        "Business-orientiertes Software Engineering",

        "Full-Stack Produktentwicklung",

        "SaaS- & Plattformarchitektur",

        "KI- & Automatisierungskompetenz",

        "Cloud- & Integrationserfahrung",

        "Langfristiges Produktdenken",
      ],
    },

    banner: {
      eyebrow: "Sie haben ein Projekt im Kopf?",

      title:
        "Verwandeln Sie eine geschäftliche Herausforderung in ein funktionierendes digitales System.",

      desc: "Ob individuelle Software, SaaS-Produkt, KI-gestütztes System, mobile Anwendung oder operative Automatisierung – wir helfen dabei, das Problem klar zu strukturieren und die passende Lösung zu entwickeln.",

      cta: "Gespräch starten",
    },

    // ============================================================
    // CONTACT
    // ============================================================

    contact: {
      eyebrow: "Gespräch starten",

      title:
        "Erzählen Sie uns, was Sie entwickeln, verbessern oder automatisieren möchten.",

      desc: "Beschreiben Sie Ihre geschäftliche Herausforderung, Produktidee oder operative Anforderung. Eine vollständige technische Spezifikation ist nicht erforderlich – das Problem zu verstehen reicht für den Anfang.",

      labels: {
        email: "E-Mail",

        website: "Website",

        location: "Standort",

        name: "Ihr Name",

        emailInput: "Ihre E-Mail",

        company: "Unternehmen",

        service: "Interessensbereich",

        message: "Beschreiben Sie Ihr Projekt",

        submit: "Anfrage senden",

        success: "Ihre Nachricht wurde erfolgreich gesendet.",

        sending: "Wird gesendet...",
      },

      services: [
        "Individuelle Softwareentwicklung",
        "SaaS & Plattform Engineering",
        "Web-Anwendung",
        "Mobile Anwendung",
        "KI & Automatisierung",
        "Systemintegration",
      ],
    },

    // ============================================================
    // FOUNDER
    // ============================================================

    founder: {
      badge: "Founder & Engineering",

      title: "F M Hadiur Rahman",

      subtitle: "Founder & Software Engineer",

      description:
        "Der Fokus liegt darauf, Geschäftsanforderungen in skalierbare digitale Produkte, SaaS-Plattformen, vernetzte operative Systeme und moderne Softwareanwendungen zu übersetzen.",

      description2:
        "Der Ansatz verbindet Softwarearchitektur, Produktdenken, praxisorientierte Nutzererfahrung und aktives Engineering mit dem Ziel, Systeme zu entwickeln, die langfristig nutzbar und wartbar bleiben.",

      stats: [
        {
          label: "Fokus",
          value: "Software & SaaS",
        },

        {
          label: "Markt",
          value: "Deutschland + Global",
        },

        {
          label: "Engineering",
          value: "Full Stack",
        },
      ],

      skills: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "AWS"],

      ctaPrimary: "Gespräch starten",

      ctaSecondary: "Projekte ansehen",

      image: "/images/founder.jpg",
    },

    // ============================================================
    // TEAM
    // ============================================================

    team: {
      badge: "Unser Team",

      title: "Software Engineering, KI und Produktdenken unter einem Dach.",

      desc: "VexnoraSoft verbindet Software Engineering und künstliche Intelligenz, um praktische digitale Produkte und operative Systeme zu entwickeln.",

      ctaPrimary: "Mit unserem Team sprechen",

      ctaSecondary: "Unsere Projekte ansehen",

      members: [
        {
          name: "F M Hadiur Rahman",

          role: "Founder & Full Stack Developer",

          bio: "Fokus auf SaaS-Plattformen, Business-Software, Web-Anwendungen, Integrationen, Cloud-Infrastruktur und End-to-End Product Engineering.",

          image: "/images/hadiur.jpg",

          tags: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "AWS"],
        },

        {
          name: "Nihal Nallari",

          role: "Founder & AI Engineer",

          bio: "Fokus auf Machine Learning, Computer Vision, intelligente Automatisierung und praktische KI-Systeme zur Lösung operativer Geschäftsprobleme.",

          image: "/images/nihal.jpg",

          tags: [
            "AI Systems",
            "Machine Learning",
            "Automation",
            "Python",
            "LLMs",
            "Computer Vision",
          ],
        },
      ],
    },

    footer: {
      left: "Software, SaaS, KI und digitale Systeme für reale Geschäftsabläufe.",

      right: "Designed in Germany. Built for global digital business.",
    },
  },

  // ============================================================
  // BANGLA
  // ============================================================

  bn: {
    nav: {
      services: "সেবাসমূহ",
      work: "আমাদের কাজ",
      pricing: "সহযোগিতা",
      testimonials: "কাজের পদ্ধতি",
      contact: "যোগাযোগ",
      cta: "পরামর্শ নিন",
    },

    // ============================================================
    // HERO
    // ============================================================

    hero: {
      badge: "আধুনিক ব্যবসার জন্য সফটওয়্যার ইঞ্জিনিয়ারিং",

      title1: "আমরা ডিজাইন ও তৈরি করি",
      title2: "শক্তিশালী ডিজিটাল পণ্য",
      title3: "বাস্তব ব্যবসার জন্য।",

      desc: "VexnoraSoft আধুনিক ওয়েব অ্যাপ্লিকেশন, মোবাইল প্রোডাক্ট, SaaS প্ল্যাটফর্ম, AI সিস্টেম এবং কাস্টম বিজনেস সফটওয়্যার তৈরি করে — শক্তিশালী আর্কিটেকচার, ভালো ব্যবহারকারীর অভিজ্ঞতা এবং বাস্তব অপারেশনাল প্রয়োজনকে একত্রিত করে।",

      primary: "প্রজেক্ট শুরু করুন",

      secondary: "সেবাসমূহ দেখুন",

      chips: [
        "ওয়েব ও মোবাইল প্রোডাক্ট",
        "বিজনেস অটোমেশন",
        "AI ও ইন্টেলিজেন্ট সিস্টেম",
      ],
    },

    feature: {
      eyebrow: "ইঞ্জিনিয়ারিং সক্ষমতা",

      title: "আইডিয়া থেকে বাস্তব অপারেশন পর্যন্ত সংযুক্ত ডিজিটাল সিস্টেম",

      live: "সক্রিয়",

      items: [
        [
          "বিশ্লেষণ ও পরিকল্পনা",
          "প্রযুক্তিগত সিদ্ধান্ত নেওয়ার আগে আমরা ব্যবসার সমস্যা, ব্যবহারকারী, কার্যপ্রবাহ, প্রয়োজন এবং পরিমাপযোগ্য লক্ষ্য বুঝে নিই।",
        ],

        [
          "ডিজাইন ও ইঞ্জিনিয়ারিং",
          "প্রয়োজনগুলোকে ব্যবহারযোগ্য ইন্টারফেস, রক্ষণাবেক্ষণযোগ্য সফটওয়্যার এবং স্কেলেবল প্রোডাক্ট আর্কিটেকচারে রূপান্তর করি।",
        ],

        [
          "সিস্টেম ও ইন্টিগ্রেশন",
          "API, অথেন্টিকেশন, পেমেন্ট, ডেটাবেস, অটোমেশন এবং বাহ্যিক সিস্টেমকে একটি নির্ভরযোগ্য প্ল্যাটফর্মে যুক্ত করি।",
        ],

        [
          "ডিপ্লয় ও পরিচালনা",
          "প্রোডাকশন, অবকাঠামো, মনিটরিং, অপ্টিমাইজেশন এবং ভবিষ্যৎ উন্নয়নের জন্য সফটওয়্যার প্রস্তুত করি।",
        ],
      ],
    },

    // ============================================================
    // TRUST
    // ============================================================

    trust: [
      [
        "ইঞ্জিনিয়ারিং মান",
        "নির্ভরযোগ্য আর্কিটেকচার ও রক্ষণাবেক্ষণযোগ্য সফটওয়্যার",
      ],

      ["আধুনিক প্রযুক্তি", "ওয়েব, ক্লাউড ও অ্যাপ্লিকেশন ইঞ্জিনিয়ারিং"],

      ["অপারেশনাল চিন্তাভাবনা", "বাস্তব ব্যবসায়িক কার্যপ্রবাহের জন্য ডিজাইন"],

      [
        "ফ্লেক্সিবল ডেলিভারি",
        "নির্দিষ্ট প্রজেক্ট থেকে দীর্ঘমেয়াদি ডেভেলপমেন্ট",
      ],
    ],

    // ============================================================
    // SERVICES
    // ============================================================

    services: {
      eyebrow: "ইঞ্জিনিয়ারিং সক্ষমতা",

      title:
        "আপনার ব্যবসা যেভাবে কাজ করে, সেই বাস্তবতার ওপর ভিত্তি করে সফটওয়্যার।",

      desc: "কাস্টমার-ফেসিং ডিজিটাল প্রোডাক্ট থেকে শুরু করে দৈনন্দিন অপারেশনের পেছনের সিস্টেম পর্যন্ত — আমরা এমন প্রযুক্তি তৈরি করি যা বাস্তব সমস্যা সমাধান করে, বিদ্যমান কার্যপ্রবাহের সঙ্গে যুক্ত হয় এবং ব্যবসার সঙ্গে দীর্ঘমেয়াদে বিকশিত হতে পারে।",

      items: [
        {
          title: "কাস্টম সফটওয়্যার ডেভেলপমেন্ট",

          desc: "অপারেশনাল প্ল্যাটফর্ম, বিজনেস অ্যাপ্লিকেশন, অ্যাডমিন সিস্টেম, পোর্টাল, ড্যাশবোর্ড এবং নির্দিষ্ট ব্যবসায়িক কার্যপ্রবাহের জন্য কাস্টম ডিজিটাল টুল।",
        },

        {
          title: "SaaS ও প্ল্যাটফর্ম ইঞ্জিনিয়ারিং",

          desc: "মাল্টি-টেন্যান্ট SaaS, মার্কেটপ্লেস, সাবস্ক্রিপশন প্ল্যাটফর্ম এবং স্কেলেবল ক্লাউড সিস্টেম — দীর্ঘমেয়াদি ডিজিটাল ব্যবসার জন্য তৈরি।",
        },

        {
          title: "ওয়েব ও মোবাইল প্রোডাক্ট",

          desc: "Web, iOS ও Android-এর জন্য আধুনিক অ্যাপ্লিকেশন — অথেন্টিকেশন, API, পেমেন্ট, নোটিফিকেশন, রিয়েল-টাইম ফিচার এবং উন্নত ব্যবহারকারীর অভিজ্ঞতাসহ।",
        },

        {
          title: "AI ও ইন্টেলিজেন্ট অটোমেশন",

          desc: "প্র্যাকটিক্যাল AI সিস্টেম, কম্পিউটার ভিশন, স্মার্ট অটোমেশন, ডেটা প্রসেসিং এবং বাস্তব সফটওয়্যারের সঙ্গে যুক্ত AI-ভিত্তিক ব্যবসায়িক ফিচার।",
        },
      ],
    },

    // ============================================================
    // WORK
    // ============================================================

    work: {
      eyebrow: "নির্বাচিত কাজ",

      title: "বাস্তব অপারেশনাল সমস্যার জন্য তৈরি ডিজিটাল প্রোডাক্ট।",

      desc: "আমাদের ইঞ্জিনিয়ারিং কাজের মধ্যে রয়েছে SaaS প্রোডাক্ট, AI, হসপিটালিটি প্রযুক্তি, মার্কেটপ্লেস, মোবাইল অ্যাপ এবং ব্যবসায়িক অপারেশন সিস্টেম।",

      items: [
        {
          name: "Reivio Web & Mobile App",

          type: "ট্রাভেল ও মার্কেটপ্লেস প্ল্যাটফর্ম",

          summary:
            "স্টে, বুকিং, মোবিলিটি এবং মার্কেটপ্লেস অপারেশনকে একটি স্কেলেবল ডিজিটাল প্ল্যাটফর্মে যুক্ত করার জন্য তৈরি ট্রাভেল ইকোসিস্টেম।",
        },

        {
          name: "ZonoVision AI Theft Detection",

          type: "AI ও Computer Vision",

          summary:
            "Computer Vision এবং রিয়েল-টাইম প্রসেসিং ব্যবহার করে রিটেইল নিরাপত্তার অপারেশনাল কার্যপ্রবাহকে সহায়তা করার জন্য তৈরি ইন্টেলিজেন্ট মনিটরিং সিস্টেম।",
        },

        {
          name: "Mr. Baker Mobile App",

          type: "Food & Digital Commerce",

          summary:
            "পণ্য ব্রাউজিং, ডিজিটাল অর্ডার এবং ফুড-সার্ভিস অপারেশনকে যুক্ত করার জন্য তৈরি কাস্টমার-কেন্দ্রিক মোবাইল অভিজ্ঞতা।",
        },

        {
          name: "Time Track Work Management App",

          type: "Workforce Operations",

          summary:
            "কর্মঘণ্টা, টিম অ্যাক্টিভিটি, অপারেশনাল রেকর্ড, প্রোডাক্টিভিটি ও ম্যানেজমেন্ট রিপোর্টিং পরিচালনার জন্য তৈরি ডিজিটাল প্ল্যাটফর্ম।",
        },

        {
          name: "SPAR Online Grocery App",

          type: "Digital Grocery Commerce",

          summary:
            "ডিজিটাল পণ্য ব্রাউজিং, কার্ট, অর্ডার এবং লোকাল কমার্স ও ডেলিভারি কার্যপ্রবাহের জন্য তৈরি অনলাইন গ্রোসারি সলিউশন।",
        },

        {
          name: "Pizza Casa Online Ordering App",

          type: "Restaurant Ordering",

          summary:
            "ডিজিটাল মেনু, চেকআউট, কাস্টমার অর্ডার এবং রেস্টুরেন্ট অপারেশনাল অর্ডার ফ্লোকে যুক্ত করার জন্য তৈরি প্ল্যাটফর্ম।",
        },
      ],

      ready: "আপনার ব্যবসার প্রয়োজন অনুযায়ী কাস্টমাইজ করা সম্ভব",
    },

    // ============================================================
    // ENGAGEMENT
    // ============================================================

    pricing: {
      eyebrow: "সহযোগিতার ধরন",

      title: "একসঙ্গে শক্তিশালী সফটওয়্যার তৈরির জন্য ফ্লেক্সিবল সহযোগিতা।",

      desc: "সঠিক সহযোগিতার ধরন নির্ভর করে ব্যবসায়িক সমস্যা, প্রোডাক্টের বর্তমান অবস্থা, প্রযুক্তিগত জটিলতা, আপনার নিজস্ব টিমের সক্ষমতা এবং দীর্ঘমেয়াদি ইঞ্জিনিয়ারিং প্রয়োজনের ওপর।",

      plans: [
        {
          name: "Project Delivery",

          price: "কাস্টম স্কোপ",

          subtitle: "নির্দিষ্ট সফটওয়্যার প্রজেক্টের জন্য",

          features: [
            "Business ও technical discovery",
            "Product ও architecture definition",
            "UI/UX ও software engineering",
            "System ও API integration",
            "Deployment ও handover",
          ],

          cta: "প্রজেক্ট নিয়ে আলোচনা করুন",
        },

        {
          name: "Dedicated Development Team",

          price: "কাস্টম মাসিক",

          subtitle: "নিয়মিত প্রোডাক্ট ডেভেলপমেন্টের জন্য",

          features: [
            "Dedicated engineering capacity",
            "Continuous product delivery",
            "Frontend ও backend engineering",
            "Cloud ও infrastructure support",
            "Long-term technical development",
          ],

          cta: "টিম নিয়ে আলোচনা করুন",

          featured: true,
        },

        {
          name: "SaaS & Platform",

          price: "কাস্টম মডেল",

          subtitle: "প্ল্যাটফর্ম-ভিত্তিক ব্যবসায়িক সলিউশনের জন্য",

          features: [
            "Cloud-based platform",
            "Product configuration",
            "Integration ও workflow",
            "Continuous improvement",
            "Technical support",
          ],

          cta: "সলিউশন দেখুন",
        },
      ],
    },

    // ============================================================
    // HOW WE WORK
    // ============================================================

    testimonials: {
      eyebrow: "আমাদের কাজের পদ্ধতি",

      title:
        "সমস্যা বোঝা থেকে প্রোডাক্ট পরিচালনা পর্যন্ত একটি পরিষ্কার ইঞ্জিনিয়ারিং প্রক্রিয়া।",

      items: [
        {
          name: "বোঝা ও পরিকল্পনা",

          role: "Business & Product Discovery",

          quote:
            "প্রথমে আমরা ব্যবসার সমস্যা, ব্যবহারকারী, কার্যপ্রবাহ, সীমাবদ্ধতা এবং পরিমাপযোগ্য ফলাফল বুঝে নিই — এরপর প্রযুক্তিগত সিদ্ধান্ত নেওয়া হয়।",
        },

        {
          name: "ডিজাইন ও তৈরি",

          role: "Architecture, Experience & Engineering",

          quote:
            "প্রয়োজনগুলোকে প্রোডাক্ট আর্কিটেকচার, ব্যবহারকারীর অভিজ্ঞতা এবং রক্ষণাবেক্ষণযোগ্য সফটওয়্যারে রূপান্তর করা হয় একটি ধারাবাহিক ইঞ্জিনিয়ারিং প্রক্রিয়ার মাধ্যমে।",
        },

        {
          name: "লঞ্চ ও পরিচালনা",

          role: "Deployment & Continuous Improvement",

          quote:
            "প্রোডাকশন লঞ্চের পর নির্ভরযোগ্যতা, মনিটরিং, অপ্টিমাইজেশন, অবকাঠামো এবং ভবিষ্যৎ প্রোডাক্ট ডেভেলপমেন্টে গুরুত্ব দেওয়া হয়।",
        },
      ],
    },

    // ============================================================
    // WHY VEXNORASOFT
    // ============================================================

    about: {
      eyebrow: "কেন VexnoraSoft",

      title:
        "বাস্তব ব্যবসায়িক কার্যপ্রবাহকে কেন্দ্র করে প্রযুক্তিগত সিদ্ধান্ত।",

      desc: "আমাদের লক্ষ্য শুধু ফিচার তৈরি করা নয়। Business understanding, product thinking এবং engineering-কে একত্রিত করে এমন সফটওয়্যার তৈরি করা যা লঞ্চের পরও দীর্ঘমেয়াদে ব্যবহারযোগ্য, রক্ষণাবেক্ষণযোগ্য এবং মূল্যবান থাকে।",

      points: [
        "Business-oriented software engineering",

        "Full-stack product development",

        "SaaS ও platform architecture",

        "AI ও automation capability",

        "Cloud ও system integration experience",

        "Long-term product thinking",
      ],
    },

    banner: {
      eyebrow: "কোনো প্রজেক্টের কথা ভাবছেন?",

      title: "একটি ব্যবসায়িক সমস্যাকে কার্যকর ডিজিটাল সিস্টেমে রূপান্তর করুন।",

      desc: "কাস্টম সফটওয়্যার, SaaS প্রোডাক্ট, AI-ভিত্তিক সিস্টেম, মোবাইল অ্যাপ্লিকেশন বা অপারেশনাল অটোমেশন — সমস্যা পরিষ্কারভাবে সংজ্ঞায়িত করা এবং সঠিক প্রযুক্তিগত সমাধান তৈরি করতে আমরা সহায়তা করতে পারি।",

      cta: "আলোচনা শুরু করুন",
    },

    // ============================================================
    // CONTACT
    // ============================================================

    contact: {
      eyebrow: "আলোচনা শুরু করুন",

      title: "আপনি কী তৈরি, উন্নত বা অটোমেট করতে চান তা আমাদের বলুন।",

      desc: "আপনার ব্যবসায়িক সমস্যা, প্রোডাক্ট আইডিয়া বা অপারেশনাল প্রয়োজন সম্পর্কে জানান। শুরু করার জন্য পূর্ণাঙ্গ technical specification প্রয়োজন নেই — সমস্যাটি বোঝাই প্রথম ধাপ।",

      labels: {
        email: "ইমেইল",

        website: "ওয়েবসাইট",

        location: "অবস্থান",

        name: "আপনার নাম",

        emailInput: "আপনার ইমেইল",

        company: "প্রতিষ্ঠান",

        service: "প্রয়োজনীয় ক্ষেত্র",

        message: "প্রজেক্ট সম্পর্কে লিখুন",

        submit: "বার্তা পাঠান",

        success: "আপনার বার্তা সফলভাবে পাঠানো হয়েছে।",

        sending: "পাঠানো হচ্ছে...",
      },

      services: [
        "কাস্টম সফটওয়্যার ডেভেলপমেন্ট",
        "SaaS ও প্ল্যাটফর্ম",
        "ওয়েব অ্যাপ্লিকেশন",
        "মোবাইল অ্যাপ্লিকেশন",
        "AI ও অটোমেশন",
        "সিস্টেম ইন্টিগ্রেশন",
      ],
    },

    // ============================================================
    // FOUNDER
    // ============================================================

    founder: {
      badge: "Founder & Engineering",

      title: "F M Hadiur Rahman",

      subtitle: "Founder & Software Engineer",

      description:
        "ব্যবসায়িক প্রয়োজনকে স্কেলেবল ডিজিটাল প্রোডাক্ট, SaaS প্ল্যাটফর্ম, সংযুক্ত অপারেশনাল সিস্টেম এবং আধুনিক সফটওয়্যার অ্যাপ্লিকেশনে রূপান্তর করার ওপর কাজ করেন।",

      description2:
        "এই পদ্ধতিতে software architecture, product thinking, ব্যবহারযোগ্য ডিজাইন এবং hands-on engineering-কে একত্রিত করা হয় — যাতে তৈরি সিস্টেম দীর্ঘমেয়াদে কার্যকর ও রক্ষণাবেক্ষণযোগ্য থাকে।",

      stats: [
        {
          label: "ফোকাস",
          value: "Software & SaaS",
        },

        {
          label: "মার্কেট",
          value: "Germany + Global",
        },

        {
          label: "ইঞ্জিনিয়ারিং",
          value: "Full Stack",
        },
      ],

      skills: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "AWS"],

      ctaPrimary: "আলোচনা শুরু করুন",

      ctaSecondary: "আমাদের কাজ দেখুন",

      image: "/images/founder.jpg",
    },

    // ============================================================
    // TEAM
    // ============================================================

    team: {
      badge: "আমাদের টিম",

      title: "Software Engineering, AI ও product thinking — একই টিমে।",

      desc: "VexnoraSoft software engineering এবং artificial intelligence-এর দক্ষতাকে একত্রিত করে বাস্তব ডিজিটাল প্রোডাক্ট ও অপারেশনাল সিস্টেম তৈরি করে।",

      ctaPrimary: "আমাদের টিমের সঙ্গে কথা বলুন",

      ctaSecondary: "আমাদের কাজ দেখুন",

      members: [
        {
          name: "F M Hadiur Rahman",

          role: "Founder & Full Stack Developer",

          bio: "SaaS প্ল্যাটফর্ম, বিজনেস সফটওয়্যার, ওয়েব অ্যাপ্লিকেশন, ইন্টিগ্রেশন, ক্লাউড ইনফ্রাস্ট্রাকচার এবং end-to-end digital product engineering নিয়ে কাজ করেন।",

          image: "/images/hadiur.jpg",

          tags: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "AWS"],
        },

        {
          name: "Nihal Nallari",

          role: "Founder & AI Engineer",

          bio: "Machine Learning, Computer Vision, intelligent automation এবং বাস্তব ব্যবসায়িক সমস্যা সমাধানের জন্য practical AI systems নিয়ে কাজ করেন।",

          image: "/images/nihal.jpg",

          tags: [
            "AI Systems",
            "Machine Learning",
            "Automation",
            "Python",
            "LLMs",
            "Computer Vision",
          ],
        },
      ],
    },

    // ============================================================
    // FOOTER
    // ============================================================

    footer: {
      left: "বাস্তব ব্যবসায়িক অপারেশনের জন্য Software, SaaS, AI এবং ডিজিটাল সিস্টেম।",

      right: "Designed in Germany. Built for global digital business.",
    },
  },
};
