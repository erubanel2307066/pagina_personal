import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { clients } from '../data/siteData';

export const ClientsSection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    className="section-space relative"
  >
    <div className="container-wrap">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="section-heading center"
        >
          <span className="eyebrow">Colaboraciones</span>
          <h2>Marcas y proyectos con los que he trabajado.</h2>
        </motion.div>

        <div className="clients-grid">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              custom={i}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: (i) => ({
                  opacity: 1,
                  scale: 1,
                  transition: { delay: i * 0.08 },
                }),
              }}
              className="client-card"
            >
              <span className={cn('client-name', client.color)}>{client.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);
