import { useState } from 'react';
import AdaptiveSelect from 'components/AdaptiveSelect';
import LocationAutocomplete from 'components/LocationAutocomplete';
import WeatherWidget from 'components/WeatherWidget';
import LANGUAGE_OPTIONS from 'components/AdaptiveSelect/languageOptions';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';
import Location from 'types/location';
import LanguageContext from 'contexts/LanguageContext';
import * as classes from './styles';

const LOCATION_AUTOCOMPLETE = 'location-select';
const TEMPERATURE_UNITS_LABEL_ID = 'unit-label';
const TEMPERATURE_UNITS_SELECT = 'unit-select';
const TEMPERATURE_UNITS_LABEL = 'Temperature unit';
const LANGUAGE_CHOICE_LABEL_ID = 'language-label';
const LANGUAGE_SELECT = 'language-select';
const LANGUAGE_CHOICE_LABEL = 'Language choice';

interface LanguageOption {
  value: Languages;
  label: string;
}

function App() {
  const [selectedLocation, onSelectLocation] = useState<Location | null>(null);
  const [selectedTemperatureUnit, onSelectTemperatureUnit] =
    useState<TemperatureUnits>(TemperatureUnits.CELSIUS);
  const [selectedLanguage, onSelectLanguage] = useState<Languages>(
    Languages.ENGLISH,
  );

  return (
    <LanguageContext.Provider value={selectedLanguage}>
      {/* TODO: correct type */}
      <AdaptiveSelect<LanguageOption>
        css={classes.languageSelect}
        value={selectedLanguage}
        setValue={onSelectLanguage}
        labelId={LANGUAGE_CHOICE_LABEL_ID}
        id={LANGUAGE_SELECT}
        label={LANGUAGE_CHOICE_LABEL}
        options={LANGUAGE_OPTIONS}
      />
      <LocationAutocomplete
        location={selectedLocation}
        setLocation={onSelectLocation}
        id={LOCATION_AUTOCOMPLETE}
      />
      <AdaptiveSelect
        css={classes.temperatureUnitsSelect}
        value={selectedTemperatureUnit}
        setValue={onSelectTemperatureUnit}
        labelId={TEMPERATURE_UNITS_LABEL_ID}
        id={TEMPERATURE_UNITS_SELECT}
        label={TEMPERATURE_UNITS_LABEL}
      />
      {selectedLocation && (
        <WeatherWidget
          location={selectedLocation}
          temperatureUnit={selectedTemperatureUnit}
        />
      )}
    </LanguageContext.Provider>
  );
}

export default App;
