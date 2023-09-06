import { useContext, useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import LocationAutocomplete from 'components/LocationAutocomplete';
import Select from 'components/Select';
import WeatherWidget from 'components/WeatherWidget';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';
import TEMPERATURE_UNITS_OPTIONS from 'constants/temperatureUnitsOptions';
import SettingsContext from 'contexts/SettingsContext';
import LanguageOption from 'types/languageOption';
import LANGUAGE_OPTIONS from 'types/languageOptions';
import Location from 'types/location';
import SettingsContextType from 'types/settingsContextType';
import TemperatureUnitOption from 'types/temperatureUnitOption';
import * as classes from './styles';

const LANGUAGE_CHOICE_LABEL_ID = 'language-label';
const LANGUAGE_CHOICE_LABEL = 'Language';
const LOCATION_AUTOCOMPLETE = 'location-select';
const TEMPERATURE_UNITS_LABEL_ID = 'unit-label';
const TEMPERATURE_UNITS_LABEL = 'Temperature unit';

export default function Forecast() {
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
        setValue={(event: SelectChangeEvent) => {
          onSelectLanguage(event.target.value as Languages);
        }}
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
        setValue={(event: SelectChangeEvent) => {
          onSelectTemperatureUnit(event.target.value as TemperatureUnits);
        }}
        labelId={TEMPERATURE_UNITS_LABEL_ID}
        label={TEMPERATURE_UNITS_LABEL}
        options={TEMPERATURE_UNITS_OPTIONS}
      />
      {selectedLocation && <WeatherWidget location={selectedLocation} />}
    </>
  );
}
