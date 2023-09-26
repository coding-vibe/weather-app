/* eslint-disable import/extensions */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as en from '../locales/en/translation.json';
import * as fr from '../locales/fr/translation.json';
import * as ua from '../locales/ua/translation.json';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    ua: { translation: ua },
  },
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
