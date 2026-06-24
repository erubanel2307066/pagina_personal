import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import {
  ArrowRight,
  Bot,
  Briefcase,
  CheckCircle2,
  Github,
  Home,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  Send,
  Sparkles,
  User,
  Zap,
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { id: 'home', label: 'Inicio', icon: Home },
  { id: 'about', label: 'Perfil', icon: User },
  { id: 'portfolio', label: 'Proyectos', icon: Briefcase },
  { id: 'contact', label: 'Contacto', icon: Mail },
];

const services = [
  'Automatización con IA',
  'Interfaces web premium',
  'Sistemas internos',
  'Contenido y streaming',
];

const stats = [
  { value: '15+', label: 'Herramientas IA' },
  { value: '50+', label: 'Proyectos digitales' },
  { value: '24/7', label: 'Mentalidad operativa' },
];

const projects = [
  {
    title: 'Código Maestro',
    cat: 'Educación digital',
    desc: 'Formación y herramientas para aprender tecnología con una experiencia clara, práctica y visual.',
    tech: ['IA', 'Academia', 'Contenido'],
    img: '/Codigo Maestro positivo.png',
  },
  {
    title: 'Costa Chica TV',
    cat: 'Medios & Streaming',
    desc: 'Presencia digital para medios regionales con identidad fuerte, contenido organizado y enfoque multiplataforma.',
    tech: ['Streaming', 'Branding', 'Video'],
    img: '/Logo Costa Chica Reformatedo2.png',
  },
  {
    title: 'Sistemas a la medida',
    cat: 'Automatización',
    desc: 'Flujos internos, dashboards y procesos conectados para equipos que quieren operar con menos fricción.',
    tech: ['React', 'Node', 'Workflows'],
    img: '/foto.png',
  },
];

const Background = () => (
  <div className="site-background" aria-hidden="true">
    <div className="site-grid" />
    <div className="site-wash" />
  </div>
);

const Section = ({ children, className, id }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    className={cn('section-space relative', className)}
  >
    {children}
  </motion.section>
);

