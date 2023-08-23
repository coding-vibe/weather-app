import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';
import LANGUAGE_OPTIONS from './languageOptions';
import TEMPERATURE_UNITS_OPTIONS from './temperatureUnitsOptions';

interface OptionBase {
  label: string;
  value: string;
}

interface Props<Option extends OptionBase> {
  value: Option['value'];
  setValue: (value: Option['value']) => void;
  labelId: string;
  id: string;
  label: string;
  className?: string;
  // TODO: I should accept array of options
  options: Option[];
}

export default function AdaptiveSelect<Option extends OptionBase>({
  value,
  setValue,
  labelId,
  id,
  label,
  className,
}: Props<Option>) {
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
                key={option.label}
                value={option.value}>
                {option.label}
              </MenuItem>
            ))
          : TEMPERATURE_UNITS_OPTIONS.map((option) => (
              <MenuItem
                key={option.label}
                value={option.value}>
                {option.label}
              </MenuItem>
            ))}
      </Select>
    </FormControl>
  );
}

AdaptiveSelect.defaultProps = {
  className: null,
};
