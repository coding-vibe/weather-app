import { createContext } from 'react';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';

const defaultValue = {
  selectedLanguage: Languages.ENGLISH,
  onSelectLanguage: (_: Languages) => {},
  selectedTemperatureUnit: TemperatureUnits.CELSIUS,
  onSelectTemperatureUnit: (_: TemperatureUnits) => {},
};

const SettingsContext = createContext<typeof defaultValue>(defaultValue);

export default SettingsContext;
