/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { SyntheticEvent, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import debounce from 'lodash.debounce';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { CITIES } from './citiesList';

export default function Autocomplele() {
  const [value, setValue] = useState<string>('');
  // const [value, setValue] = useState(CITIES[0]);
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);
  const DEBOUNCE_DELAY = 400;

  const onChange = debounce((e: SyntheticEvent, v: string | null) => {
    if (v !== null) {
      setValue(v);
    }
  }, DEBOUNCE_DELAY);

  const onInputChange = debounce((e: SyntheticEvent, v: string) => {
    const trimmedValue = v.trim();
    if (trimmedValue === '' || trimmedValue.length <= 2) {
      setInputValue('');
      setOptions([]);
      enqueueSnackbar(
        `Sorry, we couldn't find any results that match your search. You should enter more than 2 letters and make sure that an existing city is included in the search`,
      );
      return;
    }
    setInputValue(trimmedValue);
    setOptions(CITIES);
  }, DEBOUNCE_DELAY);

  // console.log(inputValue);
  console.log(value);

  return (
    <>
      <SnackbarProvider />
      <Autocomplete
        disablePortal
        disableCloseOnSelect
        id='cities-select'
        options={options}
        sx={{ width: 300 }}
        value={value}
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
    </>
  );
}
