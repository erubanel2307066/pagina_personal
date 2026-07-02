import { motion } from 'framer-motion';
import { Bot, Rocket, Zap } from 'lucide-react';
import { stats } from '../data/siteData';
import { Section } from './Section';
import { SkillsSection } from './SkillsSection';

const capabilities = [
  { icon: Bot, title: 'IA aplicada', text: 'Automatizaciones y asistentes que reducen trabajo repetitivo.' },
  { icon: Rocket, title: 'Producto digital', text: 'Interfaces rápidas, limpias y pensadas para conversión.' },
  { icon: Zap, title: 'Operación', text: 'Sistemas que conectan datos, equipos y decisiones.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export const AboutSection = () => (
  <Section id="about">
    <div className="container-wrap">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="section-heading">
          <span className="eyebrow">Perfil profesional</span>
          <h2>Una mezcla de ingeniería, comunicación y criterio visual.</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div variants={itemVariants} className="about-copy">
            <p>
              Soy desarrollador, creador digital y emprendedor enfocado en tecnología, inteligencia artificial y transformación digital. Mi trabajo une la estructura de la ingeniería con una dirección visual cuidada.
            </p>
            <p>
              Como fundador de <strong>Código Maestro</strong> y creador de <strong>Costa Chica TV</strong>, diseño proyectos que hacen más accesible la tecnología y convierten ideas complejas en experiencias fáciles de usar.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="stats-grid">
            {stats.map((stat) => (
              <div className="metric-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="capability-grid">
          {capabilities.map((item) => (
            <article className="feature-card" key={item.title}>
              <item.icon size={22} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </motion.div>
      </motion.div>

      <SkillsSection />
    </div>
  </Section>
);
