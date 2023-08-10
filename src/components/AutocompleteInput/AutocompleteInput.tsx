import { SyntheticEvent, useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CircularProgress } from '@mui/material';
import { debounce, pick } from 'lodash';
import { useSnackbar } from 'notistack';
import { axiosDefaultConfig } from 'api/axiosDefaultConfig';
import Location from 'components/AutocompleteInput/locationInterface';
import { countrySearch } from './countrySearch';
import * as classes from './styles';

const DEBOUNCE_DELAY = 400;
const MIN_INPUT_LEN = 2;
const LIMIT_PARAM_VALUE = 5;
const ERROR_MESSAGE = `Sorry, we couldn't find any results that match your search.`;

interface Props {
  currentValue: Location | null;
  // eslint-disable-next-line no-unused-vars
  setCurrentValue: (value: Location | null) => void;
}

export default function AutocompleteInput({
  currentValue,
  setCurrentValue,
}: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [options, setOptions] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const errorNotify = () => {
      enqueueSnackbar(ERROR_MESSAGE, { variant: 'error' });
    };

    const fetchGeoData = debounce(async () => {
      if (inputValue === '' || inputValue.length <= MIN_INPUT_LEN) {
        setOptions([]);
        setIsLoading(false);
      } else {
        try {
          setIsLoading(true);
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

          setOptions(locationData as Location[]);
        } catch (error) {
          console.log(error);
          errorNotify();
        }
      }
    }, DEBOUNCE_DELAY);

    if (inputValue && inputValue !== '') {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetchGeoData();
      setIsLoading(false);
    }
  }, [enqueueSnackbar, inputValue]);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  const onInputChange = (_: SyntheticEvent, value: string) => {
    const trimmedValue = value.trim();
    setInputValue(trimmedValue);
  };

  const onChange = (
    _: SyntheticEvent,
    value: Location | null,
    reason: string | undefined,
  ) => {
    if (reason === 'selectOption' && value && value !== undefined) {
      setCurrentValue(value);
    }
  };

  const getOptionLabel = (option: Location) =>
    `${option.name} - ${
      option.state && `${option.state} -`
    }${' '}${countrySearch(option.country)}`;

  const renderOption = (props: object, option: Location) => (
    <li
      key={option.lat}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      {option.name} - {option.state && `${option.state} -`}{' '}
      {countrySearch(option.country)}
    </li>
  );

  return (
    <Autocomplete
      disablePortal
      id='cities-select'
      css={classes.autocompleteStyles}
      open={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      options={options}
      noOptionsText={isOpen && !isLoading ? ERROR_MESSAGE : null}
      inputValue={inputValue}
      onInputChange={onInputChange}
      value={currentValue}
      onChange={onChange}
      getOptionLabel={getOptionLabel}
      renderOption={renderOption}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label='Location for search'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? <CircularProgress size={25} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
