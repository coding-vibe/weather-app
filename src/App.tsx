import { useState } from 'react';
import LocationAutocomplete from 'components/LocationAutocomplete';
import FetchWeatherData from 'components/FetchWeatherData';
import Location from 'components/LocationAutocomplete/location';

function App() {
  const [selectedLocation, onSelectLocation] = useState<Location | null>(null);
  const id = 'location-select';

  return (
    <>
      <LocationAutocomplete
        selectedLocation={selectedLocation}
        onSelectLocation={onSelectLocation}
        id={id}
      />
      <FetchWeatherData selectedLocation={selectedLocation} />
    </>
  );
}

export default App;
