import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../useScrollReveal';

const cultureItems = [
  {
    key: 'loveUsers',
    className: 'love',
    icon: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  },
  {
    key: 'positiveEnergy',
    className: 'energy',
    icon: <>
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </>
  },
  {
    key: 'proactive',
    className: 'proactive',
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  },
  {
    key: 'focus',
    className: 'focus',
    icon: <>
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </>
  },
  {
    key: 'teamFirst',
    className: 'team',
    icon: <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </>
  }
];

function CultureSection() {
  const { t } = useTranslation();

  return (
    <section id="culture" className="culture">
      <div className="container">
        <ScrollReveal>
          <div className="culture-header">
            <span className="section-label purple">{t('culture.label')}</span>
            <h2 className="section-title">{t('culture.title')}</h2>
            <p className="section-description">{t('culture.subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="culture-grid">
          {cultureItems.map((item, index) => (
            <ScrollReveal key={item.key} delay={index * 100}>
              <div className="culture-card">
                <div className={`culture-icon ${item.className}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {item.icon}
                  </svg>
                </div>
                <div className="culture-content">
                  <h3>{t(`culture.values.${item.key}.title`)}</h3>
                  <p>{t(`culture.values.${item.key}.description`)}</p>
                </div>
                <span className="culture-number">{String(index + 1).padStart(2, '0')}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CultureSection;
