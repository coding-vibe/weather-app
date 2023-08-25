import { ReactNode, FC, useMemo, useState } from 'react';
import Languages from 'constants/languages';
import LanguageContext from 'contexts/LanguageContext';
import LanguageContextType from 'types/languageContextType';

interface Props {
  children: ReactNode;
}

const LanguageProvider: FC<Props> = function LanguageProvider({ children }) {
  const [selectedLanguage, onSelectLanguage] = useState<Languages>(
    Languages.ENGLISH,
  );

  const language: LanguageContextType = useMemo(
    () => ({ selectedLanguage, onSelectLanguage }),
    [selectedLanguage, onSelectLanguage],
  );

  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
