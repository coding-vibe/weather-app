import Languages from 'constants/languages';
import i18n from '../i18n';

const LANGUAGE_OPTIONS = [
  { label: i18n.t('languages.english'), value: Languages.ENGLISH },
  { label: i18n.t('languages.french'), value: Languages.FRENCH },
  { label: i18n.t('languages.ukrainian'), value: Languages.UKRAINIAN },
];

export default LANGUAGE_OPTIONS;
