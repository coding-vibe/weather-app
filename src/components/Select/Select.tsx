import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MUISelect, { SelectChangeEvent } from '@mui/material/Select';
import OptionBase from 'types/optionBase';
import * as classes from './styles';

interface Props<Option extends OptionBase> {
  label: string;
  labelId: string;
  options: Option[];
  setValue: (event: SelectChangeEvent<Option['value']>) => void;
  value: Option['value'];
  error?: boolean;
  helperText?: string;
  name?: string;
}

export default function Select<Option extends OptionBase>({
  label,
  labelId,
  options,
  setValue,
  value,
  error,
  helperText,
  name,
}: Props<Option>) {
  return (
    <FormControl error={error}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <MUISelect
        css={classes.select}
        label={label}
        labelId={labelId}
        value={value}
        name={name}
        onChange={setValue}>
        {options.map((option) => (
          <MenuItem
            key={option.label}
            value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
      <FormHelperText error>{helperText}</FormHelperText>
    </FormControl>
  );
}

Select.defaultProps = {
  error: false,
  helperText: null,
  name: null,
};
