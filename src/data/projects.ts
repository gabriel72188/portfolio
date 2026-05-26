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
      title: 'BOT DE TRADING POLYMARKET',
      short: 'Bot para detectar ineficiencias estadisticas en mercados deportivos de prediccion.',
      long: 'Bot automatizado para detectar ineficiencias estadisticas en mercados de prediccion deportivos. Usa Python, The Odds API y Groq (Llama 3.3-70b) para confirmacion con IA. Valida estrategias en modo paper trading antes de operar con capital real.',
    },
    en: {
      title: 'POLYMARKET TRADING BOT',
      short: 'Bot to detect statistical inefficiencies in sports prediction markets.',
      long: 'Automated bot to detect statistical inefficiencies in sports prediction markets. Uses Python, The Odds API and Groq for AI confirmation. Validates strategies in paper trading mode before deploying real capital.',
    },
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80',
    tech: ['Python', 'Groq API', 'The Odds API', 'FastAPI'],
    demo: '#',
    git: '#',
    n: '01',
  },
  {
    es: {
      title: 'PORTFOLIO PERSONAL',
      short: 'Portfolio bilingue con Astro, carrusel infinito y diseno monocromatico.',
      long: 'Portfolio web bilingue desarrollado con Astro. Diseno monocromatico minimalista con soporte ES/EN, carrusel infinito de proyectos y formulario de contacto funcional.',
    },
    en: {
      title: 'PERSONAL PORTFOLIO',
      short: 'Bilingual portfolio with Astro, infinite carousel and monochromatic design.',
      long: 'Bilingual web portfolio built with Astro. Minimalist monochromatic design with ES/EN language switching, infinite project carousel and functional contact form.',
    },
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80',
    tech: ['Astro', 'TypeScript', 'CSS'],
    demo: '#',
    git: '#',
    n: '02',
  },
  {
    es: {
      title: 'DASHBOARD DE MERCADOS',
      short: 'Panel de visualizacion de datos financieros en tiempo real con Chart.js.',
      long: 'Panel de control para visualizar datos de mercados financieros en tiempo real. Incluye graficos interactivos con Chart.js, alertas configurables y seguimiento de ETPs apalancados como el 3SIL.',
    },
    en: {
      title: 'MARKETS DASHBOARD',
      short: 'Real-time financial market data dashboard with Chart.js.',
      long: 'Control panel to visualize real-time financial market data. Includes interactive charts with Chart.js, configurable alerts and tracking of leveraged ETPs such as 3SIL.',
    },
    img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=900&q=80',
    tech: ['React', 'Chart.js', 'Node.js', 'WebSocket'],
    demo: '#',
    git: '#',
    n: '03',
  },
  {
    es: {
      title: 'APLICACION FULL STACK',
      short: 'App completa con autenticacion JWT, usuarios y panel de administracion.',
      long: 'Aplicacion web completa con autenticacion JWT, gestion de usuarios y panel de administracion. Backend RESTful con Express y base de datos PostgreSQL. Desplegada en VPS con PM2.',
    },
    en: {
      title: 'FULL STACK APPLICATION',
      short: 'Complete app with JWT auth, user management and admin panel.',
      long: 'Complete web application with JWT authentication, user management and admin panel. RESTful backend with Express and PostgreSQL. Deployed on VPS with PM2.',
    },
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80',
    tech: ['React', 'Express', 'PostgreSQL', 'JWT'],
    demo: '#',
    git: '#',
    n: '04',
  },
];

export const skills = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript',
  'React', 'Astro', 'Node.js', 'Python',
  'Git', 'SQL', 'REST APIs', 'Tailwind',
];
