import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import Languages from 'constants/languages';

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    lng: Languages.ENGLISH,
    fallbackLng: Languages.ENGLISH,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
