import { SyntheticEvent, useState, useMemo, useEffect } from 'react';
import Autocomplete, {
  AutocompleteChangeReason,
} from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import debounce from 'lodash/debounce';
import pick from 'lodash/pick';
import { useSnackbar } from 'notistack';
import apiClient from 'api';
import Location from 'types/location';
import findCountryNameByCode from 'utils/findCountryNameByCode';
import * as classes from './styles';

const DEBOUNCE_DELAY = 400;
const MIN_INPUT_LEN = 2;
const MAX_LOCATIONS = 5;
const SPINNER_SIZE = 25;

interface Props {
  location: Location | null;
  setLocation: (value: Location) => void;
  id: string;
}

export default function LocationAutocomplete({
  location,
  setLocation,
  id,
}: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const [inputValue, onInputValue] = useState<string>('');
  const [suggestions, onSuggestions] = useState<Location[]>([]);
  const [isOpen, onIsOpen] = useState(false);
  const [isLoading, onIsLoading] = useState(false);

  const fetchGeoData = useMemo(
    () =>
      debounce(async (value: string) => {
        if (value === '' || value.length <= MIN_INPUT_LEN) {
          onSuggestions([]);
          onIsLoading(false);
        } else {
          try {
            const trimmedValue = value.trim();
            onIsLoading(true);
            const response = await apiClient.get<Location[]>(
              '/geo/1.0/direct',
              {
                params: {
                  q: trimmedValue,
                  limit: MAX_LOCATIONS,
                },
              },
            );
            const locationData = response.data.map((element) =>
              pick(element, ['name', 'lat', 'lon', 'country', 'state']),
            );
            onSuggestions(locationData);
          } catch (error) {
            enqueueSnackbar(
              'Sorry, we could not find any results that match your search.',
              { variant: 'error' },
            );
          } finally {
            onIsLoading(false);
          }
        }
      }, DEBOUNCE_DELAY),
    [enqueueSnackbar],
  );

  useEffect(() => {
    if (inputValue) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetchGeoData(inputValue);
    }
  }, [fetchGeoData, inputValue]);

  const onOpen = () => onIsOpen(true);

  const onClose = () => onIsOpen(false);

  const onInputChange = (_: SyntheticEvent, value: string) => {
    onInputValue(value);
  };

  const onChange = (
    _: SyntheticEvent,
    value: Location | null,
    reason: AutocompleteChangeReason,
  ) => {
    if (reason === 'selectOption' && value) {
      setLocation(value);
    }
  };

  const getOptionLabel = (option: Location) => {
    const state = option.state ? `${option.state} - ` : '';
    const country = findCountryNameByCode(option.country);
    return `${option.name} - ${state}${country}`;
  };

  return (
    <Autocomplete
      disablePortal
      id={id}
      css={classes.autocomplete}
      open={inputValue.length > MIN_INPUT_LEN && isOpen}
      onOpen={onOpen}
      onClose={onClose}
      options={suggestions}
      noOptionsText={!isLoading && 'No options found'}
      inputValue={inputValue}
      onInputChange={onInputChange}
      value={location}
      onChange={onChange}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label='Location'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading && <CircularProgress size={SPINNER_SIZE} />}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
