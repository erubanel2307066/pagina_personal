import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { navItems } from '../data/siteData';

export const Navbar = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id) => {
    onNavigate(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          'fixed left-1/2 top-4 z-50 w-[calc(100%-24px)] max-w-4xl -translate-x-1/2 transition-all duration-300',
          isScrolled ? 'nav-shell nav-shell-scrolled' : 'nav-shell'
        )}
        aria-label="Navegación principal"
      >
        <button
          onClick={() => handleNav('home')}
          className="brand-mark"
          aria-label="Ir al inicio"
        >
          <img src="/Logo Eru negro.png" alt="" className="brand-logo" />
          <span>Erubanel Gallo</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className={cn('nav-link', activeSection === item.id && 'nav-link-active')}
                aria-current={activeSection === item.id ? 'page' : undefined}
                title={item.label}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="nav-mobile-toggle md:hidden"
          aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="nav-mobile-overlay"
          >
            <ul className="nav-mobile-list">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => handleNav(item.id)}
                    className={cn(
                      'nav-mobile-link',
                      activeSection === item.id && 'nav-mobile-link-active'
                    )}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
