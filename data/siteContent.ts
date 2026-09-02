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
      desc: "VexnoraSoft creates high-end websites, mobile apps, custom platforms, and business software with a strong focus on quality, speed, and long-term scalability.",
      primary: "Start Your Project",
      secondary: "Explore Services",
      chips: ["Web & App", "Business Automation", "AI-Ready Solutions"],
    },
    feature: {
      eyebrow: "Featured Capability",
      title: "End-to-End Product Delivery",
      live: "Live",
      items: [
        [
          "Discovery & Strategy",
          "We define the business goals, user flow, and technical roadmap.",
        ],
        [
          "UI/UX & Frontend",
          "Elegant interfaces designed to convert and delight users.",
        ],
        [
          "Backend & Integrations",
          "Robust APIs, authentication, payments, dashboards, and automation.",
        ],
        [
          "Deployment & Growth",
          "Production launch, optimization, and future-ready scaling.",
        ],
      ],
    },
    trust: [
      ["Premium Build Quality", "Fast, secure, scalable"],
      ["Modern Stack", "React, Next.js, Node.js"],
      ["Business Focused", "Built for real operations"],
      ["Flexible Delivery", "From MVP to full product"],
    ],
    services: {
      eyebrow: "Services",
      title: "Custom software services built for real business growth.",
      desc: "We help businesses launch and scale with modern websites, mobile apps, business systems, and AI-powered solutions tailored to real operational needs.",
      items: [
        {
          title: "Custom Web Development",
          desc: "Modern business websites, platforms, dashboards, and full-stack web applications built with scalability, speed, and clean UX in mind.",
        },
        {
          title: "Mobile App Development",
          desc: "Cross-platform mobile apps for iOS and Android with polished interfaces, API integration, authentication, payments, and real-time features.",
        },
        {
          title: "Booking & Ordering Systems",
          desc: "Online booking platforms, restaurant ordering systems, grocery apps, and operational workflows designed to improve customer experience and business efficiency.",
        },
        {
          title: "AI & Automation Solutions",
          desc: "AI-powered systems, smart business automation, analytics dashboards, and custom solutions that reduce manual work and create measurable value.",
        },
      ],
    },
    work: {
      eyebrow: "Selected Work",
      title: "Real products built for real users and businesses.",
      desc: "Our portfolio includes SaaS platforms, AI systems, ordering apps, business tools, and mobile-first digital products designed for practical use and long-term growth.",
      items: [
        {
          name: "Reivio Web & Mobile App",
          type: "Travel & Booking Platform",
          summary:
            "A modern booking and mobility platform with web and mobile experiences, designed to support stays, travel flows, and scalable platform operations.",
        },
        {
          name: "ZonoVision AI Theft Detection",
          type: "AI Security Solution",
          summary:
            "An AI-powered theft detection and surveillance solution built for smart retail monitoring, edge processing, and operational security insights.",
        },
        {
          name: "Mr. Baker Mobile App",
          type: "Food & Commerce App",
          summary:
            "A mobile app for bakery and food ordering with user-friendly flows, product browsing, order management, and business-focused digital convenience.",
        },
        {
          name: "Time Track Work Management App",
          type: "Productivity Tool",
          summary:
            "A time tracking and work management application designed to help teams and individuals manage hours, productivity, and operational reporting.",
        },
        {
          name: "SPAR Online Grocery App",
          type: "E-Commerce Platform",
          summary:
            "A grocery ordering solution for local retail operations with online product browsing, cart flow, delivery support, and digital sales enablement.",
        },
        {
          name: "Pizza Casa Online Ordering App",
          type: "Restaurant Ordering System",
          summary:
            "A digital ordering platform for restaurant operations with menu browsing, checkout flow, and streamlined online order management.",
        },
      ],
      ready: "Available for custom business adaptation",
    },
    pricing: {
      eyebrow: "Pricing & Packages",
      title: "Flexible packages for different business stages.",
      desc: "Use these as starter packages for discussions. Final pricing depends on scope, complexity, integrations, and delivery timeline.",
      plans: [
        {
          name: "Starter",
          price: "from €1,500",
          subtitle: "For small businesses and landing pages",
          features: [
            "Premium landing page",
            "Mobile responsive design",
            "Contact form",
            "Basic SEO setup",
            "Fast deployment",
          ],
          cta: "Choose Starter",
        },
        {
          name: "Business",
          price: "from €4,500",
          subtitle: "For companies needing custom functionality",
          features: [
            "Multi-page website or dashboard",
            "Admin panel or booking flow",
            "API integration",
            "Advanced UI/UX",
            "Deployment support",
          ],
          cta: "Choose Business",
          featured: true,
        },
        {
          name: "Premium",
          price: "Custom Quote",
          subtitle: "For platforms, apps, and scalable systems",
          features: [
            "Full-stack product development",
            "Mobile app or web platform",
            "Complex workflows",
            "Scalable architecture",
            "Long-term support",
          ],
          cta: "Request Proposal",
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "A premium experience from strategy to delivery.",
      items: [
        {
          quote:
            "VexnoraSoft combines strong technical execution with a clear business mindset. The communication was fast, professional, and solution-oriented.",
          name: "Daniel M.",
          role: "Business Owner",
        },
        {
          quote:
            "The project felt premium from the first design direction to the final product. Clean UI, practical features, and dependable delivery.",
          name: "Sarah K.",
          role: "Startup Founder",
        },
        {
          quote:
            "They understood both the product side and the operational side. That made a huge difference in how efficiently the system was built.",
          name: "Amin R.",
          role: "Operations Manager",
        },
      ],
    },
    about: {
      eyebrow: "Why Choose Us",
      title: "A premium technology partner with a practical business mindset.",
      desc: "We focus on elegant execution, business value, and long-term product thinking — not just shipping code.",
      points: [
        "Germany-based business presence",
        "Full-stack expertise from strategy to deployment",
        "Clean UI with premium user experience",
        "Scalable architecture for future growth",
        "Fast communication and client-focused execution",
        "Suitable for startups, local businesses, and B2B clients",
      ],
    },
    banner: {
      eyebrow: "Ready to build?",
      title: "Let’s turn your idea into a premium digital product.",
      desc: "Whether you need a company website, customer platform, admin dashboard, mobile app, or custom software system, we can help you launch with confidence.",
      cta: "Talk to Us",
    },
    contact: {
      eyebrow: "Contact",
      title: "Start your next project with VexnoraSoft.",
      desc: "Reach out to discuss your website, app, platform, automation, or software idea. We’ll help shape the right solution.",
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
        success:
          "Your message has been prepared. Connect this form to your backend to make it live.",
        sending: "Preparing...",
      },
      services: [
        "Website",
        "Web App",
        "Mobile App",
        "Custom Software",
        "Automation",
        "AI Solution",
      ],
    },
    founder: {
      badge: "Meet the Founder",
      title: "F M Hadiur Rahman",
      subtitle: "Founder & Full Stack Developer",
      description:
        "I help businesses turn ideas into scalable digital products — from company websites and management systems to custom SaaS platforms and mobile-ready solutions.",
      description2:
        "My focus is on building modern, reliable, and growth-driven software for clients who want both strong design and practical business results.",
      stats: [
        { label: "Focus", value: "B2B SaaS" },
        { label: "Market", value: "Germany + EU" },
        { label: "Stack", value: "Full Stack" },
      ],
      skills: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "AWS"],
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "View Our Work",
      image: "/images/founder.jpg",
    },
    team: {
      badge: "Meet the Founders",
      title: "The people behind VexnoraSoft",
      desc: "VexnoraSoft is built by a team that combines strong engineering execution with modern product thinking, AI capability, and practical business focus.",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "View Our Work",
      members: [
        {
          name: "F M Hadiur Rahman",
          role: "Founder & Full Stack Developer",
          bio: "Focused on building scalable websites, SaaS platforms, business systems, and modern digital products with strong UI, reliable backend architecture, and long-term business value.",
          image: "/images/hadiur.jpg",
          tags: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "AWS"],
        },
        {
          name: "Nihal Nallari",
          role: "Founder & AI Engineer",
          bio: "Focused on AI systems, intelligent automation, applied machine learning, and building practical technology solutions that help businesses operate smarter and grow faster.",
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
      pricing: "Pakete",
      testimonials: "Referenzen",
      contact: "Kontakt",
      cta: "Beratung buchen",
    },
    hero: {
      badge: "Premium-Softwarepartner für moderne Unternehmen",
      title1: "Wir konzipieren und entwickeln",
      title2: "hochwertige digitale Produkte",
      title3: "für nachhaltiges Unternehmenswachstum.",
      desc: "VexnoraSoft entwickelt hochwertige Websites, mobile Apps, individuelle Plattformen und Business-Software mit Fokus auf Qualität, Geschwindigkeit und langfristige Skalierbarkeit.",
      primary: "Projekt starten",
      secondary: "Leistungen ansehen",
      chips: ["Web & App", "Business-Automation", "KI-fähige Lösungen"],
    },
    feature: {
      eyebrow: "Kernkompetenz",
      title: "Ganzheitliche Produktentwicklung",
      live: "Aktiv",
      items: [
        [
          "Analyse & Strategie",
          "Wir definieren Geschäftsziele, Nutzerfluss und die technische Roadmap.",
        ],
        [
          "UI/UX & Frontend",
          "Elegante Oberflächen mit starker Nutzererfahrung und Conversion-Fokus.",
        ],
        [
          "Backend & Integrationen",
          "Stabile APIs, Authentifizierung, Zahlungen, Dashboards und Automatisierungen.",
        ],
        [
          "Deployment & Wachstum",
          "Produktivsetzung, Optimierung und skalierbare Weiterentwicklung.",
        ],
      ],
    },
    trust: [
      ["Premium-Qualität", "Schnell, sicher, skalierbar"],
      ["Moderner Stack", "React, Next.js, Node.js"],
      ["Business-orientiert", "Für echte Abläufe gebaut"],
      ["Flexible Umsetzung", "Vom MVP bis zum Produkt"],
    ],
    services: {
      eyebrow: "Leistungen",
      title:
        "Individuelle Softwarelösungen für nachhaltiges Unternehmenswachstum.",
      desc: "Wir unterstützen Unternehmen beim Aufbau moderner Websites, Apps und digitaler Systeme – mit Fokus auf Effizienz, Skalierbarkeit und echte Geschäftsanwendungen.",
      items: [
        {
          title: "Individuelle Webentwicklung",
          desc: "Moderne Unternehmenswebsites, Plattformen und Dashboards mit Fokus auf Performance, Sicherheit und skalierbare Architektur.",
        },
        {
          title: "Mobile App Entwicklung",
          desc: "Cross-Plattform Apps für iOS und Android mit hochwertigem UI/UX, API-Integration, Authentifizierung und Echtzeitfunktionen.",
        },
        {
          title: "Buchungs- & Bestellsysteme",
          desc: "Digitale Lösungen für Restaurants, Einzelhandel und Dienstleistungen – inklusive Online-Bestellungen, Reservierungen und automatisierter Abläufe.",
        },
        {
          title: "KI & Automatisierung",
          desc: "KI-gestützte Systeme, Business-Automation und intelligente Workflows zur Reduzierung manueller Prozesse und Steigerung der Effizienz.",
        },
      ],
    },
    work: {
      eyebrow: "Ausgewählte Projekte",
      title: "Reale digitale Produkte für echte Geschäftsanforderungen.",
      desc: "Unsere Projekte umfassen SaaS-Plattformen, KI-Systeme, Bestell-Apps und Business-Tools – entwickelt für praktische Anwendung und langfristiges Wachstum.",
      items: [
        {
          name: "Reivio Web- & Mobile-App",
          type: "Reise- & Buchungsplattform",
          summary:
            "Eine moderne Plattform für Buchungen und Mobilität mit Web- und Mobile-Erlebnis, entwickelt für skalierbare Geschäftsprozesse und Nutzerinteraktionen.",
          image: "/projects/reivio.jpg",
        },
        {
          name: "ZonoVision KI Diebstahlerkennung",
          type: "KI Sicherheitslösung",
          summary:
            "Ein KI-basiertes System zur Diebstahlerkennung und Videoanalyse für den Einzelhandel mit Fokus auf Echtzeitüberwachung und operative Sicherheit.",
        },
        {
          name: "Mr. Baker Mobile App",
          type: "Food & Commerce App",
          summary:
            "Mobile Anwendung für Bäckerei- und Food-Bestellungen mit intuitivem UX, Produktverwaltung und optimierten Bestellprozessen.",
        },
        {
          name: "Time Track Arbeitsmanagement App",
          type: "Produktivitäts-Tool",
          summary:
            "Eine Anwendung zur Zeiterfassung und Arbeitsverwaltung für Teams und Unternehmen zur besseren Planung und Auswertung von Arbeitsprozessen.",
        },
        {
          name: "SPAR Online Grocery App",
          type: "E-Commerce Lösung",
          summary:
            "Digitale Plattform für Lebensmittelbestellungen mit Produktkatalog, Warenkorb, Bestellabwicklung und Unterstützung für lokale Lieferprozesse.",
        },
        {
          name: "Pizza Casa Online Bestellsystem",
          type: "Restaurant Lösung",
          summary:
            "Online-Bestellsystem für Restaurants mit Menüverwaltung, Bestellprozess und effizienter Abwicklung digitaler Kundenbestellungen.",
        },
      ],
      ready: "Individuell anpassbar für Ihr Unternehmen",
    },
    pricing: {
      eyebrow: "Preise & Pakete",
      title: "Flexible Pakete für unterschiedliche Unternehmensphasen.",
      desc: "Diese Pakete dienen als Ausgangspunkt für Gespräche. Der finale Preis hängt von Umfang, Komplexität, Integrationen und dem Zeitrahmen ab.",
      plans: [
        {
          name: "Starter",
          price: "ab 1.500 €",
          subtitle: "Für kleine Unternehmen und Landingpages",
          features: [
            "Premium Landingpage",
            "Responsives Design",
            "Kontaktformular",
            "Basis-SEO",
            "Schnelles Deployment",
          ],
          cta: "Starter wählen",
        },
        {
          name: "Business",
          price: "ab 4.500 €",
          subtitle: "Für Unternehmen mit individueller Funktionalität",
          features: [
            "Mehrseitige Website oder Dashboard",
            "Admin-Panel oder Buchungsflow",
            "API-Integration",
            "Erweitertes UI/UX",
            "Deployment-Support",
          ],
          cta: "Business wählen",
          featured: true,
        },
        {
          name: "Premium",
          price: "Individuelles Angebot",
          subtitle: "Für Plattformen, Apps und skalierbare Systeme",
          features: [
            "Full-Stack Produktentwicklung",
            "Mobile App oder Web-Plattform",
            "Komplexe Workflows",
            "Skalierbare Architektur",
            "Langfristiger Support",
          ],
          cta: "Angebot anfragen",
        },
      ],
    },
    testimonials: {
      eyebrow: "Referenzen",
      title: "Ein Premium-Erlebnis von der Strategie bis zur Umsetzung.",
      items: [
        {
          quote:
            "VexnoraSoft verbindet starke technische Umsetzung mit klarem Business-Verständnis. Die Kommunikation war schnell, professionell und lösungsorientiert.",
          name: "Daniel M.",
          role: "Unternehmer",
        },
        {
          quote:
            "Das Projekt fühlte sich vom ersten Design bis zum finalen Produkt hochwertig an. Klare UI, praktische Funktionen und verlässliche Lieferung.",
          name: "Sarah K.",
          role: "Startup-Gründerin",
        },
        {
          quote:
            "Sie haben sowohl die Produktseite als auch die operative Seite verstanden. Das hat den Aufbau des Systems deutlich effizienter gemacht.",
          name: "Amin R.",
          role: "Operations Manager",
        },
      ],
    },
    about: {
      eyebrow: "Warum wir",
      title: "Ein Premium-Technologiepartner mit praktischem Business-Fokus.",
      desc: "Wir konzentrieren uns auf elegante Umsetzung, echten Geschäftswert und langfristiges Produktdenken – nicht nur auf Code.",
      points: [
        "Geschäftspräsenz in Deutschland",
        "Full-Stack-Kompetenz von Strategie bis Deployment",
        "Sauberes UI mit Premium-Nutzererlebnis",
        "Skalierbare Architektur für zukünftiges Wachstum",
        "Schnelle Kommunikation und kundenorientierte Umsetzung",
        "Geeignet für Startups, lokale Unternehmen und B2B-Kunden",
      ],
    },
    banner: {
      eyebrow: "Bereit für den nächsten Schritt?",
      title:
        "Lassen Sie uns Ihre Idee in ein hochwertiges digitales Produkt verwandeln.",
      desc: "Ob Unternehmenswebsite, Kundenplattform, Admin-Dashboard, mobile App oder individuelle Software – wir helfen Ihnen beim sicheren Launch.",
      cta: "Jetzt sprechen",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Starten Sie Ihr nächstes Projekt mit VexnoraSoft.",
      desc: "Sprechen Sie mit uns über Ihre Website, App, Plattform, Automatisierung oder Software-Idee. Gemeinsam definieren wir die passende Lösung.",
      labels: {
        email: "E-Mail",
        website: "Website",
        location: "Standort",
        name: "Ihr Name",
        emailInput: "Ihre E-Mail",
        company: "Firmenname",
        service: "Gewünschte Leistung",
        message: "Erzählen Sie uns von Ihrem Projekt",
        submit: "Anfrage senden",
        success:
          "Ihre Nachricht wurde vorbereitet. Verbinden Sie dieses Formular mit Ihrem Backend, um es live zu schalten.",
        sending: "Wird vorbereitet...",
      },
      services: [
        "Website",
        "Web-App",
        "Mobile App",
        "Individuelle Software",
        "Automation",
        "KI-Lösung",
      ],
    },
    founder: {
      badge: "Über den Gründer",
      title: "F M Hadiur Rahman",
      subtitle: "Gründer & Full-Stack-Entwickler",
      description:
        "Ich unterstütze Unternehmen dabei, Ideen in skalierbare digitale Produkte umzuwandeln – von Firmenwebsites und Verwaltungssystemen bis hin zu individuellen SaaS-Plattformen und mobilen Lösungen.",
      description2:
        "Mein Fokus liegt auf moderner, zuverlässiger und wachstumsorientierter Software für Kunden, die sowohl starkes Design als auch messbare Geschäftsergebnisse erwarten.",
      stats: [
        { label: "Schwerpunkt", value: "B2B SaaS" },
        { label: "Markt", value: "Deutschland + EU" },
        { label: "Technologie", value: "Full Stack" },
      ],
      skills: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "AWS"],
      ctaPrimary: "Beratung anfragen",
      ctaSecondary: "Unsere Projekte ansehen",
      image: "/images/founder.jpg",
    },
    team: {
      badge: "Die Gründer",
      title: "Die Menschen hinter VexnoraSoft",
      desc: "VexnoraSoft wird von einem Team aufgebaut, das starke technische Umsetzung mit modernem Produktdenken, KI-Kompetenz und praktischem Business-Fokus verbindet.",
      ctaPrimary: "Beratung anfragen",
      ctaSecondary: "Unsere Projekte ansehen",
      members: [
        {
          name: "F M Hadiur Rahman",
          role: "Gründer & Full-Stack-Entwickler",
          bio: "Fokus auf skalierbare Websites, SaaS-Plattformen, Business-Systeme und moderne digitale Produkte mit starkem UI, zuverlässiger Backend-Architektur und langfristigem Geschäftswert.",
          image: "/images/hadiur.jpg",
          tags: ["Next.js", "React", "Node.js", "TypeScript", "MongoDB", "AWS"],
        },
        {
          name: "Nihal Nallari",
          role: "Gründer & KI-Ingenieur",
          bio: "Fokus auf KI-Systeme, intelligente Automatisierung, angewandtes Machine Learning und praxisnahe Technologielösungen, die Unternehmen effizienter und zukunftssicher machen.",
          image: "/images/nihal.jpg",
          tags: [
            "KI-Systeme",
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
};
