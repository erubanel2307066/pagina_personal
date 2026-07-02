import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const scaleX = useSpring(progress, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};
