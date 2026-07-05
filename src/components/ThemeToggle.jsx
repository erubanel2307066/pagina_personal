import { motion } from 'framer-motion';
import { Moon } from 'lucide-react';

export const ThemeToggle = () => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="theme-toggle"
      aria-label="Modo oscuro activo"
    >
      <Moon size={16} />
    </motion.button>
  );
};
