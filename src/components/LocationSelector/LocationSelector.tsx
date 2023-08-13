import { SyntheticEvent, useState, useMemo, useEffect } from 'react';
import Autocomplete, {
  AutocompleteChangeReason,
} from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import debounce from 'lodash/debounce';
import pick from 'lodash/pick';
import { useSnackbar } from 'notistack';
import { axiosDefaultConfig } from 'api/axiosDefaultConfig';
import Location from 'components/LocationSelector/location';
import { COUNTRY_CODES } from './countryCodes';
import * as classes from './styles';

const DEBOUNCE_DELAY = 400;
const MIN_INPUT_LEN = 2;
const LIMIT_PARAM_VALUE = 5;
const ERROR_MESSAGE =
  'Sorry, we could not find any results that match your search.';
const SPINNER_SIZE = 25;

interface Props {
  selectedLocation: Location | null;
  onSelectedLocation: (value: Location) => void;
}

export default function LocationSelector({
  selectedLocation,
  onSelectedLocation,
}: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const [inputValue, onInputValue] = useState<string>('');
  const [suggestions, onSuggestions] = useState<Location[]>([]);
  const [isOpen, onIsOpen] = useState(false);
  const [isLoading, onIsLoading] = useState(false);

  const fetchGeoData = useMemo(
    () =>
      debounce(async () => {
        if (inputValue === '' || inputValue.length <= MIN_INPUT_LEN) {
          onSuggestions([]);
          onIsLoading(false);
        } else {
          try {
            onIsLoading(true);
            const response = await axiosDefaultConfig.get<Location[]>(
              '/geo/1.0/direct',
              {
                params: {
                  q: inputValue,
                  limit: LIMIT_PARAM_VALUE,
                },
              },
            );
            const locationData = response.data.map((location) =>
              pick(location, ['name', 'state', 'country', 'lat', 'lon']),
            );

            onSuggestions(locationData);
          } catch (error) {
            console.log(error);
            enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' });
          } finally {
            onIsLoading(false);
          }
        }
      }, DEBOUNCE_DELAY),
    [enqueueSnackbar, inputValue],
  );

  useEffect(() => {
    if (inputValue) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetchGeoData();
    }
  }, [fetchGeoData, inputValue]);

  const onOpen = () => onIsOpen(true);

  const onClose = () => onIsOpen(false);

  const onInputChange = (_: SyntheticEvent, value: string) => {
    const trimmedValue = value.trim();
    onInputValue(trimmedValue);
  };

  const onChange = (
    _: SyntheticEvent,
    value: Location | null,
    reason: AutocompleteChangeReason,
  ) => {
    if (reason === 'selectOption' && value) {
      onSelectedLocation(value);
    }
  };

  const countrySearch = (countryCode: string) =>
    COUNTRY_CODES.find((country) => country.code === countryCode)?.name;

  const getOptionLabel = (option: Location) => {
    const state = option.state ? `${option.state} - ` : '';
    const country = countrySearch(option.country);
    return `${option.name} - ${state}${country}`;
  };

  return (
    <Autocomplete
      disablePortal
      id='cities-select'
      css={classes.autocompleteStyles}
      open={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      options={suggestions}
      noOptionsText={isOpen && !isLoading ? ERROR_MESSAGE : null}
      inputValue={inputValue}
      onInputChange={onInputChange}
      value={selectedLocation}
      onChange={onChange}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label='Location for search'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? <CircularProgress size={SPINNER_SIZE} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
