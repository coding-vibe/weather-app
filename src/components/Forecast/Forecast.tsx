import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectChangeEvent } from '@mui/material/Select';
import LocationAutocomplete from 'components/LocationAutocomplete';
import Select from 'components/Select';
import WeatherSearchCaption from 'components/WeatherSearchCaption';
import WeatherWidget from 'components/WeatherWidget';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';
import TEMPERATURE_UNITS_OPTIONS from 'constants/temperatureUnitsOptions';
import SettingsContext from 'contexts/SettingsContext';
import LanguageOption from 'types/languageOption';
import LANGUAGE_OPTIONS from 'constants/languageOptions';
import Location from 'types/location';
import SettingsContextType from 'types/settingsContextType';
import TemperatureUnitOption from 'types/temperatureUnitOption';
import * as classes from './styles';

// TODO: let's leave us directly in JSX
const LANGUAGE_CHOICE_LABEL_ID = 'language-label';
const LOCATION_AUTOCOMPLETE = 'location-select';
const TEMPERATURE_UNITS_LABEL_ID = 'unit-label';

export default function Forecast() {
  const {
    selectedLanguage,
    onSelectLanguage,
    selectedTemperatureUnit,
    onSelectTemperatureUnit,
  } = useContext<SettingsContextType>(SettingsContext);
  const [selectedLocation, onSelectLocation] = useState<Location | null>(null);
  const { t } = useTranslation();
  return (
    <div>
      <div css={classes.wrap}>
        <WeatherSearchCaption
          css={[classes.caption, classes.entry]}
          text={t('texts.propCaptionForecast')}
        />
        <Select<LanguageOption>
          css={classes.entry}
          setValue={(event: SelectChangeEvent) => {
            onSelectLanguage(event.target.value as Languages);
          }}
          value={selectedLanguage}
          label={t('labels.languageSelect')}
          labelId={LANGUAGE_CHOICE_LABEL_ID}
          options={LANGUAGE_OPTIONS}
        />
        <LocationAutocomplete
          css={classes.entry}
          id={LOCATION_AUTOCOMPLETE}
          location={selectedLocation}
          setLocation={onSelectLocation}
        />
        <Select<TemperatureUnitOption>
          css={classes.entry}
          setValue={(event: SelectChangeEvent<TemperatureUnits>) => {
            onSelectTemperatureUnit(event.target.value as TemperatureUnits);
          }}
          value={selectedTemperatureUnit}
          label={t('labels.temperatureUnitsSelect')}
          labelId={TEMPERATURE_UNITS_LABEL_ID}
          options={TEMPERATURE_UNITS_OPTIONS}
        />
      </div>
      {/* TODO: !!selectedLocation */}
      {selectedLocation && <WeatherWidget location={selectedLocation} />}
    </div>
  );
}
