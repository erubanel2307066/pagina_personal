import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { services } from '../data/siteData';
import { TypewriterText } from './TypewriterText';
import { useMagnetic } from '../hooks/useMagnetic';

const MagneticButton = ({ children, className, ...props }) => {
  const magneticProps = useMagnetic();
  return (
    <motion.button
      className={className}
      whileTap={{ scale: 0.98 }}
      {...magneticProps}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const HeroSection = ({ onNavigate }) => (
  <section id="home" className="section-space relative min-h-screen pt-28 sm:pt-32">
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
            <TypewriterText text="IA, diseño y sistemas digitales" />
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
            <MagneticButton onClick={() => onNavigate('portfolio')} className="button-primary">
              Ver proyectos
              <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton onClick={() => onNavigate('contact')} className="button-secondary">
              Hablemos
            </MagneticButton>
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
  </section>
);
