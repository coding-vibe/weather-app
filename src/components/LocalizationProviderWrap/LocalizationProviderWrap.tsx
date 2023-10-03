import { ReactNode, useContext } from 'react';
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

export default function LocalizationProviderWrap({ children }: Props) {
  const { language } = useContext(SettingsContext);
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

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      localeText={
        getLocale(language).components.MuiLocalizationProvider.defaultProps
          .localeText
      }>
      {children}
    </LocalizationProvider>
  );
}
