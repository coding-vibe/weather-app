import { useState } from 'react';
import WeatherForecastForm from 'components/WeatherForecastForm';
import WeatherWidget from 'components/WeatherWidget';
import Location from 'types/location';

export default function WeatherForecastTab() {
  const [selectedLocation, onSelectLocation] = useState<Location | null>(null);

  return (
    <div>
      <WeatherForecastForm
        location={selectedLocation}
        setLocation={onSelectLocation}
      />
      {!!selectedLocation && <WeatherWidget location={selectedLocation} />}
    </div>
  );
}
