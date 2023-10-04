import { useContext } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { t } from 'i18next';
import LocationAutocomplete from 'components/LocationAutocomplete';
import WeatherSearchCaption from 'components/WeatherSearchCaption';
import Select from 'components/Select';
import LANGUAGE_OPTIONS from 'constants/languageOptions';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';
import TEMPERATURE_UNITS_OPTIONS from 'constants/temperatureUnitsOptions';
import SettingsContext from 'contexts/SettingsContext';
import LanguageOption from 'types/languageOption';
import Location from 'types/location';
import TemperatureUnitOption from 'types/temperatureUnitOption';
import * as classes from './styles';

interface Props {
  location: Location | null;
  setLocation: (value: Location) => void;
}

export default function WeatherForecastForm({ location, setLocation }: Props) {
  const {
    language,
    onSelectLanguage,
    temperatureUnit,
    onSelectTemperatureUnit,
  } = useContext(SettingsContext);

  return (
    <div>
      <WeatherSearchCaption
        css={classes.caption}
        text={t('texts.propCaptionWeatherForecast')}
      />
      <div css={classes.wrap}>
        <Select<LanguageOption>
          css={classes.entry}
          setValue={(event: SelectChangeEvent) => {
            onSelectLanguage(event.target.value as Languages);
          }}
          value={language}
          label={t('labels.languageSelect')}
          labelId='language-select'
          options={LANGUAGE_OPTIONS}
        />
        <LocationAutocomplete
          css={classes.entry}
          id='location-select'
          location={location}
          setLocation={setLocation}
        />
        <Select<TemperatureUnitOption>
          css={classes.entry}
          setValue={(event: SelectChangeEvent<TemperatureUnits>) => {
            onSelectTemperatureUnit(event.target.value as TemperatureUnits);
          }}
          value={temperatureUnit}
          label={t('labels.temperatureUnitsSelect')}
          labelId='temperature-unit-select'
          options={TEMPERATURE_UNITS_OPTIONS}
        />
      </div>
    </div>
  );
}
