import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as classes from './styles';

interface Props {
  unit: string;
  setUnit: (value: string) => void;
  id: string;
}

export default function MeasurementSelect({ unit, setUnit, id }: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    setUnit(event.target.value);
  };

  return (
    <FormControl css={classes.select}>
      <InputLabel id='helper-label'>Temperature unit</InputLabel>
      <Select
        labelId='helper-label'
        id={id}
        value={unit}
        label='Temperature unit'
        onChange={handleChange}>
        <MenuItem value='standard'>Kelvin, &deg;&#8490;</MenuItem>
        <MenuItem value='metric'>Celsius, &#8451;</MenuItem>
        <MenuItem value='imperial'>Fahrenheit, &#8457;</MenuItem>
      </Select>
    </FormControl>
  );
}
