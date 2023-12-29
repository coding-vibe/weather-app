import { t } from 'i18next';
import LocationAutocomplete from 'components/LocationAutocomplete';
import WeatherSearchCaption from 'components/WeatherSearchCaption';
import Location from 'types/location';
import * as classes from './styles';

interface Props {
  location: Location | null;
  setLocation: (value: Location) => void;
}

export default function WeatherForecastForm({ location, setLocation }: Props) {
  return (
    <div>
      <WeatherSearchCaption
        css={classes.caption}
        text={t('texts.captionWeatherForecast')}
      />
      <div css={classes.wrap}>
        <LocationAutocomplete
          css={classes.entry}
          id='location-select'
          location={location}
          setLocation={setLocation}
        />
      </div>
    </div>
  );
}
