import { createContext } from 'react';
import Languages from 'constants/languages';
import LanguageContextType from 'types/languageContextType';

const defaultValue: LanguageContextType = {
  selectedLanguage: Languages.ENGLISH,
  onSelectLanguage: () => {},
};

const LanguageContext = createContext<LanguageContextType>(defaultValue);

export default LanguageContext;
