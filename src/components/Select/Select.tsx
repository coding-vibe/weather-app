import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MUISelect, { SelectChangeEvent } from '@mui/material/Select';
import OptionBase from 'types/optionBase';
import * as classes from './styles';

interface Props<Option extends OptionBase> {
  value: Option['value'];
  setValue: (event: SelectChangeEvent<Option['value']>) => void;
  labelId: string;
  label: string;
  className?: string;
  name?: string;
  error?: boolean;
  helperText?: string;
  options: Option[];
}

export default function Select<Option extends OptionBase>({
  value,
  setValue,
  labelId,
  label,
  className,
  name,
  error,
  helperText,
  options,
}: Props<Option>) {
  return (
    <FormControl
      className={className}
      error={error}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <MUISelect
        name={name}
        labelId={labelId}
        css={classes.select}
        value={value}
        label={label}
        onChange={setValue}>
        {options.map((option) => (
          <MenuItem
            key={option.label}
            value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}

Select.defaultProps = {
  className: null,
  name: null,
  error: false,
  helperText: null,
};
