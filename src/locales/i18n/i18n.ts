/* eslint-disable import/extensions */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as en from 'locales/en.json';
import * as fr from 'locales/fr.json';
import * as ua from 'locales/ua.json';

const DEFAULT_LANGUAGE = 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    ua: { translation: ua },
  },
  lng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
