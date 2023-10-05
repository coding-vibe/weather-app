import { ReactNode, useContext, useEffect, useState } from 'react';
// https://github.com/date-fns/date-fns/issues/1677
// eslint-disable-next-line import/no-duplicates
import { Locale as DateFnsLocale } from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import { enUS as en, fr, uk } from 'date-fns/locale';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider as MUILocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { enUS } from '@mui/x-date-pickers/locales/enUS';
import { frFR } from '@mui/x-date-pickers/locales/frFR';
import { ukUA } from '@mui/x-date-pickers/locales/ukUA';
import Languages from 'constants/languages';
import SettingsContext from 'contexts/SettingsContext';

interface Props {
  children: ReactNode;
}

type MUILocale = typeof enUS | typeof frFR | typeof ukUA;
type Locales = [MUILocale, DateFnsLocale];

export default function LocalizationProvider({ children }: Props) {
  const { language } = useContext(SettingsContext);
  const [locales, setLocales] = useState<Locales>([enUS, en]);
  const [muiLocale, dateFnsLocale] = locales;

  const getMUILocale = (language: Languages) => {
    switch (language) {
      case Languages.ENGLISH:
        return enUS;
      case Languages.FRENCH:
        return frFR;
      case Languages.UKRAINIAN:
        return ukUA;
      default:
        throw new Error('New language found');
    }
  };

  const getDateFnsLocale = (language: Languages) => {
    switch (language) {
      case Languages.ENGLISH:
        return en;
      case Languages.FRENCH:
        return fr;
      case Languages.UKRAINIAN:
        return uk;
      default:
        throw new Error('Not supported language');
    }
  };

  useEffect(() => {
    setLocales([getMUILocale(language), getDateFnsLocale(language)]);
  }, [language]);

  return (
    <MUILocalizationProvider
      adapterLocale={dateFnsLocale}
      dateAdapter={AdapterDateFns}
      localeText={
        muiLocale.components.MuiLocalizationProvider.defaultProps.localeText
      }>
      {children}
    </MUILocalizationProvider>
  );
}
