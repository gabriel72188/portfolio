export interface Project {
  es: { title: string; short: string; long: string };
  en: { title: string; short: string; long: string };
  img: string;
  tech: string[];
  demo: string;
  git: string;
  n: string;
}

export const projects: Project[] = [
  {
    es: {
      title: 'INVENTAPP',
      short: 'Plataforma de gestión de inventario y POS con arquitectura de microservicios y motor de análisis avanzado.',
      long: 'Plataforma integral de gestión de inventario y punto de venta (POS) diseñada con una arquitectura de microservicios escalable. El sistema gestiona almacenes, proveedores, logística y roles de seguridad, destacando por su motor de análisis avanzado que procesa listas de materiales (BOM). En lugar de solo contar existencias, calcula la capacidad real de producción final basándose en las materias primas disponibles, previniendo roturas de stock y optimizando las decisiones de compra mediante el cruce de datos y métricas de rendimiento.',
    },
    en: {
      title: 'INVENTAPP',
      short: 'Inventory management and POS platform with microservices architecture and advanced analytics engine.',
      long: 'Comprehensive inventory management and point-of-sale (POS) platform designed with a scalable microservices architecture. The system manages warehouses, suppliers, logistics, and security roles, featuring an advanced analytics engine that processes bills of materials (BOM). Instead of just counting stock, it calculates the real final production capacity based on available raw materials, preventing stockouts and optimizing purchasing decisions through data crossing and performance metrics.',
    },
    img: '/inventapp2.png',
    tech: ['TypeScript', 'Nuxt.js', 'NestJS', 'Microservicios', 'NATS', 'Prisma ORM', 'Docker', 'Kubernetes'],
    demo: 'https://inventapp.store',
    git: 'https://github.com/JorgeAsca/Ivent_app.git',
    n: '01',
  },
  {
    es: {
      title: 'NOMADS GARDEN',
      short: 'Plataforma web ultrarrápida con arquitectura Headless CMS (WordPress) y enfoque estricto en SEO y WPO.',
      long: 'Plataforma web moderna y ultrarrápida, implementa una arquitectura de Headless CMS utilizando WordPress en el backend para una gestión de contenidos dinámica y totalmente desacoplada. Desarrollada para presentar un catálogo de servicios, gastronomía y experiencias de ocio. El frontend está diseñado con un enfoque estricto en rendimiento (WPO) y SEO, destacando por su estructura modular y soporte multilingüe nativo para captar de forma eficiente a un público internacional.',
    },
    en: {
      title: 'NOMADS GARDEN',
      short: 'Ultra-fast web platform with Headless CMS architecture (WordPress) and strict focus on SEO and WPO.',
      long: 'Modern and ultra-fast web platform implementing a Headless CMS architecture using WordPress on the backend for dynamic and fully decoupled content management. Developed to present a catalog of services, gastronomy, and leisure experiences. The frontend is designed with a strict focus on performance (WPO) and SEO, standing out for its modular structure and native multilingual support to efficiently attract an international audience.',
    },
    img: '/nomadsgarden.png',
    tech: ['Astro', 'WordPress (Headless)', 'Tailwind CSS', 'TypeScript', 'i18n', 'Docker'],
    demo: 'https://www.nomadsgarden.com/',
    git: 'https://github.com/gabriel72188/Nomas-garden.git',
    n: '02',
  },
  {
    es: {
      title: 'PELÍCULAS GRATIS',
      short: 'SPA de películas desarrollada con React y Vite, consumiendo APIs RESTful.',
      long: 'Aplicación cliente (Single Page Application) desarrollada bajo una arquitectura basada en componentes funcionales de React, optimizada con Vite para un HMR (Hot Module Replacement) rápido y un bundling eficiente en producción. La aplicación consume servicios RESTful para la hidratación de datos, gestionando el estado de la interfaz para la manipulación del DOM virtual y ofreciendo una navegación cliente-servidor sin recargas.',
    },
    en: {
      title: 'FREE MOVIES',
      short: 'Movie SPA developed with React and Vite, consuming RESTful APIs.',
      long: 'Client application (Single Page Application) developed under an architecture based on functional React components, optimized with Vite for fast HMR (Hot Module Replacement) and efficient production bundling. The application consumes RESTful services for data hydration, managing the interface state for virtual DOM manipulation and offering client-server navigation without reloads.',
    },
    img: '/movies.png',
    tech: ['React', 'Vite', 'Tailwind CSS', 'PostCSS', 'ESLint', 'JavaScript'],
    demo: 'https://movies.gabrielmq.com/',
    git: 'https://github.com/gabriel72188/peliculas.git',
    n: '03',
  },
  {
    es: {
      title: 'PICKLEBALL ÁGUILAS',
      short: 'Web de alto rendimiento (SSG) para club deportivo con i18n y Headless CMS basado en Git.',
      long: 'Aplicación web estática (SSG) de alto rendimiento desarrollada para la gestión, promoción y captación internacional de un club deportivo. Construida sobre una arquitectura modular que integra generación de sitios estáticos, un sistema de internacionalización (i18n) a nivel de rutas, un Headless CMS basado en Git para la administración de contenidos, y un micro-backend para la persistencia de datos transaccionales.',
    },
    en: {
      title: 'PICKLEBALL AGUILAS',
      short: 'High-performance SSG web for a sports club with i18n and Git-based Headless CMS.',
      long: 'High-performance static web application (SSG) developed for the management, promotion, and international recruitment of a sports club. Built on a modular architecture integrating static site generation, an internationalization (i18n) system at the route level, a Git-based Headless CMS for content administration, and a micro-backend for transactional data persistence.',
    },
    img: '/pickleball.png',
    tech: ['Astro', 'Tailwind CSS', 'Git CMS', 'PHP', 'GitHub Actions', 'i18n'],
    demo: 'https://www.pickleballaguilas.club/es/',
    git: 'https://github.com/gabriel72188/pickleball-aguilas.git',
    n: '04',
  },
];

export const skills = [
  'JavaScript', 'TypeScript', 'React', 'Angular',
  'Astro', 'Nuxt / Vue', 'Node.js', 'NestJS',
  'Python', 'Git', 'WordPress', 'SQL', 'REST APIs',
  'Tailwind', 'Docker', 'Kubernetes', 'CI/CD',
  'TypeOrm', 'Prisma ORM'
];
