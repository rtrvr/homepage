import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">{t('hero.badge')}</div>
          <h1 className="hero-title">
            <span className="hero-title-line">{t('hero.title1')}</span>
            <span className="hero-title-line gradient-text">{t('hero.title2')}</span>
          </h1>
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          <div className="hero-actions">
            <a href="https://play.google.com/store/apps/details?id=xyz.rtrvr.pillo" target="_blank" rel="noopener noreferrer" className="hero-cta primary">
              {t('hero.cta')}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">100K+</span>
              <span className="stat-label">{t('hero.stats.downloads')}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4.7</span>
              <span className="stat-label">{t('hero.stats.rating')}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">13K+</span>
              <span className="stat-label">{t('hero.stats.reviews')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
