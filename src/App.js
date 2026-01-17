import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const currentLang = i18n.language;

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
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
                <a href="#contact">{t('nav.contact')}</a>
              </div>
              <div className="lang-switcher">
                <button
                  className={`lang-btn ${currentLang === 'ko' ? 'active' : ''}`}
                  onClick={() => changeLanguage('ko')}
                >
                  KR
                </button>
                <span className="lang-divider">|</span>
                <button
                  className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
                  onClick={() => changeLanguage('en')}
                >
                  EN
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Healthcare Innovation</div>
            <h1 className="hero-title">
              <span className="hero-title-line">{t('hero.title1')}</span>
              <span className="hero-title-line gradient-text">{t('hero.title2')}</span>
            </h1>
            <p className="hero-subtitle">
              {t('hero.subtitle')}
            </p>
            <div className="hero-actions">
              <a href="#service" className="hero-cta primary">
                {t('hero.cta')}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">1M+</span>
                <span className="stat-label">Reminders Sent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section - Pillo */}
      <section id="service" className="service">
        <div className="container">
          <div className="service-header">
            <span className="section-label">{t('service.label')}</span>
            <h2 className="section-title">{t('service.title')}</h2>
            <p className="section-description">
              {t('service.description')}
            </p>
          </div>

          <div className="service-content">
            <div className="service-features">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <h3>{t('service.feature1.title')}</h3>
                <p>{t('service.feature1.description')}</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                  </svg>
                </div>
                <h3>{t('service.feature2.title')}</h3>
                <p>{t('service.feature2.description')}</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 21H4.6c-.6 0-.9 0-1.1-.1-.2-.1-.4-.3-.5-.5-.1-.2-.1-.5-.1-1.1V3"/>
                    <path d="M7 14l4-4 4 4 6-6"/>
                  </svg>
                </div>
                <h3>{t('service.feature3.title')}</h3>
                <p>{t('service.feature3.description')}</p>
              </div>
            </div>

            <div className="download-section">
              <div className="download-content">
                <div className="download-text-wrapper">
                  <h3 className="download-title">{t('service.download')}</h3>
                  <p className="download-subtitle">Available on iOS & Android</p>
                </div>
                <div className="download-buttons">
                  <a
                    href="https://play.google.com/store/apps/details?id=xyz.rtrvr.pillo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="btn-text">
                      <span className="btn-label">GET IT ON</span>
                      <span className="btn-store">Google Play</span>
                    </div>
                  </a>
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                    <div className="btn-text">
                      <span className="btn-label">Download on the</span>
                      <span className="btn-store">App Store</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-main">
              <span className="section-label green">{t('about.label')}</span>
              <h2 className="section-title">{t('about.title')}</h2>
              <p className="about-description">
                {t('about.description')}
              </p>
              <div className="mission-card">
                <div className="mission-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div className="mission-content">
                  <h4>{t('about.mission.title')}</h4>
                  <p>{t('about.mission.description')}</p>
                </div>
              </div>
            </div>
            <div className="about-values">
              <div className="value-card">
                <span className="value-number">01</span>
                <h4>{t('about.value1.title')}</h4>
                <p>{t('about.value1.description')}</p>
              </div>
              <div className="value-card">
                <span className="value-number">02</span>
                <h4>{t('about.value2.title')}</h4>
                <p>{t('about.value2.description')}</p>
              </div>
              <div className="value-card">
                <span className="value-number">03</span>
                <h4>{t('about.value3.title')}</h4>
                <p>{t('about.value3.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="culture">
        <div className="container">
          <div className="culture-header">
            <span className="section-label purple">{t('culture.label')}</span>
            <h2 className="section-title">{t('culture.title')}</h2>
            <p className="section-description">{t('culture.subtitle')}</p>
          </div>

          <div className="culture-grid">
            <div className="culture-card">
              <div className="culture-icon love">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div className="culture-content">
                <h3>{t('culture.values.loveUsers.title')}</h3>
                <p>{t('culture.values.loveUsers.description')}</p>
              </div>
              <span className="culture-number">01</span>
            </div>

            <div className="culture-card">
              <div className="culture-icon energy">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              </div>
              <div className="culture-content">
                <h3>{t('culture.values.positiveEnergy.title')}</h3>
                <p>{t('culture.values.positiveEnergy.description')}</p>
              </div>
              <span className="culture-number">02</span>
            </div>

            <div className="culture-card">
              <div className="culture-icon proactive">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <div className="culture-content">
                <h3>{t('culture.values.proactive.title')}</h3>
                <p>{t('culture.values.proactive.description')}</p>
              </div>
              <span className="culture-number">03</span>
            </div>

            <div className="culture-card">
              <div className="culture-icon focus">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <div className="culture-content">
                <h3>{t('culture.values.focus.title')}</h3>
                <p>{t('culture.values.focus.description')}</p>
              </div>
              <span className="culture-number">04</span>
            </div>

            <div className="culture-card">
              <div className="culture-icon team">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="culture-content">
                <h3>{t('culture.values.teamFirst.title')}</h3>
                <p>{t('culture.values.teamFirst.description')}</p>
              </div>
              <span className="culture-number">05</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-header">
              <span className="section-label">{t('contact.label')}</span>
              <h2 className="section-title">{t('contact.title')}</h2>
            </div>
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <h4>{t('contact.address.title')}</h4>
                  <p>{t('contact.address.line1')}<br/>{t('contact.address.line2')}</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <h4>{t('contact.email.title')}</h4>
                  <p>support@rtrvr.xyz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <span className="footer-logo">pitcrew</span>
              <p className="footer-tagline">Healthcare Innovation</p>
            </div>
            <div className="footer-links-grid">
              <div className="footer-col">
                <h5>Company</h5>
                <a href="#about">{t('footer.aboutUs')}</a>
                <a href="#contact">{t('footer.contactUs')}</a>
              </div>
              <div className="footer-col">
                <h5>Product</h5>
                <a href="https://pillo.care" target="_blank" rel="noopener noreferrer">{t('footer.service')}</a>
                <a href="#service">{t('footer.serviceIntro')}</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-company">{t('footer.company')}</p>
            <p className="footer-copyright">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
