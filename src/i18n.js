import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        learn: 'Xpto'
      }
    },
    pt: {
      translation: {
        learn: 'Abcd',
      }
    }
  }
});