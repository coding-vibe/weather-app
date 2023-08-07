/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { SyntheticEvent, useState, useMemo } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CircularProgress } from '@mui/material';
import { debounce } from 'lodash';
import { useSnackbar } from 'notistack';
import { CITIES } from './citiesList';
import * as styles from './styles';

const TIMEOUT_DELAY = 1000;
const DEBOUNCE_DELAY = 400;
const MIN_INPUT_LEN = 2;
const FAILED_FETCH_MESSAGE = `Sorry, we couldn't find any results that match your search. You should enter more than 2 letters and make sure that an existing city is included in the search`;
const NO_OPTIONS_TEXT = `Sorry, we couldn't find any results that match your search.`;

export default function AutocompleteInput() {
  const [options, setOptions] = useState<string[]>([]);
  const [isFirstInput, setIsFirstInput] = useState(true);
  const [inputValue, setInputValue] = useState<string>('');
  const [currentValue, setCurrentValue] = useState<string>('');
  const [loadingStatus, setLoadingStatus] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const inputNotify = () => {
    enqueueSnackbar(FAILED_FETCH_MESSAGE, { variant: 'error' });
  };

  const onInputChange = (_: SyntheticEvent, value: string) => {
    const trimmedValue = value.trim();

    if (isFirstInput) {
      setIsFirstInput(false);
    }

    if (trimmedValue === '' || trimmedValue.length <= MIN_INPUT_LEN) {
      setInputValue('');
      setOptions([]);
      setLoadingStatus(false);
      inputNotify();
    } else {
      setLoadingStatus(true);
      setInputValue(trimmedValue);
      setTimeout(() => {
        const filteredCities = CITIES.filter((city) =>
          city.toLowerCase().includes(trimmedValue.toLowerCase()),
        );
        setOptions(filteredCities);
        setLoadingStatus(false);
      }, TIMEOUT_DELAY);
    }
  };

  const debouncedOnChange = useMemo(
    () =>
      debounce(
        (
          _: SyntheticEvent,
          value: string | null,
          reason: string | undefined,
        ) => {
          if (reason === 'selectOption' && value !== null && value !== '') {
            setCurrentValue(value);
          }
        },
        DEBOUNCE_DELAY,
      ),
    [],
  );

  // console.log(inputValue);
  console.log(currentValue);

  return (
    <Autocomplete
      disablePortal
      id='cities-select'
      options={options}
      noOptionsText={isFirstInput ? null : NO_OPTIONS_TEXT}
      sx={{ width: 300 }}
      value={currentValue}
      onChange={debouncedOnChange}
      onInputChange={onInputChange}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label='City'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loadingStatus ? <CircularProgress size={25} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
