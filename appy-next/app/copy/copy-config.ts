export const copyConfig = {
  // Header
  header: {
    logo: {
      src: "/images/logo.svg",
      alt: "Appy logo",
    },
    navItems: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact", href: "/contact" },
    ],
  },

  // Footer
  footer: {
    logo: {
      src: "/images/logo.svg",
      alt: "Appy logo",
    },
    copyright: "© 2023 Appy. All rights reserved.",
    socialLinks: [
      { platform: "Twitter", href: "#" },
      { platform: "GitHub", href: "#" },
      { platform: "Facebook", href: "#" },
      { platform: "Instagram", href: "#" },
      { platform: "LinkedIn", href: "#" },
    ],
  },

  // Home page
  home: {
    hero: {
      title: "Your website, reimagined",
      subtitle:
        "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.",
      cta: {
        label: "HELLO code",
        href: "#",
      },
      steps: [
        { description: "Lorem ipsum dolor amet sit consect adipiscing." },
        { description: "Excepteur sint occaecat cupidatat non proident." },
        { description: "Lorem ipsum is placeholder text commonly." },
      ],
    },
    featuresBlocks: {
      title: "Put clarity at the center of your website",
      features: [
        {
          title: "Simpler Sharing",
          description: "Lorem ipsum dolor amet sit consect adipiscing.",
          icon: "",

          href: "#0",
          color: {
            from: "teal-500",
            to: "teal-400",
            darkTo: "teal-500",
          },
        },
        {
          title: "Intuitive Interface",
          description: "Excepteur sint occaecat cupidatat non proident.",
          icon: "",
          href: "#0",
          color: {
            from: "purple-500",
            to: "purple-400",
            darkTo: "purple-500",
          },
        },
        {
          title: "Powerful Integrations",
          description: "Lorem ipsum is placeholder text commonly used.",
          icon: "",

          href: "#0",
          color: {
            from: "indigo-500",
            to: "indigo-400",
            darkTo: "indigo-500",
          },
        },
        {
          title: "Advanced Security",
          description: "Duis aute irure dolor in reprehenderit in voluptate.",
          icon: "",
          href: "#0",
          color: {
            from: "pink-500",
            to: "pink-400",
            darkTo: "pink-500",
          },
        },
      ],
    },
    process: {
      title: "Built exclusively for you",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.",
      steps: [
        {
          number: 1,
          title: "Apply for a product",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          image: {
            src: "/images/mockup-image-01.jpg",
            alt: "App screen 01",
          },
        },
        {
          number: 2,
          title: "Complete the application",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          image: {
            src: "/images/mockup-image-02.jpg",
            alt: "App screen 02",
          },
        },
        {
          number: 3,
          title: "Get approved",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          image: {
            src: "/images/mockup-image-03.jpg",
            alt: "App screen 03",
          },
        },
      ],
    },
    testimonials: {
      title: "Don't take our word for it",
      subtitle:
        "Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.",
      items: [
        {
          quote:
            "Appy is a game-changer for our business. The ease of use and powerful features have significantly improved our workflow.",
          name: "Alexandra Smith",
          role: "Founder",
          company: "Acme Inc.",
          image: {
            src: "/images/testimonial-01.jpg",
            alt: "Testimonial 01",
          },
        },
        {
          quote:
            "We've seen a 50% increase in productivity since implementing Appy. It's become an essential tool for our team.",
          name: "Michael Johnson",
          role: "CTO",
          company: "TechCorp",
          image: {
            src: "/images/testimonial-02.jpg",
            alt: "Testimonial 02",
          },
        },
        {
          quote:
            "The customer support at Appy is outstanding. They're always quick to respond and go above and beyond to help.",
          name: "Emily Davis",
          role: "Marketing Manager",
          company: "GrowthCo",
          image: {
            src: "/images/testimonial-03.jpg",
            alt: "Testimonial 03",
          },
        },
      ],
    },
    cta: {
      title: "Ready to get started?",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente.",
      buttonText: "Get started",
      buttonLink: "/contact",
    },
    // Add more sections as needed
  },

  // About page
  about: {
    // Add content for the about page
  },

  // Blog page
  blog: {
    // Add content for the blog page
  },

  // Testimonials page
  testimonials: {
    // Add content for the testimonials page
  },

  // Contact page
  contact: {
    // Add content for the contact page
  },
};
