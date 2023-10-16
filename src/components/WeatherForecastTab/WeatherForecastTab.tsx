import { useState } from 'react';
import WeatherForecastForm from 'components/WeatherForecastForm';
import WeatherWidget from 'components/WeatherWidget';
import Location from 'types/location';
import * as classes from './styles';

export default function WeatherForecastTab() {
  const [selectedLocation, onSelectLocation] = useState<Location | null>(null);

  return (
    <div>
      <WeatherForecastForm
        location={selectedLocation}
        setLocation={onSelectLocation}
      />
      {!!selectedLocation && (
        <WeatherWidget
          css={classes.widget}
          location={selectedLocation}
        />
      )}
    </div>
  );
}
