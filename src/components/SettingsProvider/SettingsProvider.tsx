import { ReactNode, useCallback, useState } from 'react';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';
import SettingsContext from 'contexts/SettingsContext';
import i18n from '../../i18n';

interface Props {
  children: ReactNode;
}

export default function SettingsProvider({ children }: Props) {
  const [language, setLanguage] = useState<Languages>(Languages.ENGLISH);
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnits>(
    TemperatureUnits.CELSIUS,
  );
  const onSelectLanguage = useCallback(async (selectedLanguage: Languages) => {
    await i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
  }, []);
  const onSelectTemperatureUnit = useCallback(
    (selectedUnit: TemperatureUnits) => {
      setTemperatureUnit(selectedUnit);
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
