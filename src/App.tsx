import { useState } from 'react';
import LocationAutocomplete from 'components/LocationAutocomplete';
import WeatherWidget from 'components/WeatherWidget';
import TemperatureUnitsSelect from 'components/TemperatureUnitsSelect';
import TemperatureUnits from 'constants/temperatureUnits';
import Location from 'types/location';
import * as classes from './styles';

const LOCATION_AUTOCOMPLETE = 'location-select';
const TEMPERATURE_UNITS_SELECT = 'unit-select';

function App() {
  const [selectedLocation, onSelectLocation] = useState<Location | null>(null);
  const [selectedTemperatureUnit, onSelectTemperatureUnit] =
    useState<TemperatureUnits>(TemperatureUnits.CELSIUS);

  return (
    <>
      <LocationAutocomplete
        location={selectedLocation}
        setLocation={onSelectLocation}
        id={LOCATION_AUTOCOMPLETE}
      />
      <TemperatureUnitsSelect
        css={classes.temperatureUnitsSelect}
        temperatureUnit={selectedTemperatureUnit}
        setTemperatureUnit={onSelectTemperatureUnit}
        id={TEMPERATURE_UNITS_SELECT}
      />
      {selectedLocation && (
        <WeatherWidget
          location={selectedLocation}
          temperatureUnit={selectedTemperatureUnit}
        />
      )}
    </>
  );
}

export default App;
