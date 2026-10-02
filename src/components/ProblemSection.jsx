import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../useScrollReveal';

function ProblemSection() {
  const { t } = useTranslation();

  return (
    <section className="section problem" data-nav-tone="light">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">{t('problem.label')}</span>
            <h2 className="section-title">{t('problem.title')}</h2>
            <p className="section-description">{t('problem.subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="problem-content">
          <ScrollReveal delay={100}>
            <p className="problem-statement">{t('problem.description')}</p>
          </ScrollReveal>

          <div className="problem-grid">
            <ScrollReveal delay={200}>
              <div className="card solution-card">
                <div className="icon-tile">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.73 0 3.35.49 4.72 1.34"/>
                  </svg>
                </div>
                <h3>{t('problem.solution.title')}</h3>
                <p>{t('problem.solution.description')}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="card target-card">
                <h3>{t('problem.target.title')}</h3>
                <ul className="target-list">
                  {[1, 2, 3, 4].map((num) => (
                    <li key={num}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {t(`problem.target.item${num}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
