import { useState } from 'react';
import ForecastForm from 'components/ForecastForm';
import WeatherWidget from 'components/WeatherWidget';
import Location from 'types/location';

export default function ForecastTab() {
  const [selectedLocation, onSelectLocation] = useState<Location | null>(null);

  return (
    <div>
      <ForecastForm
        location={selectedLocation}
        setLocation={onSelectLocation}
      />
      {!!selectedLocation && <WeatherWidget location={selectedLocation} />}
    </div>
  );
}
