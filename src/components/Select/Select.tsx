import { useTranslation } from 'react-i18next';
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
  setValue: (event: SelectChangeEvent<Option['value']> | undefined) => void;
  value: Option['value'];
  className?: string;
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
  className,
  error,
  helperText,
  name,
}: Props<Option>) {
  const { t } = useTranslation();

  return (
    <FormControl
      error={error}
      className={className}>
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
            {t(option.label)}
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

Select.defaultProps = {
  className: null,
};
