import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../useScrollReveal';

function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section className="testimonials">
      <div className="container">
        <ScrollReveal>
          <div className="testimonials-header">
            <span className="section-label">{t('testimonials.label')}</span>
            <h2 className="section-title">{t('testimonials.title')}</h2>
            <p className="section-description">{t('testimonials.subtitle')}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="testimonials-stats">
          <div className="rating-badge">
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="rating-number">4.7</span>
            <span className="rating-source">{t('testimonials.rating')}</span>
          </div>
          <div className="stats-divider"></div>
          <div className="reviews-count">
            <span className="count-number">13.4K+</span>
            <span className="count-label">{t('testimonials.reviews')}</span>
          </div>
          <div className="stats-divider"></div>
          <div className="downloads-count">
            <span className="count-number">100K+</span>
            <span className="count-label">{t('testimonials.downloads')}</span>
          </div>
          </div>
        </ScrollReveal>

        <div className="testimonials-grid">
          {t('testimonials.items', { returnObjects: true }).map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className={`testimonial-card ${index === 1 ? 'featured' : ''}`}>
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{item.name.charAt(0)}</div>
                  <div className="testimonial-info">
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="testimonial-text">"{item.text}"</p>
                <div className="testimonial-source">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span>Google Play</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="testimonials-cta">
          <a
            href="https://play.google.com/store/apps/details?id=xyz.rtrvr.pillo"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link"
          >
            {t('testimonials.cta')}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
