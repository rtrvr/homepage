import { useTranslation } from 'react-i18next';
import { ScrollReveal } from '../useScrollReveal';

function TeamSection() {
  const { t } = useTranslation();

  return (
    <section id="team" className="section team-section" data-nav-tone="light">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">{t('team.label')}</span>
            <h2 className="section-title">{t('team.title')}</h2>
            <p className="section-description">{t('team.subtitle')}</p>
          </div>
        </ScrollReveal>

        <div className="team-grid">
          {t('team.members', { returnObjects: true }).map((member, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="card team-card">
                <div className="team-avatar">
                  {member.name.charAt(0).toUpperCase()}
                </div>
                <div className="team-info">
                  <div className="team-name-row">
                    <h3>{member.name}</h3>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-link"
                        aria-label="LinkedIn Profile"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                  <span className="team-role">{member.role}</span>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
