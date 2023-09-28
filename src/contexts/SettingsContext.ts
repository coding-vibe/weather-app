import { createContext } from 'react';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';
import SettingsContextType from 'types/settingsContextType';

// TODO: use typeof defaultValue in order to infer context type
const defaultValue: SettingsContextType = {
  selectedLanguage: Languages.ENGLISH,
  onSelectLanguage: () => {},
  selectedTemperatureUnit: TemperatureUnits.CELSIUS,
  onSelectTemperatureUnit: () => {},
};

const SettingsContext = createContext<SettingsContextType>(defaultValue);

export default SettingsContext;
