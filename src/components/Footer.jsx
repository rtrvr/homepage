import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="footer-logo">pitcrew</span>
            <p className="footer-tagline">{t('footer.tagline')}</p>
          </div>
          <div className="footer-links-grid">
            <div className="footer-col">
              <h5>{t('footer.companyHeading')}</h5>
              <a href="#about">{t('footer.aboutUs')}</a>
              <a href="#contact">{t('footer.contactUs')}</a>
            </div>
            <div className="footer-col">
              <h5>{t('footer.productHeading')}</h5>
              <a href="https://pillo.care" target="_blank" rel="noopener noreferrer">{t('footer.service')}</a>
              <a href="#service">{t('footer.serviceIntro')}</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-business-info">
            <p>{t('footer.company')} (Pitcrew Inc.) | {t('footer.ceo')}: 이정언</p>
            <p>{t('footer.businessNumber')}: 478-88-01971</p>
          </div>
          <p className="footer-copyright">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
