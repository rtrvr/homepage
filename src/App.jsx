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
  const [hidden, setHidden] = useState(false);
  const [navBg, setNavBg] = useState(null);
  const [navTone, setNavTone] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 푸터가 보이면 하단 고정 버튼을 숨겨서 푸터를 가리지 않게 함
      const footer = document.querySelector('.footer');
      const footerVisible = footer && footer.getBoundingClientRect().top < window.innerHeight;
      setShowStickyCta(currentScrollY > 600 && !footerVisible);

      // 위·아래로 당겼을 때(오버스크롤) 보이는 배경을 히어로/푸터 색에 맞춤
      document.documentElement.style.backgroundColor =
        currentScrollY < window.innerHeight ? '#0A1650' : '#06103D';

      // 헤더 아래에 깔린 섹션의 배경색·톤을 헤더에 적용
      const probe = 36;
      for (const section of document.querySelectorAll('[data-nav-tone]')) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= probe && rect.bottom > probe) {
          setNavBg(getComputedStyle(section).backgroundColor);
          setNavTone(section.dataset.navTone);
          break;
        }
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };
    handleScroll();
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
        hidden={hidden}
        navBg={navBg}
        navTone={navTone}
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
