import { useState } from 'react';
import LocationSelector from 'components/LocationSelector';
import FetchWeatherData from 'components/FetchWeatherData';
import Location from 'components/LocationSelector/location';

function App() {
  const [selectedLocation, onSelectedLocation] = useState<Location | null>(
    null,
  );

  return (
    <>
      <LocationSelector
        selectedLocation={selectedLocation}
        onSelectedLocation={onSelectedLocation}
      />
      <FetchWeatherData />
    </>
  );
}

export default App;
