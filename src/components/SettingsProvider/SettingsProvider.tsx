import { ReactNode, useCallback, useState } from 'react';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';
import SettingsContext from 'contexts/SettingsContext';
// TODO: @singvarr - please, check paths
import i18n from '../../i18n';

interface Props {
  children: ReactNode;
}

export default function SettingsProvider({ children }: Props) {
  const [language, setLanguage] = useState<Languages>(Languages.ENGLISH);
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnits>(
    TemperatureUnits.CELSIUS,
  );
  const onSelectLanguage = useCallback(async (language: Languages) => {
    await i18n.changeLanguage(language);
    setLanguage(language);
  }, []);
  const onSelectTemperatureUnit = useCallback(
    (temperatureUnit: TemperatureUnits) => {
      setTemperatureUnit(temperatureUnit);
    },
    [],
  );
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const settings = {
    language,
    onSelectLanguage,
    temperatureUnit,
    onSelectTemperatureUnit,
  };

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}
