import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const TypewriterText = ({ text, className, ...props }) => {
  const chars = text.split('');

  return (
    <motion.span
      className={cn('inline-flex', className)}
      aria-label={text}
      {...props}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.08, delay: i * 0.025, ease: 'easeOut' }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};
