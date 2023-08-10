import { SyntheticEvent, useState, useEffect, useMemo } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CircularProgress } from '@mui/material';
import { debounce, pick } from 'lodash';
import { useSnackbar } from 'notistack';
import { axiosDefaultConfig } from 'api/axiosDefaultConfig';
import { CITIES } from './citiesList';
import { countrySearch } from './countrySearch';
import * as classes from './styles';

const DEBOUNCE_DELAY = 400;
const MIN_INPUT_LEN = 2;
const LIMIT_PARAM_VALUE = 5;
const ERROR_MESSAGE = `Sorry, we couldn't find any results that match your search.`;

interface Props {
  currentValue: string;
  // eslint-disable-next-line no-unused-vars
  setCurrentValue: (value: string) => void;
}

interface Location {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export default function AutocompleteInput({
  currentValue,
  setCurrentValue,
}: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const [options, setOptions] = useState<string[]>([]);
  const [isFirstInput, setIsFirstInput] = useState(true);
  const [inputValue, setInputValue] = useState<string>('');
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [geoData, setGeoData] = useState<Location[] | null>(null);

  useEffect(() => {
    const errorNotify = () => {
      enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' });
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const fetchGeoData = useMemo(
      () =>
        debounce(async () => {
          try {
            const response = await axiosDefaultConfig.get<Location[]>(
              '/geo/1.0/direct',
              {
                params: {
                  q: currentValue,
                  limit: LIMIT_PARAM_VALUE,
                },
              },
            );
            const locationData = pick(response.data, [
              'name',
              'state',
              'country',
              'lat',
              'lon',
            ]);
            setGeoData(locationData as Location[]);
          } catch (error) {
            console.log(error);
            errorNotify();
          }
        }, DEBOUNCE_DELAY),
      [],
    );
    if (currentValue && currentValue !== '') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetchGeoData();
    }
  }, [currentValue, enqueueSnackbar]);

  const onInputChange = (_: SyntheticEvent, value: string) => {
    const trimmedValue = value.trim();
    setInputValue(trimmedValue);

    if (isFirstInput) {
      setIsFirstInput(false);
    }
    if (trimmedValue === '' || trimmedValue.length <= MIN_INPUT_LEN) {
      setOptions([]);
      setLoadingStatus(false);
    } else {
      setLoadingStatus(true);
      const filteredCities = CITIES.filter((location) =>
        location.toLowerCase().includes(trimmedValue.toLowerCase()),
      );
      setOptions(filteredCities);
      setLoadingStatus(false);
    }
  };

  const onChange = (
    _: SyntheticEvent,
    value: string | null,
    reason: string | undefined,
  ) => {
    if (reason === 'selectOption' && value && value !== '') {
      setCurrentValue(value);
    }
  };

  return (
    <>
      <Autocomplete
        disablePortal
        id='cities-select'
        options={options}
        noOptionsText={isFirstInput ? null : ERROR_MESSAGE}
        css={classes.autocompleteStyles}
        inputValue={inputValue}
        onInputChange={onInputChange}
        value={currentValue}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            label='location'
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
      <div>
        {geoData &&
          geoData.map((location, index) => (
            <p key={index}>
              {location.name} - {location.state && `${location.state} -`}{' '}
              {countrySearch(location.country)}
            </p>
          ))}
      </div>
    </>
  );
}
