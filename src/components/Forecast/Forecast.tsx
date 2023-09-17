import { useContext, useState } from 'react';
import ArrowIcon from '@mui/icons-material/ArrowCircleDownSharp';
import { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
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
    <div>
      <div css={classes.wrap}>
        <Typography
          component='p'
          css={classes.text}
          variant='overline'>
          Choose options for 5-day weather forecast search&nbsp;
        </Typography>
        <ArrowIcon css={classes.icon} />
      </div>
      <Select<LanguageOption>
        css={classes.select}
        setValue={(event: SelectChangeEvent) => {
          onSelectLanguage(event.target.value as Languages);
        }}
        value={selectedLanguage}
        label={LANGUAGE_CHOICE_LABEL}
        labelId={LANGUAGE_CHOICE_LABEL_ID}
        options={LANGUAGE_OPTIONS}
      />
      <LocationAutocomplete
        css={classes.autocomplete}
        id={LOCATION_AUTOCOMPLETE}
        location={selectedLocation}
        setLocation={onSelectLocation}
      />
      <Select<TemperatureUnitOption>
        css={classes.select}
        setValue={(event: SelectChangeEvent) => {
          onSelectTemperatureUnit(event.target.value as TemperatureUnits);
        }}
        value={selectedTemperatureUnit}
        label={TEMPERATURE_UNITS_LABEL}
        labelId={TEMPERATURE_UNITS_LABEL_ID}
        options={TEMPERATURE_UNITS_OPTIONS}
      />
      {selectedLocation && <WeatherWidget location={selectedLocation} />}
    </div>
  );
}
