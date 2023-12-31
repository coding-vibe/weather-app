import { SyntheticEvent, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Autocomplete, {
  AutocompleteChangeReason,
} from '@mui/material/Autocomplete';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import debounce from 'lodash/debounce';
import pick from 'lodash/pick';
import { useSnackbar } from 'notistack';
import apiClient from 'api';
import Location from 'types/location';
import findCountryNameByCode from 'utils/findCountryNameByCode';
import * as classes from './styles';

const DEBOUNCE_DELAY = 400;
const MAX_LOCATIONS = 5;
const MIN_INPUT_LENGTH = 2;
const SPINNER_SIZE_PX = 20;

interface Props {
  id: string;
  location: Location | null;
  setLocation: (value: Location) => void;
  className?: string;
  inputProps?: TextFieldProps;
}

export default function LocationAutocomplete({
  location,
  setLocation,
  id,
  className,
  inputProps,
}: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, onIsLoading] = useState<boolean>(false);
  const [isOpen, onIsOpen] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<Location[]>([]);
  const { t } = useTranslation();

  const fetchLocations = useMemo(
    () =>
      debounce(async (value: string) => {
        try {
          if (value === '' || value.length <= MIN_INPUT_LENGTH) {
            setSuggestions([]);
            onIsLoading(false);
          }
          const trimmedValue = value.trim();
          onIsLoading(true);
          const response = await apiClient.get<Location[]>('/geo/1.0/direct', {
            params: {
              q: trimmedValue,
              limit: MAX_LOCATIONS,
            },
          });
          const locationData = response.data.map((element) =>
            pick(element, ['name', 'lat', 'lon', 'country', 'state']),
          );
          setSuggestions(locationData);
        } catch (err) {
          enqueueSnackbar(t('errors.fetchGeoData'), { variant: 'error' });
        } finally {
          onIsLoading(false);
        }
      }, DEBOUNCE_DELAY),
    [enqueueSnackbar, t],
  );

  useEffect(() => {
    if (inputValue) {
      fetchLocations(inputValue);
    }
  }, [fetchLocations, inputValue]);

  const handleInputChange = (_: SyntheticEvent, value: string) => {
    setInputValue(value);
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
      className={className}
      css={classes.autocomplete}
      id={id}
      open={inputValue.length > MIN_INPUT_LENGTH && isOpen}
      onOpen={() => onIsOpen(true)}
      onClose={() => onIsOpen(false)}
      getOptionLabel={getOptionLabel}
      options={suggestions}
      noOptionsText={!isLoading && t('texts.noOptions')}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      value={location}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          error={!!inputProps?.error}
          helperText={inputProps ? inputProps.helperText : ''}
          label={t('labels.locationAutocomplete')}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading && <CircularProgress size={SPINNER_SIZE_PX} />}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}

LocationAutocomplete.defaultProps = {
  className: null,
  inputProps: null,
};
