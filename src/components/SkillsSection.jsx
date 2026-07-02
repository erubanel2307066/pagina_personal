import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { skills } from '../data/siteData';

const categoryConfig = {
  frontend: { label: 'Frontend', color: 'text-brand-cyan' },
  backend: { label: 'Backend', color: 'text-brand-blue' },
  design: { label: 'Diseño', color: 'text-brand-amber' },
  ai: { label: 'IA', color: 'text-brand-green' },
  media: { label: 'Media', color: 'text-purple-400' },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const SkillsSection = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="skills-section"
  >
    <div className="skills-header">
      <span className="eyebrow">Stack tecnológico</span>
      <h3>Herramientas con las que trabajo</h3>
    </div>

    <div className="skills-grid">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          custom={i}
          variants={itemVariants}
          className="skill-card"
        >
          <div className="skill-card-top">
            <span className="skill-name">{skill.name}</span>
            <span className={cn('skill-level', categoryConfig[skill.category]?.color || 'text-slate-400')}>
              {skill.level}%
            </span>
          </div>
          <div className="skill-bar">
            <motion.div
              className="skill-bar-fill"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: skill.level / 100 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </div>
          <span className={cn('skill-cat', categoryConfig[skill.category]?.color || 'text-slate-500')}>
            {categoryConfig[skill.category]?.label || skill.category}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

