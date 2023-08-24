import { ReactNode, FC, useState } from 'react';
import Languages from 'constants/languages';
import LanguageContext from './LanguageContext';

interface Props {
  children: ReactNode;
}

const LanguageProvider: FC<Props> = function LanguageProvider({ children }) {
  const [selectedLanguage, onSelectLanguage] = useState<Languages>(
    Languages.ENGLISH,
  );

  return (
    <LanguageContext.Provider value={colorMode}>
      <LanguageProviderProvider theme={theme}>{children}</LanguageProviderProvider>
    </LanguageContext.Provider>
  );
};
