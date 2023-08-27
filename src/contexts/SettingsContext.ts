import { createContext } from 'react';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';
import SettingsContextType from 'types/settingsContextType';

const defaultValue: SettingsContextType = {
  selectedLanguage: Languages.ENGLISH,
  onSelectLanguage: () => {},
  selectedTemperatureUnit: TemperatureUnits.CELSIUS,
  onSelectTemperatureUnit: () => {},
};
const SettingsContext = createContext<SettingsContextType>(defaultValue);

export default SettingsContext;
