import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './locales/ko.json';
import en from './locales/en.json';

const supportedLanguages = ['ko', 'en'];

// 직접 고른 언어가 없으면 브라우저 언어 설정 순서대로 지원하는 첫 언어를 사용
const detectLanguage = () => {
  const saved = localStorage.getItem('language');
  if (supportedLanguages.includes(saved)) return saved;

  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of preferred) {
    const base = tag?.toLowerCase().split('-')[0];
    if (supportedLanguages.includes(base)) return base;
  }
  return 'en';
};

const initialLanguage = detectLanguage();
document.documentElement.lang = initialLanguage;

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ko: { translation: ko },
      en: { translation: en }
    },
    lng: initialLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
