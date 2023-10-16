import { createContext } from 'react';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';

const initialValue = {
  language: Languages.ENGLISH,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSelectLanguage: (_: Languages) => {},
  temperatureUnit: TemperatureUnits.CELSIUS,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSelectTemperatureUnit: (_: TemperatureUnits) => {},
};

const SettingsContext = createContext<typeof initialValue>(initialValue);

export default SettingsContext;
