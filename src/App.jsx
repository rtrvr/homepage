import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import ServiceSection from './components/ServiceSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import CultureSection from './components/CultureSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import StickyCta from './components/StickyCta';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);
      setShowStickyCta(currentScrollY > 600);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    document.documentElement.lang = lng;
  };

  const currentLang = i18n.language;

  return (
    <div className="App">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header
        scrolled={scrolled}
        hidden={hidden}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        changeLanguage={changeLanguage}
        currentLang={currentLang}
      />

      <main id="main-content">
        <Hero />
        <ProblemSection />
        <ServiceSection />
        <TestimonialsSection />
        <AboutSection />
        <CultureSection />
        <TeamSection />
        <ContactSection />
      </main>

      <StickyCta visible={showStickyCta} />
      <Footer />
    </div>
  );
}

export default App;
