/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { SyntheticEvent, useState, useMemo, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CircularProgress } from '@mui/material';
import { debounce } from 'lodash';
import { useSnackbar } from 'notistack';
import { axiosDefaultConfig } from 'api/axiosDefaultConfig';
import { CITIES } from './citiesList';
import * as classes from './styles';

const DEBOUNCE_DELAY = 400;
const MIN_INPUT_LEN = 2;
const LIMIT_PARAM_VALUE = 5;
const FAILED_FETCH_MESSAGE = `Sorry, we couldn't find any results that match your search.`;
const NO_OPTIONS_TEXT = `Sorry, we couldn't find any results that match your search.`;

interface Props {
  currentValue: string;
  setCurrentValue: (value: string) => void;
}

// TODO: Describe the type of data in interface below
interface FetchedGeoData {}

export default function AutocompleteInput({
  currentValue,
  setCurrentValue,
}: Props) {
  const [options, setOptions] = useState<string[]>([]);
  const [isFirstInput, setIsFirstInput] = useState(true);
  const [inputValue, setInputValue] = useState<string>('');
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [geoData, setGeoData] = useState<FetchedGeoData | null>(null);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const errorNotify = () => {
      enqueueSnackbar(FAILED_FETCH_MESSAGE, { variant: 'error' });
    };

    const fetchGeoData = async () => {
      try {
        const response = await axiosDefaultConfig.get<FetchedGeoData>(
          '/geo/1.0/direct',
          {
            params: {
              q: currentValue,
              limit: LIMIT_PARAM_VALUE,
            },
          },
        );
        setGeoData(response.data);
      } catch (error) {
        console.log(error);
        errorNotify();
      }
    };
    if (currentValue && currentValue !== '') {
      fetchGeoData().catch((error) => {
        console.log(error);
        errorNotify();
      });
    }
  }, [currentValue, enqueueSnackbar]);

  const onInputChange = (_: SyntheticEvent, value: string) => {
    const trimmedValue = value.trim();
    if (isFirstInput) {
      setIsFirstInput(false);
    }

    if (trimmedValue === '' || trimmedValue.length <= MIN_INPUT_LEN) {
      setInputValue('');
      setOptions([]);
      setLoadingStatus(false);
    } else {
      setLoadingStatus(true);
      setInputValue(trimmedValue);
      const filteredCities = CITIES.filter((city) =>
        city.toLowerCase().includes(trimmedValue.toLowerCase()),
      );
      setOptions(filteredCities);
      setLoadingStatus(false);
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
          if (reason === 'selectOption' && value && value !== '') {
            setCurrentValue(value);
          }
        },
        DEBOUNCE_DELAY,
      ),
    [setCurrentValue],
  );

  return (
    <Autocomplete
      disablePortal
      id='cities-select'
      options={options}
      noOptionsText={isFirstInput ? null : NO_OPTIONS_TEXT}
      css={classes.autocompleteStyles}
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
