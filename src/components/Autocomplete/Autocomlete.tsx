import { SyntheticEvent, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import debounce from 'lodash.debounce';
import { CITIES } from './citiesList';

export default function Autocomplele() {
  const [value, setValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);
  const DEBOUNCE_DELAY = 400;

  const onInputChange = debounce((e: SyntheticEvent, v: string) => {
    const trimmedValue = v.trim();
    if (trimmedValue === '' || trimmedValue.length < 2) {
      setInputValue('');
      setOptions([]);
      return;
    }
    setInputValue(trimmedValue);
    setOptions(CITIES);
  }, DEBOUNCE_DELAY);

  const onChange = debounce((e: SyntheticEvent, v: string | null) => {
    if (v !== null) {
      setValue(v);
    }
  }, DEBOUNCE_DELAY);

  console.log(inputValue);
  console.log(value);

  return (
    <Autocomplete
      disablePortal
      id='cities-select'
      options={options}
      sx={{ width: 300 }}
      onChange={onChange}
      onInputChange={onInputChange}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label='City'
        />
      )}
    />
  );
}
