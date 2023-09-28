import { createContext } from 'react';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';

const defaultValue = {
  selectedLanguage: Languages.ENGLISH,
  onSelectLanguage: () => {},
  selectedTemperatureUnit: TemperatureUnits.CELSIUS,
  onSelectTemperatureUnit: () => {},
};

const SettingsContext = createContext<typeof defaultValue>(defaultValue);

export default SettingsContext;
