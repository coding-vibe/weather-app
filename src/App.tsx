import { useState } from 'react';
import LocationAutocomplete from 'components/LocationAutocomplete';
import WeatherWidget from 'components/WeatherWidget';
import Location from 'types/location';

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
      <WeatherWidget selectedLocation={selectedLocation} />
    </>
  );
}

export default App;
