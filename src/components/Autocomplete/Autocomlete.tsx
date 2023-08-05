import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
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
          {...params}
          label='City'
        />
      )}
    />
  );
}
