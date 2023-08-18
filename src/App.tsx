import { useState } from 'react';
import LocationAutocomplete from 'components/LocationAutocomplete';
import WeatherWidget from 'components/WeatherWidget';
import TemperatureUnitsSelect from 'components/TemperatureUnitsSelect';
import Location from 'types/location';
import Unit from 'types/unit';

const LOCATION_AUTOCOMPLETE = 'location-select';
const TEMPERATURE_UNITS_SELECT = 'unit-select';

function App() {
  const [selectedLocation, onSelectLocation] = useState<Location | null>(null);
  const [selectedUnit, onSelectUnit] = useState<Unit>('metric');

  return (
    <>
      <LocationAutocomplete
        location={selectedLocation}
        setLocation={onSelectLocation}
        id={LOCATION_AUTOCOMPLETE}
      />
      <TemperatureUnitsSelect
        unit={selectedUnit}
        setUnit={onSelectUnit}
        id={TEMPERATURE_UNITS_SELECT}
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
