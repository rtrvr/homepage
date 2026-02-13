import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../useScrollReveal';

function ServiceSection() {
  const { t } = useTranslation();

  return (
    <section id="service" className="service">
      <div className="container">
        <ScrollReveal>
          <div className="service-header">
            <span className="section-label">{t('service.label')}</span>
            <div className="service-title-row">
              <img src="/angry.png" alt="Pillo App Icon" className="pillo-icon" />
              <h2 className="section-title">{t('service.title')}</h2>
            </div>
            <p className="section-description">
              {t('service.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="service-content">
          <div className="service-features">
            {[
              {
                key: 'feature1',
                icon: <><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></>
              },
              {
                key: 'feature2',
                icon: <><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></>
              },
              {
                key: 'feature3',
                icon: <><path d="M21 21H4.6c-.6 0-.9 0-1.1-.1-.2-.1-.4-.3-.5-.5-.1-.2-.1-.5-.1-1.1V3"/><path d="M7 14l4-4 4 4 6-6"/></>
              },
              {
                key: 'feature4',
                icon: <><path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/><path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z"/><circle cx="18" cy="8" r="3"/><path d="M18 6v4M16 8h4"/></>
              }
            ].map((feature, index) => (
              <ScrollReveal key={feature.key} delay={index * 100}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {feature.icon}
                    </svg>
                  </div>
                  <h3>{t(`service.${feature.key}.title`)}</h3>
                  <p>{t(`service.${feature.key}.description`)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="app-screenshots">
              <div className="screenshots-scroll">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <div key={num} className="screenshot-item">
                    <img
                      src={`/preview/pillo-${num}.webp`}
                      alt={`Pillo app screenshot ${num}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="download-section">
            <div className="download-content">
              <div className="download-text-wrapper">
                <h3 className="download-title">{t('service.download')}</h3>
                <p className="download-subtitle">{t('service.downloadSubtitle')}</p>
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
                    <span className="btn-label">{t('service.getItOn')}</span>
                    <span className="btn-store">{t('service.googlePlay')}</span>
                  </div>
                </a>
                <div className="download-btn coming-soon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                  <div className="btn-text">
                    <span className="btn-label">{t('service.comingSoon')}</span>
                    <span className="btn-store">{t('service.appStore')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
