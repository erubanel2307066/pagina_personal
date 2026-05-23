import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import {
  Home, User, Briefcase, Mail, Layers, ArrowRight,
  MapPin, Send,
  BrainCircuit, Sparkles,
  Bot, Github, Linkedin, Twitter
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for Tailwind classes
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const MeshBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-0 w-full h-full bg-[#020617]"></div>
    <motion.div
      animate={{
        x: [0, 100, 0],
        y: [0, 50, 0],
        scale: [1, 1.2, 1]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 blur-[120px] rounded-full"
    />
    <motion.div
      animate={{
        x: [0, -100, 0],
        y: [0, 100, 0],
        scale: [1, 1.3, 1]
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-600/10 blur-[150px] rounded-full"
    />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 brightness-100"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]"></div>
  </div>
);

const Section = ({ children, className, id }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={cn("py-24 sm:py-32 relative", className)}
  >
    {children}
  </motion.section>
);

const GlassCard = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className={cn(
      "glass-card glass-card-hover group p-8 rounded-[2.5rem] relative overflow-hidden",
      className
    )}
  >
    {/* Subtle Inner Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    {children}
  </motion.div>
);

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'about', label: 'Sobre mí', icon: User },
    { id: 'portfolio', label: 'Proyectos', icon: Briefcase },
    { id: 'contact', label: 'Contacto', icon: Mail }
  ];

  return (
    <nav className={cn(
      "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center p-1.5 transition-all duration-500 rounded-full border",
      isScrolled
        ? "bg-slate-900/60 backdrop-blur-2xl border-slate-800 shadow-2xl w-[90%] sm:w-auto px-6 py-3"
        : "bg-transparent border-transparent w-[95%] sm:w-auto"
    )}>
      <ul className="flex items-center gap-1 sm:gap-2">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeSection === item.id
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              )}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full border border-white/10"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <item.icon size={16} className={cn("relative z-10 transition-colors", activeSection === item.id ? "text-brand-blue" : "")} />
              <span className="relative z-10 hidden sm:block">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// --- Page Sections ---

const HomeSection = ({ setSection }) => {
  return (
    <Section id="home" className="min-h-screen flex items-center pt-32 lg:pt-0">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(37,99,235,0.1)]"
            >
              <Sparkles size={14} className="animate-pulse" />
              IA & Transformación Digital
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-headline font-black text-white leading-[0.95] tracking-tighter"
            >
              Construyendo <br className="hidden sm:block" />
              <span className="text-gradient">experiencias</span> <br className="hidden sm:block" />
              impulsadas por IA.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-400 text-lg sm:text-xl font-light leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Desarrollo plataformas modernas, automatizaciones inteligentes y diseño visual cinematográfico para marcas que buscan el siguiente nivel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => setSection('portfolio')}
                className="premium-button premium-button-primary flex items-center justify-center gap-2 group"
              >
                Ver Proyectos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setSection('about')}
                className="premium-button premium-button-secondary"
              >
                Conóceme
              </button>
            </motion.div>
          </div>

          {/* Right Column - Dashboard Holographic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-brand-violet/20 blur-[100px] rounded-full animate-pulse" />

              {/* Floating Cards Mockup */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 glass-card p-6 rounded-3xl border-white/10 shadow-2xl shadow-brand-blue/20"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center">
                    <BrainCircuit className="text-brand-blue" />
                  </div>
                  <div>
                    <div className="h-2 w-24 bg-slate-700 rounded-full mb-2" />
                    <div className="h-1.5 w-16 bg-slate-800 rounded-full" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-24 w-full bg-slate-900/50 rounded-2xl border border-white/5 overflow-hidden p-4">
                    <div className="flex gap-1 items-end h-full">
                      {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="flex-1 bg-brand-blue/40 rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-8 bg-brand-violet/10 rounded-lg border border-brand-violet/20" />
                    <div className="h-8 bg-brand-cyan/10 rounded-lg border border-brand-cyan/20" />
                    <div className="h-8 bg-white/5 rounded-lg border border-white/10" />
                  </div>
                </div>
              </motion.div>

              {/* Smaller Floating Elements */}
              <motion.div
                animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-12 -right-8 glass-card p-4 rounded-2xl border-brand-violet/30 w-32"
              >
                <Bot className="text-brand-violet mb-2" size={24} />
                <div className="h-1 w-16 bg-brand-violet/20 rounded-full" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-8 -left-8 glass-card p-4 rounded-2xl border-white/10 w-40"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                  <span className="text-[10px] uppercase font-bold text-slate-500">System Ready</span>
                </div>
                <div className="flex gap-1">
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2, repeat: Infinity }} className="h-full w-1/3 bg-brand-blue" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
};

const AboutSection = () => (
  <Section id="about">
    <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
      <div className="grid lg:grid-cols-12 gap-20 items-center">

        {/* Visual Sidebar */}
        <div className="lg:col-span-5 relative group">
          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]"
          >
            <img
              src="/Nueva_foto.png"
              alt="Erubanel Gallo"
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-background via-transparent to-transparent opacity-60" />

            {/* Overlay Info Card */}
            <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-3xl border-white/20 backdrop-blur-2xl">
              <p className="text-white font-bold text-xl mb-1">Erubanel Gallo</p>
              <p className="text-slate-400 text-sm">Founder & Creative Technologist</p>
            </div>
          </motion.div>
          {/* Background decoration */}
          <div className="absolute -inset-8 bg-brand-blue/10 blur-[100px] -z-10 group-hover:bg-brand-violet/10 transition-colors duration-1000" />
        </div>

        {/* Content */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-brand-blue text-sm font-bold uppercase tracking-[0.3em]"
            >
              Trayectoria y Visión
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-6xl font-black text-white tracking-tighter"
            >
              Innovación con <span className="text-gradient">propósito.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 text-slate-300 text-lg font-light leading-relaxed"
          >
            <p>
              Soy desarrollador, creador digital y emprendedor enfocado en tecnología, inteligencia artificial y transformación digital. Mi trabajo fusiona la rigurosidad de la ingeniería con la libertad del diseño cinematográfico.
            </p>
            <p>
              Como fundador de <strong>Código Maestro</strong> y creador de <strong>Costa Chica TV</strong>, lidero proyectos que buscan democratizar el acceso a herramientas digitales avanzadas y automatizaciones inteligentes.
            </p>
            <p>
              Mi misión es clara: construir ecosistemas digitales integrados que no solo funcionen a la perfección, sino que cautiven visualmente.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8">
            {[
              { label: 'IA Tools', value: '15+', icon: BrainCircuit },
              { label: 'Proyectos', value: '50+', icon: Layers },
              { label: 'Impacto', value: 'Global', icon: Sparkles },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="p-6 glass-card rounded-3xl text-center"
              >
                <stat.icon className="mx-auto mb-3 text-brand-blue" size={24} />
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </Section>
);

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Costa Chica TV Streaming',
      cat: 'Medios & Streaming',
      desc: 'Arquitectura para transmisión regional masiva, integrando pautas publicitarias inteligentes y VOD de alta disponibilidad.',
      tech: ['React', 'Node.js', 'Video Cloud'],
      color: 'blue',
      img: '/Logo Costa Chica Reformatedo2.png',
      logo: 'Tv'
    },
    {
      title: 'Sistema Escolar Integral',
      cat: 'Educación IA',
      desc: 'Gestión académica disruptiva que utiliza IA para el seguimiento de alumnos y automatización de reportes docentes.',
      tech: ['Python', 'Supabase', 'Next.js'],
      color: 'violet',
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      logo: 'GraduationCap'
    },
    {
      title: 'Plataforma Electoral',
      cat: 'Sistemas Seguros',
      desc: 'Infraestructura de votación digital con máxima seguridad y transparencia. Auditoría en tiempo real y UI intuitiva.',
      tech: ['React', 'UX/UI', 'High Privacy'],
      color: 'cyan',
      img: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80',
      logo: 'Layers'
    }
  ];

  return (
    <Section id="portfolio">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-black text-white tracking-tighter mb-6"
          >
            Trabajos <span className="text-gradient">Destacados</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Selección exclusiva de soluciones tecnológicas de alto impacto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <GlassCard key={i} delay={i * 0.1} className="p-0">
              <div className="h-64 relative overflow-hidden group/img">
                <div className="absolute inset-0 bg-slate-900/60 z-10 group-hover/img:opacity-0 transition-opacity duration-700" />
                <img
                  src={project.img}
                  alt={project.title}
                  className={cn(
                    "w-full h-full object-cover transform transition-transform duration-1000 group-hover/img:scale-110",
                    project.title.includes('Costa Chica') && "object-contain p-12 bg-slate-900"
                  )}
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10">
                    {project.cat}
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <h4 className="text-2xl font-bold text-white tracking-tight">{project.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-slate-800 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <button className="w-full py-4 text-sm font-bold uppercase tracking-widest text-white border border-white/10 rounded-2xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                  Detalles <ArrowRight size={14} />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

const ContactSection = () => (
  <Section id="contact">
    <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
      <div className="grid lg:grid-cols-12 gap-16 items-start">

        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl sm:text-6xl font-black text-white tracking-tighter">
              Inicia <br />
              una <span className="text-gradient">conversación.</span>
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              ¿Tienes una visión audaz? Hagámosla realidad con tecnología de vanguardia.
            </p>
          </div>

          <div className="space-y-8">
            {[
              { icon: Mail, label: 'Email', value: 'gace860403@gmail.com' },
              { icon: MapPin, label: 'Localización', value: 'Cruz Grande, Gro.' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-blue/10 group-hover:border-brand-blue/30 transition-all">
                  <item.icon className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-[0.2em]">{item.label}</p>
                  <p className="text-white font-medium text-lg">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social connections */}
          <div className="flex gap-4">
            {[Github, Linkedin, Twitter].map((Social, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1, y: -4 }}
                className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:border-brand-violet hover:text-brand-violet transition-colors text-slate-400"
              >
                <Social size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <GlassCard className="p-10 border-white/10">
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Tu Nombre</label>
                  <input type="text" className="w-full bg-black/40 border border-slate-800 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-all text-white" placeholder="Juan Pérez" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Tu Correo</label>
                  <input type="email" className="w-full bg-black/40 border border-slate-800 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-all text-white" placeholder="juan@correo.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Mensaje</label>
                <textarea rows="5" className="w-full bg-black/40 border border-slate-800 rounded-2xl px-6 py-4 focus:border-brand-blue outline-none transition-all text-white resize-none" placeholder="Cuéntame sobre tu proyecto..."></textarea>
              </div>
              <button className="premium-button premium-button-primary w-full flex items-center justify-center gap-3">
                Enviar Vision <Send size={18} />
              </button>
            </form>
          </GlassCard>
        </div>

      </div>
    </div>
  </Section>
);

// --- Main App ---

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Section scroll tracking
    const sections = ['home', 'about', 'portfolio', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, { offset: 0 });
    }
  };

  return (
    <div className="relative">
      <MeshBackground />
      <div className="noise-texture" />

      <Navbar activeSection={activeSection} setActiveSection={handleNavClick} />

      <main className="relative z-10 selection:bg-brand-violet/50 selection:text-white">
        <HomeSection setSection={handleNavClick} />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      <footer className="py-12 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2">
                <img src="/Logo Eru negro.png" alt="Logo" className="w-full h-full object-contain invert" />
              </div>
              <p className="text-[10px] uppercase font-black tracking-[0.4em] text-slate-500">
                © 2026 Erubanel Gallo. Todos los derechos reservados.
              </p>
            </div>

            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest pl-2">
                Status: Disponible para proyectos
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles for Noise and Mesh */}
      <style dangerouslySetInnerHTML={{
        __html: `
        ::selection {
          background: #7c3aed33;
          color: #fff;
        }
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #020617;
        }
        ::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 100px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }
        `
      }} />
    </div>
  );
}
