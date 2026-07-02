import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/siteData';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const TestimonialsSection = () => (
  <motion.section
    id="testimonials"
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
        <motion.div variants={itemVariants} className="section-heading center" custom={0}>
          <span className="eyebrow">Testimonios</span>
          <h2>Lo que dicen quienes han trabajado conmigo.</h2>
        </motion.div>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              custom={i}
              variants={itemVariants}
              className="testimonial-card"
            >
              <Quote size={24} className="testimonial-quote-icon" />
              <p className="testimonial-text">{t.text}</p>
              <footer className="testimonial-author">
                <div className="testimonial-avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);
