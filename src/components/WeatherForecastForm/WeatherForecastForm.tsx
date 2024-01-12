import LocationAutocomplete from 'components/LocationAutocomplete';
import Location from 'types/location';
import * as classes from './styles';

interface Props {
  location: Location | null;
  setLocation: (value: Location) => void;
}

export default function WeatherForecastForm({ location, setLocation }: Props) {
  return (
    <div css={classes.wrap}>
      <LocationAutocomplete
        css={classes.entry}
        id='location-select'
        location={location}
        setLocation={setLocation}
      />
    </div>
  );
}
