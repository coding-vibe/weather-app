import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';

interface SettingsContextType {
  selectedLanguage: Languages;
  onSelectLanguage: (value: Languages) => void;
  selectedTemperatureUnit: TemperatureUnits;
  onSelectTemperatureUnit: (value: TemperatureUnits) => void;
}

export default SettingsContextType;
