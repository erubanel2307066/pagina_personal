import { Home, User, Briefcase, Mail } from 'lucide-react';

export const navItems = [
  { id: 'home', label: 'Inicio', icon: Home },
  { id: 'about', label: 'Perfil', icon: User },
  { id: 'portfolio', label: 'Proyectos', icon: Briefcase },
  { id: 'contact', label: 'Contacto', icon: Mail },
];

export const services = [
  'Automatización con IA',
  'Interfaces web premium',
  'Sistemas internos',
  'Contenido y streaming',
];

export const stats = [
  { value: '15+', label: 'Herramientas IA' },
  { value: '50+', label: 'Proyectos digitales' },
  { value: '24/7', label: 'Mentalidad operativa' },
];

export const projects = [
  {
    title: 'Código Maestro',
    cat: 'Educación digital',
    desc: 'Formación y herramientas para aprender tecnología con una experiencia clara, práctica y visual.',
    tech: ['IA', 'Academia', 'Contenido'],
    img: '/Codigo Maestro positivo.png',
    category: 'educacion',
  },
  {
    title: 'Costa Chica TV',
    cat: 'Medios & Streaming',
    desc: 'Presencia digital para medios regionales con identidad fuerte, contenido organizado y enfoque multiplataforma.',
    tech: ['Streaming', 'Branding', 'Video'],
    img: '/Logo Costa Chica Reformatedo2.png',
    category: 'media',
  },
  {
    title: 'Sistemas a la medida',
    cat: 'Automatización',
    desc: 'Flujos internos, dashboards y procesos conectados para equipos que quieren operar con menos fricción.',
    tech: ['React', 'Node', 'Workflows'],
    img: '/foto.png',
    category: 'automatizacion',
  },
];

export const projectFilterOptions = [
  { id: 'all', label: 'Todos' },
  { id: 'educacion', label: 'Educación' },
  { id: 'media', label: 'Medios' },
  { id: 'automatizacion', label: 'Automatización' },
];

export const skills = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Python', level: 75, category: 'backend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Figma', level: 70, category: 'design' },
  { name: 'IA / ML', level: 75, category: 'ai' },
  { name: 'Automatización', level: 85, category: 'ai' },
  { name: 'Streaming', level: 80, category: 'media' },
  { name: 'Branding', level: 70, category: 'design' },
];

export const testimonials = [
  {
    text: 'Transformó nuestra presencia digital por completo. El sitio no solo se ve profesional, sino que nuestros usuarios realmente lo disfrutan usar.',
    name: 'Cliente Corporativo',
    role: 'Proyecto de automatización',
  },
  {
    text: 'Trabajar con Erubanel es entender que la tecnología puede ser clara, útil y visualmente impactante al mismo tiempo.',
    name: 'Socio Estratégico',
    role: 'Costa Chica TV',
  },
  {
    text: 'La plataforma educativa superó todas nuestras expectativas. La navegación es intuitiva y el diseño mantiene a los estudiantes enfocados.',
    name: 'Equipo Academia',
    role: 'Código Maestro',
  },
];

export const timeline = [
  {
    year: '2024',
    title: 'Fundación Código Maestro',
    desc: 'Creación de plataforma educativa de tecnología con enfoque práctico y accesible.',
  },
  {
    year: '2023',
    title: 'Lanzamiento Costa Chica TV',
    desc: 'Medio regional con presencia multiplataforma, streaming y contenido digital.',
  },
  {
    year: '2022',
    title: 'Automatización empresarial',
    desc: 'Desarrollo de sistemas internos y dashboards para optimización operativa.',
  },
  {
    year: '2021',
    title: 'Inicio en desarrollo web',
    desc: 'Primeros proyectos como freelancer en diseño y desarrollo de interfaces.',
  },
];

export const clients = [
  { name: 'Código Maestro', color: 'text-brand-cyan' },
  { name: 'Costa Chica TV', color: 'text-brand-blue' },
  { name: 'Sistemas a la medida', color: 'text-brand-green' },
  { name: 'Freelance', color: 'text-brand-amber' },
];

export const blogPosts = [
  {
    title: 'Por qué la UI debe comunicar antes que decorar',
    cat: 'Diseño',
    excerpt: 'El diseño de interfaces no es solo estética. Cada elemento debe tener un propósito funcional.',
    date: 'Mar 2026',
  },
  {
    title: 'Automatización con IA: Lo que aprendí',
    cat: 'Tecnología',
    excerpt: 'Cómo integrar asistentes inteligentes en flujos de trabajo reales sin complicar lo simple.',
    date: 'Feb 2026',
  },
  {
    title: 'De la idea al producto digital',
    cat: 'Producto',
    excerpt: 'El proceso que sigo para convertir un concepto en una experiencia funcional y bien diseñada.',
    date: 'Ene 2026',
  },
];

export const pricingPlans = [
  {
    name: 'Web Rápida',
    price: 'Desde $X',
    desc: 'Landing page o sitio personal con diseño premium y optimización básica.',
    features: ['1 página', 'Diseño responsive', 'Animaciones UI', 'Hosting incluido'],
    featured: false,
  },
  {
    name: 'Plataforma Profesional',
    price: 'Desde $XX',
    desc: 'Sistema completo con múltiples secciones, panel admin y automatizaciones.',
    features: ['Hasta 5 páginas', 'Panel de gestión', 'Integración IA', 'SEO avanzado', 'Soporte 30 días'],
    featured: true,
  },
  {
    name: 'Sistema a la medida',
    price: 'Cotizar',
    desc: 'Solución enterprise con flujos personalizados, dashboards y automatización operativa.',
    features: ['Arquitectura escalable', 'APIs y conexiones', 'Dashboard en vivo', 'Automatización total', 'Soporte prioritario'],
    featured: false,
  },
];
