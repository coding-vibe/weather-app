import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import debounce from 'lodash.debounce';
import {CITIES} from './citiesList';

export default function Autocomplele() {
  return (
    <Autocomplete
      disablePortal
      id='cities-select'
      options={CITIES}
      sx={{width: 300}}
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
