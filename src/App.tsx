import { useState } from 'react';
import AutocompleteInput from 'components/AutocompleteInput';
import FetchWeatherData from 'components/FetchWeatherData';
import Location from 'components/AutocompleteInput/locationInterface';

function App() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );

  return (
    <>
      <AutocompleteInput
        currentValue={selectedLocation}
        setCurrentValue={setSelectedLocation}
      />
      <FetchWeatherData selectedLocation={selectedLocation} />
    </>
  );
}

export default App;
