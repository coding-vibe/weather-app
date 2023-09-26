import { FC, ReactNode, useCallback, useState } from 'react';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';
import SettingsContext from 'contexts/SettingsContext';
import SettingsContextType from 'types/settingsContextType';
import i18n from 'i18n';

interface Props {
  children: ReactNode;
}
// eslint-disable-next-line react/function-component-definition
const SettingsProvider: FC<Props> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Languages>(
    Languages.ENGLISH,
  );
  const [selectedTemperatureUnit, setSelectedTemperatureUnit] =
    useState<TemperatureUnits>(TemperatureUnits.CELSIUS);
  const onSelectLanguageCallback = useCallback(async (language: Languages) => {
    await i18n.changeLanguage(language);
    setSelectedLanguage(language);
  }, []);
  const onSelectTemperatureUnitCallback = useCallback(
    (temperatureUnit: TemperatureUnits) => {
      setSelectedTemperatureUnit(temperatureUnit);
    },
    [],
  );
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const settings: SettingsContextType = {
    selectedLanguage,
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    onSelectLanguage: onSelectLanguageCallback,
    selectedTemperatureUnit,
    onSelectTemperatureUnit: onSelectTemperatureUnitCallback,
  };
  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
