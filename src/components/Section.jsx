import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const Section = ({ children, className, id }) => (
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
