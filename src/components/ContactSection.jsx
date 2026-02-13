import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../useScrollReveal';

function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <ScrollReveal>
            <div className="contact-header">
              <span className="section-label">{t('contact.label')}</span>
              <h2 className="section-title">{t('contact.title')}</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
