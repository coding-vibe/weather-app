import Languages from 'constants/languages';

interface LanguageContextType {
  selectedLanguage: Languages;
  onSelectLanguage: (value: Languages) => void;
}

export default LanguageContextType;
