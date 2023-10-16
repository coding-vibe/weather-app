import { createContext } from 'react';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';

const initialValue = {
  language: Languages.ENGLISH,
  onSelectLanguage: (_: Languages) => {},
  temperatureUnit: TemperatureUnits.CELSIUS,
  onSelectTemperatureUnit: (_: TemperatureUnits) => {},
};

const SettingsContext = createContext<typeof initialValue>(initialValue);

export default SettingsContext;
