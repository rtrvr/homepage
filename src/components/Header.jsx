import { useTranslation } from 'react-i18next';

function Header({ hidden, navBg, navTone, mobileMenuOpen, setMobileMenuOpen, changeLanguage, currentLang }) {
  const { t } = useTranslation();

  return (
    <header
      className={`header ${hidden ? 'hidden' : ''}`}
      data-tone={navTone}
      style={navBg ? { '--nav-bg': navBg } : undefined}
    >
      <div className="container">
        <nav className="nav">
          <a href="/" className="logo">
            <span className="logo-text">pitcrew</span>
          </a>
          <div className="nav-right">
            <div className="nav-links">
              <a href="#service">{t('nav.service')}</a>
              <a href="#about">{t('nav.about')}</a>
              <a href="#culture">{t('nav.culture')}</a>
              <a href="#team">{t('nav.team')}</a>
              <a href="#contact">{t('nav.contact')}</a>
            </div>
            <div className="lang-switcher">
              <button
                className={`lang-btn ${currentLang === 'ko' ? 'active' : ''}`}
                onClick={() => changeLanguage('ko')}
                aria-pressed={currentLang === 'ko'}
                aria-label="한국어"
              >
                KR
              </button>
              <span className="lang-divider">|</span>
              <button
                className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
                aria-pressed={currentLang === 'en'}
                aria-label="English"
              >
                EN
              </button>
            </div>
            <button
              className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#service" onClick={() => setMobileMenuOpen(false)}>{t('nav.service')}</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t('nav.about')}</a>
            <a href="#culture" onClick={() => setMobileMenuOpen(false)}>{t('nav.culture')}</a>
            <a href="#team" onClick={() => setMobileMenuOpen(false)}>{t('nav.team')}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t('nav.contact')}</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
