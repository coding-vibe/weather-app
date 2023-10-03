import { ReactNode, useContext, useEffect, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { enUS } from '@mui/x-date-pickers/locales/enUS';
import { frFR } from '@mui/x-date-pickers/locales/frFR';
import { ukUA } from '@mui/x-date-pickers/locales/ukUA';
import Languages from 'constants/languages';
import SettingsContext from 'contexts/SettingsContext';

interface Props {
  children: ReactNode;
}

type Locales = typeof enUS | typeof frFR | typeof ukUA;

export default function LocalizationProviderWrap({ children }: Props) {
  const { language } = useContext(SettingsContext);
  const [locale, setLocale] = useState<Locales>(enUS);

  const getLocale = (language: Languages) => {
    switch (language) {
      case 'en':
        return enUS;
      case 'fr':
        return frFR;
      case 'ua':
        return ukUA;
      default:
        throw new Error('New language found');
    }
  };

  useEffect(() => {
    setLocale(getLocale(language));
  }, [language]);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      localeText={
        locale.components.MuiLocalizationProvider.defaultProps.localeText
      }>
      {children}
    </LocalizationProvider>
  );
}
