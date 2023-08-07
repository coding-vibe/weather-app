/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import debounce from 'lodash';
import { useSnackbar } from 'notistack';
import { CITIES } from './citiesList';
import * as styles from './styles';

const DEBOUNCE_DELAY = 400;
const MIN_INPUT_LEN = 2;

export default function AutocompleteInput() {
  const [currentValue, setCurrentValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);
  const { enqueueSnackbar } = useSnackbar();
  const inputNotify = () => {
    enqueueSnackbar(
      `Sorry, we couldn't find any results that match your search. You should enter more than 2 letters and make sure that an existing city is included in the search`,
      { variant: 'error' },
    );
  };

  const onChange = debounce((_, value: string | null, reason: string) => {
    if (reason === 'selectOption' && value) {
      setCurrentValue(value);
    }
  }, DEBOUNCE_DELAY);

  const onInputChange = (e, value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue === '' || trimmedValue.length <= MIN_INPUT_LEN) {
      setInputValue('');
      setOptions([]);
      inputNotify();
    } else {
      setInputValue(trimmedValue);
      setOptions(
        CITIES.filter((city) =>
          city.toLowerCase().includes(trimmedValue.toLowerCase()),
        ),
      );
    }
  };

  console.log(inputValue);
  console.log(currentValue);

  return (
    <Autocomplete
      disablePortal
      id='cities-select'
      options={options}
      sx={{ width: 300 }}
      value={currentValue}
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
