import { useContext, useState } from 'react';
import LanguageProvider from 'components/LanguageProvider';
import LocationAutocomplete from 'components/LocationAutocomplete';
import Select from 'components/Select';
import WeatherWidget from 'components/WeatherWidget';
import LANGUAGE_OPTIONS from 'constants/languageOptions';
import Languages from 'constants/languages';
import TEMPERATURE_UNITS_OPTIONS from 'constants/temperatureUnitsOptions';
import TemperatureUnits from 'constants/temperatureUnits';
import LanguageContext from 'contexts/LanguageContext';
import Location from 'types/location';
import * as classes from './styles';

const LANGUAGE_CHOICE_LABEL_ID = 'language-label';
const LANGUAGE_CHOICE_LABEL = 'Language choice';
const LOCATION_AUTOCOMPLETE = 'location-select';
const TEMPERATURE_UNITS_LABEL_ID = 'unit-label';
const TEMPERATURE_UNITS_LABEL = 'Temperature unit';

interface LanguageOption {
  label: string;
  value: Languages;
}

interface TemperatureUnitOption {
  label: string;
  value: TemperatureUnits;
}

function App() {
  const { selectedLanguage, onSelectLanguage } = useContext(LanguageContext);
  const [selectedLocation, onSelectLocation] = useState<Location | null>(null);
  const [selectedTemperatureUnit, onSelectTemperatureUnit] =
    useState<TemperatureUnits>(TemperatureUnits.CELSIUS);

  return (
    <LanguageProvider>
      <Select<LanguageOption>
        css={classes.languageSelect}
        value={selectedLanguage}
        setValue={onSelectLanguage}
        labelId={LANGUAGE_CHOICE_LABEL_ID}
        label={LANGUAGE_CHOICE_LABEL}
        options={LANGUAGE_OPTIONS}
      />
      <LocationAutocomplete
        location={selectedLocation}
        setLocation={onSelectLocation}
        id={LOCATION_AUTOCOMPLETE}
      />
      <Select<TemperatureUnitOption>
        css={classes.temperatureUnitsSelect}
        value={selectedTemperatureUnit}
        setValue={onSelectTemperatureUnit}
        labelId={TEMPERATURE_UNITS_LABEL_ID}
        label={TEMPERATURE_UNITS_LABEL}
        options={TEMPERATURE_UNITS_OPTIONS}
      />
      {selectedLocation && (
        <WeatherWidget
          location={selectedLocation}
          temperatureUnit={selectedTemperatureUnit}
        />
      )}
    </LanguageProvider>
  );
}

export default App;
