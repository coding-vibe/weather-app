import { useContext, useState } from 'react';
import LocationAutocomplete from 'components/LocationAutocomplete';
import Select from 'components/Select';
import WeatherWidget from 'components/WeatherWidget';
import LANGUAGE_OPTIONS from 'constants/languageOptions';
import Languages from 'constants/languages';
import TEMPERATURE_UNITS_OPTIONS from 'constants/temperatureUnitsOptions';
import TemperatureUnits from 'constants/temperatureUnits';
import SettingsContext from 'contexts/SettingsContext';
import SettingsContextType from 'types/settingsContextType';
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

export default function FutureForecast() {
  const {
    selectedLanguage,
    onSelectLanguage,
    selectedTemperatureUnit,
    onSelectTemperatureUnit,
  } = useContext<SettingsContextType>(SettingsContext);
  const [selectedLocation, onSelectLocation] = useState<Location | null>(null);
  return (
    <>
      <Select<LanguageOption>
        css={classes.languageSelect}
        value={selectedLanguage}
        setValue={onSelectLanguage}
        labelId={LANGUAGE_CHOICE_LABEL_ID}
        label={LANGUAGE_CHOICE_LABEL}
        options={LANGUAGE_OPTIONS}
      />
      <LocationAutocomplete
        css={classes.locationAutocomplete}
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
      {selectedLocation && <WeatherWidget location={selectedLocation} />}
    </>
  );
}
