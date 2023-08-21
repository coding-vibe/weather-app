import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TemperatureUnits from 'constants/temperatureUnits';

interface Props {
  temperatureUnit: TemperatureUnits;
  setTemperatureUnit: (value: TemperatureUnits) => void;
  id: string;
  className?: string;
}

const temperatureUnitsOptions = [
  { name: 'Kelvin, \u00B0K', value: TemperatureUnits.KELVIN },
  { name: 'Celsius, \u2103', value: TemperatureUnits.CELSIUS },
  { name: 'Fahrenheit, \u00B0F', value: TemperatureUnits.FAHRENHEIT },
];

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
      <InputLabel id='helper-label'>Temperature unit</InputLabel>
      <Select
        labelId='helper-label'
        id={id}
        value={temperatureUnit}
        label='Temperature unit'
        onChange={handleChange}>
        {temperatureUnitsOptions.map((option) => (
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

TemperatureUnitsSelect.defaultProps = {
  className: null,
};
