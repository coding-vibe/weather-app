import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TemperatureUnits from 'constants/temperatureUnits';

interface Props {
  unit: TemperatureUnits;
  setUnit: (value: TemperatureUnits) => void;
  id: string;
  className?: string;
}

const temperatureUnitsOptions = [
  { name: 'Kelvin, &deg;&#8490;', value: TemperatureUnits.KELVIN },
  { name: 'Celsius, &#8451;', value: TemperatureUnits.KELVIN },
  { name: 'Fahrenheit, &#8457;', value: TemperatureUnits.KELVIN },
];

export default function TemperatureUnitsSelect({
  unit,
  setUnit,
  id,
  className,
}: Props) {
  const handleChange = (event: SelectChangeEvent<TemperatureUnits>) => {
    setUnit(event.target.value as TemperatureUnits);
  };

  return (
    <FormControl className={className}>
      <InputLabel id='helper-label'>Temperature unit</InputLabel>
      <Select
        labelId='helper-label'
        id={id}
        value={unit}
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
