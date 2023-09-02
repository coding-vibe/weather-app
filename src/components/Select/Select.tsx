import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MUISelect, { SelectChangeEvent } from '@mui/material/Select';
import OptionBase from 'types/optionBase';
import * as classes from './styles';

interface Props<Option extends OptionBase> {
  value: Option['value'];
  setValue: (value: Option['value']) => void;
  labelId: string;
  label: string;
  className?: string;
  options: Option[];
}

export default function Select<Option extends OptionBase>({
  value,
  setValue,
  labelId,
  label,
  className,
  options,
}: Props<Option>) {
  const handleChange = (event: SelectChangeEvent<Option['value']>) => {
    setValue(event.target.value);
  };
  return (
    <FormControl className={className}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <MUISelect
        labelId={labelId}
        css={classes.select}
        value={value}
        label={label}
        onChange={handleChange}>
        {options.map((option) => (
          <MenuItem
            key={option.label}
            value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
}

Select.defaultProps = {
  className: null,
};
