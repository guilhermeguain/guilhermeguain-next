import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  fallbackLng: 'en-US',
  resources: {
    'en-US': {
      translation: {
        learn: 'Xpto'
      }
    },
    'pt-BR': {
      translation: {
        learn: 'Abcd',
      }
    }
  }
});