import { useState } from 'react';
import AutocompleteInput from 'components/AutocompleteInput';
import FetchWeatherData from 'components/FetchWeatherData';

function App() {
  const [selectedCity, setSelectedCity] = useState<string>('');

  return (
    <>
      <AutocompleteInput
        currentValue={selectedCity}
        setCurrentValue={setSelectedCity}
      />
      <FetchWeatherData />
    </>
  );
}

export default App;
