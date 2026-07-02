import { motion } from 'framer-motion';

const techs = [
  'React', 'Node.js', 'Python', 'TypeScript', 'Tailwind CSS',
  'Figma', 'IA', 'Automatización', 'Streaming', 'Branding',
  'JavaScript', 'SQL', 'Docker', 'Git', 'REST APIs',
];

export const Marquee = () => (
  <div className="marquee-wrap" aria-hidden="true">
    <motion.div
      className="marquee-track"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
    >
      {[...techs, ...techs].map((t, i) => (
        <span key={i} className="marquee-item">{t}</span>
      ))}
    </motion.div>
  </div>
);
