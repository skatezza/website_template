export const copyConfig = {
  // Header
  header: {
    logo: {
      src: "/images/cr-batiment-pro-logo.svg",
      alt: "CR Batiment Pro logo",
    },
    navItems: [
      { label: "Accueil", href: "/" },
      { label: "À propos", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    ctaButton: "Contactez-nous",
  },

  // Home page
  home: {
    metadata: {
      title: "Accueil - CR Batiment Pro",
      description: "Page d'accueil de CR Batiment Pro",
    },
    hero: {
      heroImage: "/images/electricien6.webp",
      title: "Votre électricien de confiance à Paris",
      subtitle:
        "Interventions rapides 24h/24 et 7j/7 pour tous vos besoins en électricité générale.",
      cta: {
        label: "Demander un devis",
        ctaDescription:
          "Nous vous enverrons un SMS avec une confirmation de réception.",
        href: "/contact",
        ctaPlaceholder: "Entrez votre numéro de téléphone",
      },
      ctaButtonLink: "/contact",
      ctaButtonText1: "Demander un devis",
      ctaButtonText2: "Voir nos services",
      steps: [
        { description: "Artisans diplômés à votre service" },
        { description: "Garantie décennale sur tous nos travaux" },
        { description: "Intervention d'urgence ou sur rendez-vous" },
      ],
    },
    featuresBlocks: {
      smallTitle: "Nos services",
      bigTitle: "Des services pour tous vos besoins en électricité",
      features: [
        {
          title: "Installation électrique",
          description: "Câblage, tableaux électriques, mise aux normes",
          image: "/images/installation-electrique.jpg",
          icon: "bolt",
          href: "/contact",
          color: {
            from: "rose-500",
            to: "rose-400",
            darkTo: "rose-500",
          },
        },
        {
          title: "Dépannage 24/7",
          description: "Intervention rapide pour toute panne électrique",
          image: "/images/depannage-electrique.jpg",
          icon: "wrench",
          href: "/contact",
          color: {
            from: "rose-500",
            to: "rose-400",
            darkTo: "rose-500",
          },
        },
        {
          title: "Rénovation électrique",
          description: "Mise à niveau de votre installation existante",
          image: "/images/renovation-electrique.jpg",
          icon: "home",
          href: "/contact",
          color: {
            from: "rose-500",
            to: "rose-400",
            darkTo: "rose-500",
          },
        },
        {
          title: "Domotique",
          description: "Solutions intelligentes pour votre habitat",
          image: "/images/domotique.jpg",
          icon: "💡",
          href: "/contact",
          color: {
            from: "rose-500",
            to: "rose-400",
            darkTo: "rose-500",
          },
        },
      ],
    },
    process: {
      title: "Notre processus d'intervention",
      description:
        "Chez CR Batiment Pro, nous suivons un processus rigoureux pour garantir la qualité de nos services et votre satisfaction. Voici comment nous procédons :",
      steps: [
        {
          number: 1,
          title: "Prise de contact",
          description:
            "Contactez-nous par téléphone ou via notre formulaire en ligne. Nous évaluons vos besoins et planifions une intervention.",
          image: {
            src: "/images/contact-electricien.jpg",
            alt: "Prise de contact avec CR Batiment Pro",
          },
        },
        {
          number: 2,
          title: "Diagnostic et devis",
          description:
            "Notre électricien se rend sur place pour effectuer un diagnostic précis. Nous vous fournissons un devis détaillé et transparent.",
          image: {
            src: "/images/diagnostic-electrique.jpg",
            alt: "Diagnostic électrique par CR Batiment Pro",
          },
        },
        {
          number: 3,
          title: "Intervention et suivi",
          description:
            "Nous réalisons les travaux selon les normes en vigueur. Un suivi est assuré pour garantir votre entière satisfaction.",
          image: {
            src: "/images/intervention-electrique.jpg",
            alt: "Intervention électrique par CR Batiment Pro",
          },
        },
      ],
    },
    cta: {
      title: "Prêt à faire appel à nos services ?",
      subtitle:
        "Que ce soit pour une urgence ou un projet planifié, notre équipe d'électriciens professionnels est là pour vous.",
      buttonText: "Contactez-nous",
      buttonLink: "/contact",
    },
  },

  // About page
  about: {
    bigHeroBg: "/images/electricien2.jpeg",
    heroImage: "/images/electricien3.jpg",
    title: "CR Batiment Pro",
    subtitle: "Votre partenaire de confiance en électricité depuis 2010",
    description:
      "CR Batiment Pro est une entreprise d'électricité générale basée à Paris. Forte d'une expérience de plus de 10 ans, notre équipe d'artisans diplômés intervient rapidement 7j/7 et 24h/24 pour tous vos besoins en électricité, que ce soit en urgence ou sur rendez-vous.",
    values: [
      {
        title: "Professionnalisme",
        description:
          "Nos électriciens sont tous diplômés et formés aux dernières normes électriques.",
      },
      {
        title: "Réactivité",
        description:
          "Nous intervenons rapidement, 24h/24 et 7j/7, pour répondre à vos urgences.",
      },
      {
        title: "Qualité",
        description:
          "Tous nos travaux sont couverts par une garantie décennale pour votre tranquillité d'esprit.",
      },
    ],
    aboutFeaturesTitle: "Nos services",
    aboutFeaturesDescription:
      "Chez CR Batiment Pro, nous proposons une gamme complète de services d'électricité pour tous vos besoins, de la simple réparation à la rénovation complète.",
    aboutService1: "Installation électrique",
    aboutService2: "Dépannage 24/7",
    aboutService3: "Rénovation électrique",
    aboutService4: "Domotique",
    team: [
      {
        name: "Charles Renaud",
        role: "Fondateur & Électricien en chef",
        image: "/images/charles-renaud.jpg",
      },
    ],
  },

  // Blog page
  blog: {
    // Add content for the blog page
  },

  // Testimonials page
  testimonials: {
    title: "Ce que disent nos clients",
    subtitle:
      "Découvrez les expériences de nos clients satisfaits avec CR Batiment Pro.",
    cta: {
      label: "Demander un devis",
      href: "/contact",
    },
    ctaButtonLink: "/contact",
    ctaButtonText: "Demander un devis",
    clients: {
      title: "Ils nous font confiance",
      logos: [
        { src: "/images/client-logo-1.svg", alt: "Client 1" },
        { src: "/images/client-logo-2.svg", alt: "Client 2" },
        { src: "/images/client-logo-3.svg", alt: "Client 3" },
        { src: "/images/client-logo-4.svg", alt: "Client 4" },
        { src: "/images/client-logo-5.svg", alt: "Client 5" },
        { src: "/images/client-logo-6.svg", alt: "Client 6" },
        { src: "/images/client-logo-7.svg", alt: "Client 7" },
        { src: "/images/client-logo-8.svg", alt: "Client 8" },
      ],
    },
    circles: {
      title: "Ce que disent nos clients",
      subtitle:
        "Découvrez les expériences de nos clients satisfaits avec CR Batiment Pro.",
    },
    items: [
      {
        quote:
          "CR Batiment Pro a réparé ma chaudière en moins de 2 heures. Très professionnel et à l'écoute de nos besoins.",
        name: "Alexandre",
        role: "Client 1",
        image: "/images/alexandre.jpg",
      },
    ],
  },

  // Contact page
  contact: {
    metadata: {
      title: "Contact - CR Batiment Pro",
      description: "Page description",
    },
    header: {
      title: "Contactez-nous",
      subtitle:
        "Nous vous enverrons un SMS avec une confirmation de réception.",
    },
    form: {
      firstName: {
        label: "Prénom",
        placeholder: "Entrez votre prénom",
      },
      lastName: {
        label: "Nom",
        placeholder: "Entrez votre nom",
      },
      company: {
        label: "Entreprise",
        placeholder: "Entrez le nom de votre entreprise",
      },
      phone: {
        label: "Numéro de téléphone",
        placeholder: "Entrez votre numéro de téléphone",
      },
      country: {
        label: "Pays",
        options: ["France"],
      },
      message: {
        label: "Détails",
        optional: "Facultatif",
        placeholder: "Qu'est-ce que vous souhaitez ?",
      },
      role: {
        label: "Dites-nous-en plus sur vos besoins",
        options: ["Bricolage", "Rénovation", "Installation", "Autre"],
      },
      submit: {
        text: "Envoyer",
      },
    },
  },

  // Footer
  footer: {
    logo: {
      src: "/images/logo.png",
      alt: "CR Batiment Pro logo",
    },
    blocks: [
      {
        title: "Paris",
        links: [
          { label: "1er arrondissement", href: "#0" },
          { label: "2e arrondissement", href: "#0" },
          { label: "3e arrondissement", href: "#0" },
        ],
      },
      {
        title: "Lyon",
        links: [
          { label: "1er arrondissement", href: "#0" },
          { label: "2e arrondissement", href: "#0" },
          { label: "3e arrondissement", href: "#0" },
        ],
      },
      {
        title: "Marseille",
        links: [
          { label: "1er arrondissement", href: "#0" },
          { label: "2e arrondissement", href: "#0" },
          { label: "3e arrondissement", href: "#0" },
        ],
      },
      {
        title: "Bordeaux",
        links: [
          { label: "Centre-ville", href: "#0" },
          { label: "Bastide", href: "#0" },
          { label: "Caudéran", href: "#0" },
        ],
      },
    ],
    socialLinks: [
      {
        platform: "Facebook",
        href: "https://facebook.com/crbatimentpro",
        ariaLabel: "Facebook",
      },
      {
        platform: "X",
        href: "https://x.com/crbatimentpro",
        ariaLabel: "X (formerly Twitter)",
      },
      {
        platform: "Instagram",
        href: "https://instagram.com/crbatimentpro",
        ariaLabel: "Instagram",
      },
      {
        platform: "LinkedIn",
        href: "https://linkedin.com/company/crbatimentpro",
        ariaLabel: "LinkedIn",
      },
    ],
    bottomLinks: [
      { label: "Conditions générales", href: "#0" },
      { label: "Politique de confidentialité", href: "#0" },
    ],
    copyright: "© 2024 CR Batiment Pro. Tous droits réservés.",
    address: {
      title: "Notre adresse",
      lines: ["CR Batiment Pro", "55 rue Petit", "75019 Paris"],
    },
    contact: {
      title: "Nous contacter",
      phone: "07 55 81 92 18",
      email: "contact@crbatimentpro.fr",
    },
    hours: {
      title: "Horaires",
      text: "Ouvert 7j/7, 24h/24",
    },
  },
  footerEyebrow: "Contactez-nous",
  footerTitle1: "Prêt à faire appel à nos services ?",
  footerTitle2: "",
  footerSubtitle:
    "Que ce soit pour une urgence ou un projet planifié, notre équipe d'artisans professionnels est là pour vous aider.",
  footerCTALink: "/contact",
  footerCTAButton: "Contactez-nous",

  // Footer Address
  footerAddressTitle: "Notre adresse",
  footerAddress1Title: "Paris XIX",
  footerAddress1Line1: "CR Batiment Pro",
  footerAddress1Line2: "55 rue Petit",
  footerAddress1Line3: "75019 Paris",

  // Footer Contact
  footerContactTitle: "Nous contacter",
  footerPhoneNumber: "07 55 81 92 18",
  footerEmail: "contact@crbatimentpro.fr",

  // Footer Hours
  footerHoursTitle: "Horaires",
  footerHours: "Ouvert 7j/7, 24h/24",

  // Footer Social Links
  footerCopyright: "© 2024 CR Batiment Pro. Tous droits réservés.",
  footerXLink: "https://x.com/crbatimentpro",
  footerFacebookLink: "https://facebook.com/crbatimentpro",
  footerInstagramLink: "https://instagram.com/crbatimentpro",
  footerLinkedInLink: "https://linkedin.com/company/crbatimentpro",
  footerLogo: "/images/cr-batiment-pro-logo.svg",
};
