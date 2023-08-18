import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as classes from './styles';

export default function MeasurementSelect() {
  const [selectedUnit, onSelectUnit] = useState('default');

  const handleChange = (event: SelectChangeEvent) => {
    onSelectUnit(event.target.value);
  };

  return (
    <FormControl css={classes.select}>
      <InputLabel id='measurement-helper-label'>Temperature unit</InputLabel>
      <Select
        labelId='measurement-helper-label'
        id='measurement-select'
        value={selectedUnit}
        label='Temperature unit'
        onChange={handleChange}>
        <MenuItem value='default'>Kelvin, &#8490;</MenuItem>
        <MenuItem value='metric'>Celsius, &#8451;</MenuItem>
        <MenuItem value='imperial'>Fahrenheit, &#8457;</MenuItem>
      </Select>
    </FormControl>
  );
}
