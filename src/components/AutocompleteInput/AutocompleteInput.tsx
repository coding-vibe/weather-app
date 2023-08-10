import { SyntheticEvent, useState, useMemo, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CircularProgress } from '@mui/material';
import { debounce } from 'lodash';
import { useSnackbar } from 'notistack';
import { axiosDefaultConfig } from 'api/axiosDefaultConfig';
import { CITIES } from './citiesList';
import { ALFA2_COUNTRY_CODES } from './alfa2CountryCodes';
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

  console.log(geoData);
  useEffect(() => {
    const errorNotify = () => {
      enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' });
    };

    const fetchGeoData = async () => {
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

        const cityData = response.data.map((city: Location) => ({
          name: city.name,
          state: city.state,
          country: city.country,
          lat: city.lat,
          lon: city.lon,
        }));

        setGeoData(cityData);
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
    setInputValue(trimmedValue);

    if (isFirstInput) {
      setIsFirstInput(false);
    }

    if (trimmedValue === '' || trimmedValue.length <= MIN_INPUT_LEN) {
      setOptions([]);
      setLoadingStatus(false);
    } else {
      setLoadingStatus(true);
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
        onChange={debouncedOnChange}
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
      <div>
        {geoData &&
          geoData.map((city, index) => (
            <p key={index}>
              {city.name} - {city.state && `${city.state} -`}{' '}
              {
                ALFA2_COUNTRY_CODES.find(
                  (country) => country.code === city.country,
                )?.name
              }
            </p>
          ))}
      </div>
    </>
  );
}
