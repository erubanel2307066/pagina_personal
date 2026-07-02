import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectFilterOptions } from '../data/siteData';
import { Section } from './Section';
import { useTilt } from '../hooks/useTilt';
import { cn } from '../lib/utils';

const TiltCard = ({ children, className }) => {
  const tiltProps = useTilt(5);
  return (
    <motion.div className={className} {...tiltProps}>
      {children}
    </motion.div>
  );
};

export const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <Section id="portfolio">
      <div className="container-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading center"
        >
          <span className="eyebrow">Trabajo destacado</span>
          <h2>Proyectos con identidad clara y utilidad real.</h2>
          <p>La UI debe comunicar confianza antes de pedirle al usuario que haga clic.</p>
        </motion.div>

        <div className="project-filters">
          {projectFilterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={cn(
                'project-filter-btn',
                activeFilter === opt.id && 'project-filter-active'
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <motion.div layout className="project-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <TiltCard className="project-card">
                  <div className="project-image">
                    <img
                      src={project.img}
                      alt={project.title}
                      loading="lazy"
                    />
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
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
};