const Navbar = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed left-1/2 top-4 z-50 w-[calc(100%-24px)] max-w-4xl -translate-x-1/2 transition-all duration-300',
        isScrolled ? 'nav-shell nav-shell-scrolled' : 'nav-shell'
      )}
      aria-label="Navegación principal"
    >
      <button
        onClick={() => onNavigate('home')}
        className="brand-mark"
        aria-label="Ir al inicio"
      >
        <img src="/Logo Eru negro.png" alt="" className="h-7 w-7 object-contain invert" />
        <span>Erubanel Gallo</span>
      </button>

      <ul className="flex items-center gap-1">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onNavigate(item.id)}
              className={cn('nav-link', activeSection === item.id && 'nav-link-active')}
              aria-current={activeSection === item.id ? 'page' : undefined}
              title={item.label}
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const HomeSection = ({ onNavigate }) => (
  <Section id="home" className="min-h-screen pt-28 sm:pt-32">
    <div className="container-wrap">
      <div className="hero-layout">
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <Sparkles size={15} />
            IA, diseño y sistemas digitales
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05, delayChildren: 0.1 },
              },
            }}
            className="hero-title flex flex-wrap gap-[0.25em]"
          >
            {"Construyo experiencias digitales que se ven bien y trabajan mejor.".split(' ').map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 14, stiffness: 100 } }
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-text"
          >
            Desarrollo plataformas modernas, automatizaciones inteligentes y contenido visual para marcas, escuelas y medios que quieren operar con más claridad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hero-actions"
          >
            <motion.button 
              onClick={() => onNavigate('portfolio')} 
              className="button-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver proyectos
              <ArrowRight size={18} />
            </motion.button>
            <motion.button 
              onClick={() => onNavigate('contact')} 
              className="button-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Hablemos
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="service-strip"
          >
            {services.map((service) => (
              <motion.span 
                key={service}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.15 },
            scale: { duration: 0.8, delay: 0.15 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="hero-panel"
        >
          <img src="/Nueva_foto.png" alt="Erubanel Gallo" className="hero-photo" />
          <div className="hero-panel-info">
            <div>
              <p className="panel-kicker">Creative Technologist</p>
              <h2>Erubanel Gallo</h2>
            </div>
            <div className="availability">
              <span />
              Disponible
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </Section>
);

const AboutSection = () => (
  <Section id="about">
    <div className="container-wrap">
      <div className="section-heading">
        <span className="eyebrow">Perfil profesional</span>
        <h2>Una mezcla de ingeniería, comunicación y criterio visual.</h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            Soy desarrollador, creador digital y emprendedor enfocado en tecnología, inteligencia artificial y transformación digital. Mi trabajo une la estructura de la ingeniería con una dirección visual cuidada.
          </p>
          <p>
            Como fundador de <strong>Código Maestro</strong> y creador de <strong>Costa Chica TV</strong>, diseño proyectos que hacen más accesible la tecnología y convierten ideas complejas en experiencias fáciles de usar.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="metric-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="capability-grid">
        {[
          { icon: Bot, title: 'IA aplicada', text: 'Automatizaciones y asistentes que reducen trabajo repetitivo.' },
          { icon: Rocket, title: 'Producto digital', text: 'Interfaces rápidas, limpias y pensadas para conversión.' },
          { icon: Zap, title: 'Operación', text: 'Sistemas que conectan datos, equipos y decisiones.' },
        ].map((item) => (
          <article className="feature-card" key={item.title}>
            <item.icon size={22} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  </Section>
);

const PortfolioSection = () => (
  <Section id="portfolio">
    <div className="container-wrap">
      <div className="section-heading center">
        <span className="eyebrow">Trabajo destacado</span>
        <h2>Proyectos con identidad clara y utilidad real.</h2>
        <p>La UI debe comunicar confianza antes de pedirle al usuario que haga clic.</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="project-card"
          >
            <div className="project-image">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project-body">
              <span>{project.cat}</span>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="tech-list">
                {project.tech.map((tech) => (
                  <em key={tech}>{tech}</em>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </Section>
);

const ContactSection = () => (
  <Section id="contact">
    <div className="container-wrap">
      <div className="contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">Contacto</span>
          <h2>Convirtamos una buena idea en una experiencia lista para usarse.</h2>
          <p>
            Si necesitas una web, automatización, sistema interno o una estrategia digital más clara, podemos construirlo con una base sólida desde el primer paso.
          </p>

          <div className="contact-list">
            <a href="mailto:gace860403@gmail.com">
              <Mail size={18} />
              <span>gace860403@gmail.com</span>
            </a>
            <div>
              <MapPin size={18} />
              <span>Cruz Grande, Guerrero</span>
            </div>
          </div>

          <div className="social-list" aria-label="Redes sociales">
            <a href="https://github.com/erubanel2307066" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={19} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={19} /></a>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-grid">
            <label>
              <span>Nombre</span>
              <input type="text" placeholder="Tu nombre" />
            </label>
            <label>
              <span>Correo</span>
              <input type="email" placeholder="tu@correo.com" />
            </label>
          </div>
          <label>
            <span>Mensaje</span>
            <textarea rows="5" placeholder="Cuéntame qué quieres construir..." />
          </label>
          <button type="submit" className="button-primary full">
            Enviar mensaje
            <Send size={18} />
          </button>
          <p className="form-note">
            <CheckCircle2 size={16} />
            Respuesta directa para proyectos web, IA y automatización.
          </p>
        </form>
      </div>
    </div>
  </Section>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (!element) continue;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(item.id);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, []);

  const handleNavigate = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, { offset: 0 });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="relative z-10">
        <HomeSection onNavigate={handleNavigate} />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      <footer className="footer">
        <div className="container-wrap footer-inner">
          <p>© 2026 Erubanel Gallo. Todos los derechos reservados.</p>
          <span>Disponible para proyectos selectos</span>
        </div>
      </footer>
    </div>
  );
}
