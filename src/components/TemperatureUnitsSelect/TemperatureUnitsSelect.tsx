import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TemperatureUnits from 'constants/temperatureUnits';
import TEMPERATURE_UNITS_OPTIONS from './temperatureUnitsOptions';

interface Props {
  temperatureUnit: TemperatureUnits;
  setTemperatureUnit: (value: TemperatureUnits) => void;
  id: string;
  className?: string;
}

export default function TemperatureUnitsSelect({
  temperatureUnit,
  setTemperatureUnit,
  id,
  className,
}: Props) {
  const handleChange = (event: SelectChangeEvent<TemperatureUnits>) => {
    setTemperatureUnit(event.target.value as TemperatureUnits);
  };

  return (
    <FormControl className={className}>
      <InputLabel id='temperature-units-label'>Temperature unit</InputLabel>
      <Select
        labelId='temperature-units-label'
        id={id}
        value={temperatureUnit}
        label='Temperature unit'
        onChange={handleChange}>
        {TEMPERATURE_UNITS_OPTIONS.map((option) => (
          <MenuItem
            key={option.name}
            value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
