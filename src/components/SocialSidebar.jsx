import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const links = [
  { icon: Github, href: 'https://github.com/erubanel2307066', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:gace860403@gmail.com', label: 'Email' },
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const SocialSidebar = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    className="social-sidebar"
    aria-label="Redes sociales"
  >
    {links.map((link, i) => (
      <motion.a
        key={link.label}
        custom={i}
        variants={itemVariants}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        className="social-sidebar-link"
      >
        <link.icon size={18} />
      </motion.a>
    ))}
    <div className="social-sidebar-line" aria-hidden="true" />
  </motion.div>
);
