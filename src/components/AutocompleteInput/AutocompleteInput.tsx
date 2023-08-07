/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { SyntheticEvent, useState, useCallback } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import debounce from 'lodash/debounce';
import { useSnackbar } from 'notistack';
import { CITIES } from './citiesList';
import * as styles from './styles';

const TIMEOUT_DELAY = 1000;
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

  const onInputChange = (_: SyntheticEvent, value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue === '' || trimmedValue.length <= MIN_INPUT_LEN) {
      setInputValue('');
      setOptions([]);
      inputNotify();
    } else {
      setTimeout(() => {
        setInputValue(trimmedValue);
        setOptions(
          CITIES.filter((city) =>
            city.toLowerCase().includes(trimmedValue.toLowerCase()),
          ),
        );
      }, TIMEOUT_DELAY);
    }
  };

  const onChange = useCallback(
    debounce(
      (_: SyntheticEvent, value: string | null, reason: string | undefined) => {
        if (reason === 'selectOption' && value !== null) {
          setCurrentValue(value);
        }
      },
      DEBOUNCE_DELAY,
    ),
    [setCurrentValue],
  );

  console.log(inputValue);
  // console.log(currentValue);

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
