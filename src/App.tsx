import { useState } from 'react';
import LocationAutocomplete from 'components/LocationAutocomplete';
import WeatherWidget from 'components/WeatherWidget';
import MeasurementSelect from 'components/MeasurementSelect';
import Location from 'types/location';

const LOCATION_AUTOCOMPLETE = 'location-select';

function App() {
  const [selectedLocation, onSelectLocation] = useState<Location | null>(null);

  return (
    <>
      <LocationAutocomplete
        location={selectedLocation}
        setLocation={onSelectLocation}
        id={LOCATION_AUTOCOMPLETE}
      />
      <MeasurementSelect />
      {selectedLocation && <WeatherWidget location={selectedLocation} />}
    </>
  );
}

export default App;
