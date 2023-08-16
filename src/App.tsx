import { useState } from 'react';
import LocationAutocomplete from 'components/LocationAutocomplete';
import WeatherWidget from 'components/WeatherWidget';
import Location from 'types/location';

const id = 'LOCATION_AUTOCOMPLETE';

function App() {
  const [selectedLocation, onSelectLocation] = useState<Location | null>(null);

  return (
    <>
      <LocationAutocomplete
        location={selectedLocation}
        setLocation={onSelectLocation}
        id={id}
      />
      {selectedLocation && <WeatherWidget location={selectedLocation} />}
    </>
  );
}

export default App;
