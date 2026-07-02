import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Background } from './components/Background';
import { ParticlesBackground } from './components/ParticlesBackground';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { ThemeToggle } from './components/ThemeToggle';
import { SocialSidebar } from './components/SocialSidebar';
import { BackToTop } from './components/BackToTop';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TimelineSection } from './components/TimelineSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ClientsSection } from './components/ClientsSection';
import { BlogSection } from './components/BlogSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useActiveSection } from './hooks/useActiveSection';

const SectionDivider = () => (
  <div className="divider" aria-hidden="true" />
);

export default function App() {
  const activeSection = useActiveSection();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const handleNavigate = (id) => {
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, { offset: 0 });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      <ParticlesBackground />
      <ScrollProgress />
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <ThemeToggle />
      <SocialSidebar />
      <BackToTop />

      <main className="relative z-10">
        <HeroSection onNavigate={handleNavigate} />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <TimelineSection />
        <SectionDivider />
        <PortfolioSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <ClientsSection />
        <SectionDivider />
        <BlogSection />
        <SectionDivider />
        <PricingSection />
        <SectionDivider />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
