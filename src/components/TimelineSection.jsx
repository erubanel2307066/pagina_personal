import { motion } from 'framer-motion';
import { timeline } from '../data/siteData';

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const TimelineSection = () => (
  <motion.section
    id="timeline"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    className="section-space relative"
  >
    <div className="container-wrap">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} custom={-1} className="section-heading center">
          <span className="eyebrow">Trayectoria</span>
          <h2>Mi camino en tecnología.</h2>
        </motion.div>

        <div className="timeline-grid">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              custom={i}
              variants={itemVariants}
              className="timeline-card"
            >
              <div className="timeline-dot" aria-hidden="true" />
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);
