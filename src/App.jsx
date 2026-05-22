import React, { useState, useEffect } from 'react';
import {
  Home, User, Briefcase, Mail, Layers, ArrowRight,
  MapPin, Send, ExternalLink, Code, Tv,
  GraduationCap, BrainCircuit, Sparkles, MonitorSmartphone,
  Palette, Bot, Database, Terminal, ChevronRight, Menu, X
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`transition-all duration-1000 transform ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const HomeSection = ({ setSection }) => (
  <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#030305] pt-20 lg:pt-0">
    <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-purple-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none animate-pulse"></div>
    <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl">

      <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
        <FadeIn delay={100}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-md mb-8 hover:border-purple-500/50 transition-colors mx-auto lg:mx-0">
            <Sparkles size={16} className="text-purple-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-slate-300 tracking-wide uppercase">
              Transformación digital impulsada por IA
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-sans tracking-tighter mb-6 leading-[1.1] text-white">
            Ingeniería, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Educación</span> <br className="hidden sm:block" />& Visión Digital.
          </h1>
        </FadeIn>

        <FadeIn delay={500}>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl mb-12 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
            Soy <strong className="text-white font-medium">Erubanel Gallo Casiano</strong>. Desarrollo ecosistemas web, automatizaciones inteligentes y contenido visual para empresas y docentes.
          </p>
        </FadeIn>

        <FadeIn delay={700}>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <button
              onClick={() => setSection('about')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-slate-200 rounded-full font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Conóceme más
            </button>
            <button
              onClick={() => setSection('portfolio')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 hover:border-purple-500 text-white rounded-full font-bold uppercase tracking-wider transition-all duration-300 hover:bg-slate-800/50"
            >
              Ver Proyectos
            </button>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={400} className="flex-1 flex justify-center order-1 lg:order-2">
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
          <div className="absolute inset-0 border border-purple-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute inset-4 border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

          <div className="absolute inset-8 overflow-hidden rounded-full border-4 border-slate-800/50 backdrop-blur-sm shadow-[0_0_50px_rgba(168,85,247,0.2)]">
            <img
              src="/foto.png"
              alt="Erubanel Gallo Casiano"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
            />
          </div>

          <div className="absolute -top-4 -right-4 bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-slate-700 shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
            <BrainCircuit className="text-purple-400" size={24} />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border border-slate-700 shadow-xl animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
            <Code className="text-blue-400" size={24} />
          </div>
        </div>
      </FadeIn>
    </div>
  </div>
);

const AboutSection = () => (
  <div className="min-h-screen py-24 text-white bg-[#030305] relative overflow-hidden flex items-center">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-purple-900/5 blur-[150px] rounded-full pointer-events-none"></div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      <div className="flex flex-col lg:grid lg:grid-cols-12 items-center gap-12 lg:gap-16">

        {/* Imagen Section */}
        <FadeIn delay={200} className="lg:col-span-5 w-full">
          <div className="relative group max-w-md mx-auto lg:max-w-none">
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
              <img
                src="/Retrato serio con fondo gris.png"
                alt="Erubanel Gallo Casiano - Retrato"
                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105 aspect-[4/5] lg:aspect-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </FadeIn>

        {/* Texto Section */}
        <div className="lg:col-span-7 space-y-8 lg:pr-16">
          <FadeIn>
            <div className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Trayectoria y Visión
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">mí</span>
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="space-y-6 text-slate-300 text-lg sm:text-xl font-light leading-relaxed">
              <p>
                Soy desarrollador, creador digital y emprendedor enfocado en tecnología, inteligencia artificial y transformación digital. Fundador de <strong>Código Maestro</strong> y creador de la marca personal <strong>Erubanel Gallo Casiano</strong>, donde combino programación, automatización, diseño visual y estrategias digitales para crear proyectos modernos e innovadores.
              </p>
              <p>
                También soy creador de <strong>Costa Chica TV</strong>, una plataforma enfocada en contenido multimedia, comunicación digital y cobertura de eventos.
              </p>
              <p>
                Mi trabajo se centra en desarrollar soluciones tecnológicas, experiencias digitales y proyectos impulsados por inteligencia artificial, siempre buscando unir creatividad, innovación y alto impacto visual.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6">
              <div className="p-5 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-purple-500/30 transition-colors">
                <p className="text-3xl font-black text-white mb-1 tracking-tighter">IA</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Enfoque Principal</p>
              </div>
              <div className="p-5 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-blue-500/30 transition-colors">
                <p className="text-3xl font-black text-white mb-1 tracking-tighter">Dev</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Arquitectura</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  </div>
);

const EcosystemSection = () => (
  <div className="min-h-screen py-24 text-white bg-[#030305] relative overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

      <FadeIn>
        <div className="text-center mb-16 sm:mb-24 pt-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">Arquitectura de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Mi Marca</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            No ofrezco servicios aislados. He construido un ecosistema digital integrado diseñado para educar, comunicar y automatizar.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Pilar 1: Educación */}
        <FadeIn delay={200}>
          <div className="bg-[#0a0a0f] border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 group relative overflow-hidden h-full flex flex-col hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-bl-full blur-3xl group-hover:bg-blue-600/20 transition-colors"></div>
            <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center p-2 mb-8 group-hover:scale-110 transition-transform duration-500 overflow-hidden border border-slate-700/50">
              <img src="/Codigo Maestro positivo.png" alt="Código Maestro Logo" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Código Maestro</h3>
            <p className="text-blue-400 font-medium text-xs mb-6 uppercase tracking-widest">Línea de Educación</p>
            <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
              Academia y comunidad enfocada en capacitar a docentes y profesionales en el uso de IA y herramientas tecnológicas.
            </p>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li className="flex items-center gap-3"><ChevronRight size={16} className="text-blue-500" /> Cursos de Tecnología & IA</li>
              <li className="flex items-center gap-3"><ChevronRight size={16} className="text-blue-500" /> Mentorías Personalizadas</li>
              <li className="flex items-center gap-3"><ChevronRight size={16} className="text-blue-500" /> Comunidad Privada</li>
            </ul>
          </div>
        </FadeIn>

        {/* Pilar 2: Agencia Creativa */}
        <FadeIn delay={400}>
          <div className="bg-[#0a0a0f] border border-slate-800 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 group relative overflow-hidden h-full flex flex-col lg:-translate-y-4 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/10 rounded-bl-full blur-3xl group-hover:bg-purple-600/20 transition-colors"></div>
            <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center p-2 mb-8 group-hover:scale-110 transition-transform duration-500 overflow-hidden border border-slate-700/50">
              <img src="/Logo Costa Chica Reformatedo2.png" alt="Costa Chica TV Logo" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Costa Chica TV</h3>
            <p className="text-purple-400 font-medium text-xs mb-6 uppercase tracking-widest">Agencia & Medios</p>
            <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
              Dirección de medios, producción de contenido audiovisual y estrategias de marketing digital para impacto regional.
            </p>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li className="flex items-center gap-3"><ChevronRight size={16} className="text-purple-500" /> Producción Audiovisual</li>
              <li className="flex items-center gap-3"><ChevronRight size={16} className="text-purple-500" /> Identidad Visual & Branding</li>
              <li className="flex items-center gap-3"><ChevronRight size={16} className="text-purple-500" /> Publicidad Digital</li>
            </ul>
          </div>
        </FadeIn>

        {/* Pilar 3: Tecnología */}
        <FadeIn delay={600}>
          <div className="bg-[#0a0a0f] border border-slate-800 rounded-3xl p-8 hover:border-pink-500/50 transition-all duration-500 group relative overflow-hidden h-full flex flex-col hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-40 h-40 bg-pink-600/10 rounded-bl-full blur-3xl group-hover:bg-pink-600/20 transition-colors"></div>
            <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center p-2 mb-8 group-hover:scale-110 transition-transform duration-500 overflow-hidden border border-slate-700/50">
              <img src="/Logo Eru negro.png" alt="EG Labs Logo" className="w-full h-full object-contain invert brightness-200" />
            </div>
            <h3 className="text-2xl font-bold mb-2">EG Labs</h3>
            <p className="text-pink-400 font-medium text-xs mb-6 uppercase tracking-widest">Desarrollo & IA</p>
            <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
              Laboratorio de software. Creación de aplicaciones escalables, automatizaciones y soluciones impulsadas por Inteligencia Artificial.
            </p>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li className="flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> Sistemas Web Full-Stack</li>
              <li className="flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> Automatizaciones IA & Bots</li>
              <li className="flex items-center gap-3"><ChevronRight size={16} className="text-pink-500" /> Dashboards (React + Supabase)</li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    { icon: <MonitorSmartphone size={28} />, title: 'Desarrollo Web', color: 'blue', desc: 'Sistemas personalizados construidos con React, Flask y Supabase. Paneles administrativos, apps educativas y plataformas a medida.' },
    { icon: <Bot size={28} />, title: 'IA para Negocios', color: 'purple', desc: 'Implementación de IA para optimizar procesos. Bots de atención al cliente, automatización de tareas y Prompt Engineering.' },
    { icon: <Palette size={28} />, title: 'Diseño y Branding', color: 'pink', desc: 'Dirección de arte premium. Flyers cinematográficos, creación de identidad visual e integración de IA en la producción visual.' },
    { icon: <GraduationCap size={28} />, title: 'Mentorías', color: 'cyan', desc: 'Formación especializada. Capacitación en tecnología, herramientas digitales e IA aplicada para docentes y equipos corporativos.' },
  ];

  const getColorClass = (color) => {
    const map = {
      blue: 'text-blue-500 group-hover:text-blue-400',
      purple: 'text-purple-500 group-hover:text-purple-400',
      pink: 'text-pink-500 group-hover:text-pink-400',
      cyan: 'text-cyan-500 group-hover:text-cyan-400',
    };
    return map[color] || 'text-white';
  };

  return (
    <div className="min-h-screen py-24 text-white bg-[#050508]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        <FadeIn>
          <div className="text-center mb-16 sm:mb-24 pt-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">Capacidades <span className="text-purple-500">Técnicas</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-light">
              Soluciones integrales que combinan código limpio, estrategias de inteligencia artificial y un diseño visual impecable.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <FadeIn delay={200 + (idx * 100)} key={idx}>
              <div className="p-8 sm:p-10 bg-[#0a0a0f] border border-slate-800 rounded-3xl hover:border-slate-600 transition-all duration-300 group flex items-start gap-6 h-full shadow-lg hover:shadow-purple-500/5">
                <div className={`p-4 bg-slate-900 rounded-2xl ${getColorClass(srv.color)} transition-colors border border-slate-800 group-hover:border-slate-700`}>
                  {srv.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{srv.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Sistema Escolar Integral',
      cat: 'Desarrollo Full-Stack',
      desc: 'Gestión académica completa con bases de datos en tiempo real. Administración de alumnos y docentes.',
      tech: ['React', 'Supabase', 'Tailwind'],
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Plataforma Electoral Docente',
      cat: 'Sistemas Seguros',
      desc: 'Sistema de votación interactivo y transparente creado específicamente para procesos sindicales/escolares.',
      tech: ['React', 'UX/UI', 'Data Viz'],
      img: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Costa Chica TV Streaming',
      cat: 'Medios & Streaming',
      desc: 'Arquitectura y plataforma para transmisión regional, integrando pautas publicitarias y gestión de VOD.',
      tech: ['Video API', 'Flask', 'Diseño'],
      img: 'https://images.unsplash.com/photo-1590845947376-2f04e84b8403?auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <div className="min-h-screen py-24 text-white bg-[#030305]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        <FadeIn>
          <div className="text-center mb-16 sm:mb-24 pt-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Destacados</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-light">Casos de estudio donde la tecnología resuelve problemas reales.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <FadeIn delay={200 + (idx * 200)} key={project.id}>
              <div className="bg-[#0a0a0f] border border-slate-800 rounded-3xl overflow-hidden group hover:border-slate-600 transition-all duration-500 flex flex-col h-full shadow-xl">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/10">
                      {project.cat}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-medium text-slate-300 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">{t}</span>
                    ))}
                  </div>

                  <button className="w-full py-4 bg-white hover:bg-slate-200 text-black rounded-xl flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1">
                    Explorar Proyecto <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => (
  <div className="min-h-screen py-24 text-white bg-[#050508] relative">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

      <FadeIn>
        <div className="text-center mb-16 sm:mb-20 pt-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">Iniciar <span className="text-purple-500">Conversación</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg font-light">
            ¿Tienes un proyecto en mente o buscas consultoría técnica? Escríbeme.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        {/* Info Lateral */}
        <FadeIn delay={200} className="lg:col-span-2">
          <div className="flex flex-col gap-6">
            <div className="p-8 bg-[#0a0a0f] border border-slate-800 rounded-3xl shadow-lg">
              <h4 className="text-lg font-bold mb-8 text-white/90 uppercase tracking-widest border-b border-slate-800 pb-4">Información Directa</h4>
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                    <Mail className="text-purple-500" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Email Principal</p>
                    <p className="text-slate-100 font-medium">hola@erubanel.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <MapPin className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Base de Operaciones</p>
                    <p className="text-slate-100 font-medium">Costa Chica, Guerrero, Mx.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-3xl backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
              <h4 className="text-xl font-bold mb-4 relative z-10">¿Buscas aprender?</h4>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed relative z-10">Únete a la comunidad de Código Maestro y descubre cursos sobre desarrollo e IA de vanguardia.</p>
              <button className="text-white text-sm font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl w-fit border border-white/10">
                Visitar Academia <ExternalLink size={18} />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Formulario */}
        <FadeIn delay={400} className="lg:col-span-3">
          <form className="bg-[#0a0a0f] p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Tu Nombre</label>
                <input type="text" className="w-full bg-slate-900/70 text-white rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all border border-slate-800 hover:border-slate-700" placeholder="Ej. Juan Pérez" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Tu Correo</label>
                <input type="email" className="w-full bg-slate-900/70 text-white rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all border border-slate-800 hover:border-slate-700" placeholder="juan@correo.com" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Área de Interés</label>
              <div className="relative">
                <select defaultValue="" className="w-full bg-slate-900/70 text-slate-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all border border-slate-800 hover:border-slate-700 appearance-none cursor-pointer">
                  <option value="" disabled>Selecciona una opción...</option>
                  <option value="dev">Desarrollo Web (EG Labs)</option>
                  <option value="ia">Automatización IA</option>
                  <option value="edu">Cursos / Mentorías (Código Maestro)</option>
                  <option value="media">Publicidad / Branding (Costa Chica TV)</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <ChevronRight size={20} className="rotate-90" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Detalles del Proyecto</label>
              <textarea rows="5" className="w-full bg-slate-900/70 text-white rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all border border-slate-800 hover:border-slate-700 resize-none" placeholder="Cuéntame brevemente qué necesitas..."></textarea>
            </div>

            <button className="w-full py-5 bg-white text-black hover:bg-slate-200 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3 active:scale-95">
              Enviar Mensaje <Send size={20} />
            </button>
          </form>
        </FadeIn>
      </div>
    </div>
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', icon: <Home size={20} />, label: 'Inicio' },
    { id: 'about', icon: <User size={20} />, label: 'Sobre mí' },
    { id: 'ecosystem', icon: <Layers size={20} />, label: 'Ecosistema' },
    { id: 'services', icon: <Terminal size={20} />, label: 'Servicios' },
    { id: 'portfolio', icon: <Briefcase size={20} />, label: 'Proyectos' },
    { id: 'contact', icon: <Mail size={20} />, label: 'Contacto' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#030305] min-h-screen text-white font-sans selection:bg-purple-500/30 selection:text-white pb-24 lg:pb-0 overflow-x-hidden scroll-smooth">

      {/* Navbar Superior Móvil */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#030305]/90 backdrop-blur-xl z-50 border-b border-slate-800/80 p-5 flex justify-between items-center shadow-2xl">
        <span className="font-black text-xl tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">E. GALLO</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-300 hover:text-white transition-colors bg-slate-900/50 rounded-xl border border-slate-800">
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menú Móvil Overlay */}
      <div className={`lg:hidden fixed inset-0 top-[75px] bg-[#030305] z-40 transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'}`}>
        <div className="flex flex-col gap-4 p-6 pt-10">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center gap-5 p-5 rounded-3xl transition-all duration-300 group ${activeSection === item.id ? 'bg-white text-black shadow-2xl' : 'text-slate-400 hover:bg-slate-900/50 hover:text-white'
                }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="transition-transform group-active:scale-90">{item.icon}</div>
              <span className="font-bold text-xl uppercase tracking-widest">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Navegación Lateral / Inferior */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto lg:translate-x-0 lg:left-auto lg:right-10 lg:top-1/2 lg:-translate-y-1/2 z-50 flex items-center justify-center p-3 bg-[#0a0a0f]/90 backdrop-blur-2xl border border-slate-800/50 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <ul className="flex lg:flex-col gap-3 w-full justify-between sm:justify-center">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <button
                onClick={() => handleNavClick(item.id)}
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-500 relative overflow-hidden group/btn ${activeSection === item.id
                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                    : 'bg-transparent text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                aria-label={item.label}
              >
                <div className="z-10 group-active/btn:scale-90 transition-transform">{item.icon}</div>
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-100 to-slate-200 opacity-100"></div>
                )}
              </button>

              <span className="hidden lg:block absolute right-[130%] top-1/2 -translate-y-1/2 bg-white text-black px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] opacity-0 pointer-events-none group-hover:opacity-100 transition-all transform group-hover:translate-x-0 translate-x-5 whitespace-nowrap shadow-2xl border border-white/20">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>

      <main className="w-full relative min-h-screen">
        {activeSection === 'home' && <HomeSection setSection={handleNavClick} />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'ecosystem' && <EcosystemSection />}
        {activeSection === 'services' && <ServicesSection />}
        {activeSection === 'portfolio' && <PortfolioSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>

      <footer className="hidden lg:block fixed bottom-8 left-10 z-50">
        <div className="flex items-center gap-6 text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em]">
          <span>© 2026 EG Casiano</span>
          <div className="w-10 h-[1px] bg-slate-800"></div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>Disponible para proyectos</span>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        ::selection {
          background: #a855f7;
          color: white;
        }
        /* Personalización de Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #030305;
        }
        ::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }
      `}} />
    </div>
  );
}
