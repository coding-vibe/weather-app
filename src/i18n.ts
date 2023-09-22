import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as en from '../public/locales.json';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.use(initReactI18next).init({
  resources: { en },
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
