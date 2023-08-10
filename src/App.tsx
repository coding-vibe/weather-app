import { useState } from 'react';
import AutocompleteInput from 'components/AutocompleteInput';
import FetchWeatherData from 'components/FetchWeatherData';

function App() {
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  return (
    <>
      <AutocompleteInput
        currentValue={selectedLocation}
        setCurrentValue={setSelectedLocation}
      />
      <FetchWeatherData />
    </>
  );
}

export default App;
