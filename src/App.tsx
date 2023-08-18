import { useState } from 'react';
import LocationAutocomplete from 'components/LocationAutocomplete';
import WeatherWidget from 'components/WeatherWidget';
import MeasurementSelect from 'components/MeasurementSelect';
import Location from 'types/location';

const LOCATION_AUTOCOMPLETE = 'location-select';
const MEASUREMENT_SELECT = 'unit-select';

function App() {
  const [selectedLocation, onSelectLocation] = useState<Location | null>(null);
  const [selectedUnit, onSelectUnit] = useState('metric');

  return (
    <>
      <LocationAutocomplete
        location={selectedLocation}
        setLocation={onSelectLocation}
        id={LOCATION_AUTOCOMPLETE}
      />
      <MeasurementSelect
        unit={selectedUnit}
        setUnit={onSelectUnit}
        id={MEASUREMENT_SELECT}
      />
      {selectedLocation && (
        <WeatherWidget
          location={selectedLocation}
          unit={selectedUnit}
        />
      )}
    </>
  );
}

export default App;
