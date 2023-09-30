import { FC, ReactNode, useCallback, useState } from 'react';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';
import SettingsContext from 'contexts/SettingsContext';
import i18n from 'locales/i18n';

interface Props {
  children: ReactNode;
}
// TODO: fix it
// eslint-disable-next-line react/function-component-definition
const SettingsProvider: FC<Props> = ({ children }) => {
  // TODO: language, temperatureUnit
  const [selectedLanguage, setSelectedLanguage] = useState<Languages>(
    Languages.ENGLISH,
  );
  const [selectedTemperatureUnit, setSelectedTemperatureUnit] =
    useState<TemperatureUnits>(TemperatureUnits.CELSIUS);
  // TODO: don't use callback word in function name. onSelectLanguage, onSelectTemperatureUnit
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
  const settings = {
    selectedLanguage,
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
