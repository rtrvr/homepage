import { useTranslation } from 'react-i18next';

function StickyCta({ visible }) {
  const { t } = useTranslation();

  return (
    <div className={`sticky-cta ${visible ? 'visible' : ''}`}>
      <div className="sticky-cta-content">
        <span className="sticky-cta-text">{t('service.download')}</span>
        <a
          href="https://play.google.com/store/apps/details?id=xyz.rtrvr.pillo"
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-cta-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
          {t('hero.cta')}
        </a>
      </div>
    </div>
  );
}

export default StickyCta;
