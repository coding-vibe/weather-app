import { ReactNode, FC, useState, useCallback } from 'react';
import Languages from 'constants/languages';
import LanguageContext from 'contexts/LanguageContext';
import LanguageContextType from 'types/languageContextType';

interface Props {
  children: ReactNode;
}

// eslint-disable-next-line react/function-component-definition
const LanguageProvider: FC<Props> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Languages>(
    Languages.ENGLISH,
  );

  const onSelectLanguageCallback = useCallback((language: Languages) => {
    setSelectedLanguage(language);
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const language: LanguageContextType = {
    selectedLanguage,
    onSelectLanguage: onSelectLanguageCallback,
  };

  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
