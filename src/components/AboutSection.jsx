import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../useScrollReveal';

function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section about" data-nav-tone="light">
      <div className="container">
        <div className="about-grid">
          <ScrollReveal>
            <div className="about-main">
              <span className="section-label">{t('about.label')}</span>
              <h2 className="section-title about-title">{t('about.title')}</h2>
              <p className="about-description">
                {t('about.description')}
              </p>
            <div className="card mission-card">
              <div className="icon-tile">
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
          </ScrollReveal>
          <ScrollReveal delay={150}>
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
