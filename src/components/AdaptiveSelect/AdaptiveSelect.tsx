import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';
import LANGUAGE_OPTIONS from './languageOptions';
import TEMPERATURE_UNITS_OPTIONS from './temperatureUnitsOptions';

interface Props {
  value: Languages | TemperatureUnits;
  setValue: (value) => void;
  labelId: string;
  id: string;
  label: string;
  className?: string;
}

export default function AdaptiveSelect({
  value,
  setValue,
  labelId,
  id,
  label,
  className,
}: Props) {
  const handleChange = (
    event: SelectChangeEvent<Languages | TemperatureUnits>,
  ) => {
    const newLanguage = event.target.value as Languages;
    const newTemperatureUnit = event.target.value as TemperatureUnits;
    if (Object.values(Languages).includes(newLanguage)) {
      setValue(newLanguage);
    } else {
      setValue(newTemperatureUnit);
    }
  };

  return (
    <FormControl className={className}>
      <InputLabel id={labelId}>Temperature unit</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={handleChange}>
        {Object.values(Languages).includes(value)
          ? LANGUAGE_OPTIONS.map((option) => (
              <MenuItem
                key={option.name}
                value={option.value}>
                {option.name}
              </MenuItem>
            ))
          : TEMPERATURE_UNITS_OPTIONS.map((option) => (
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

AdaptiveSelect.defaultProps = {
  className: null,
};
