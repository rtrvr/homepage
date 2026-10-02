import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const STARS = [
  [10, 18], [29, 14], [42, 26], [49, 82], [94, 16], [4, 61], [63, 9], [86, 74], [21, 88],
];

function getTimeSlot(date) {
  const hour = date.getHours();
  if (hour >= 5 && hour < 11) return 'morning';
  if (hour >= 11 && hour < 17) return 'noon';
  if (hour >= 17 && hour < 21) return 'evening';
  return 'night';
}

function useNow() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let intervalId;
    const tick = () => setNow(new Date());
    const msToNextMinute = 60000 - (Date.now() % 60000);
    const timeoutId = setTimeout(() => {
      tick();
      intervalId = setInterval(tick, 60000);
    }, msToNextMinute);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return now;
}

function Hero() {
  const { t, i18n } = useTranslation();
  const now = useNow();
  const slot = getTimeSlot(now);

  const clock = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const date = new Intl.DateTimeFormat(i18n.language === 'en' ? 'en-US' : 'ko-KR', {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  }).format(now);

  return (
    <section className="hero" data-nav-tone="dark">
      <div className="hero-sky" aria-hidden="true">
        <img className="hero-moon" src="/moon.webp" alt="" width="120" height="120" />
        {STARS.map(([left, top]) => (
          <span key={`${left}-${top}`} className="hero-star" style={{ left: `${left}%`, top: `${top}%` }}></span>
        ))}
      </div>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">{t('hero.eyebrow')}</p>
            <h1 className="hero-title">
              {t('hero.title1')}<br />{t('hero.title2')}
            </h1>
            <p className="hero-subtitle">
              {t('hero.lead')}<br />{t('hero.subtitle')}
            </p>
            <div className="hero-actions">
              <a href="https://play.google.com/store/apps/details?id=xyz.rtrvr.pillo" target="_blank" rel="noopener noreferrer" className="hero-cta">
                {t('hero.cta')}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </a>
              <dl className="hero-stats">
                <div><dt>{t('hero.stats.downloads')}</dt><dd>100K+</dd></div>
                <div><dt>{t('hero.stats.rating')}</dt><dd>4.7</dd></div>
                <div><dt>{t('hero.stats.reviews')}</dt><dd>13K+</dd></div>
              </dl>
            </div>
          </div>

          <div className="hero-lock" aria-hidden="true">
            <div className="hero-date">{date}</div>
            <div className="hero-clock">{clock}</div>
            <div className="hero-notification">
              <img src="/angry.png" alt="" width="48" height="48" />
              <div className="hero-notification-body">
                <div className="hero-notification-meta">
                  <span>Pillo</span>
                  <span>{t('hero.notification.now')}</span>
                </div>
                <div className="hero-notification-title">{t(`hero.notification.${slot}.title`)}</div>
                <div className="hero-notification-text">{t(`hero.notification.${slot}.body`)}</div>
              </div>
            </div>
            <div className="hero-notification-stack"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
