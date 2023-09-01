import { FieldProps } from 'formik';
import Select from 'components/Select';
import { FormValuesType } from 'components/HistoricalForecast/validation';

interface OptionBase {
  label: string;
  value: string;
}

interface Props<Option extends OptionBase>
  extends FieldProps<Option['value'], FormValuesType> {
  labelId: string;
  label: string;
  options: Option[];
}

export default function SelectField<Option extends OptionBase>({
  field: { value, onChange },
  labelId,
  label,
  options,
  ...rest
}: Props<Option>) {
  return (
    <Select
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      value={value}
      setValue={onChange}
      labelId={labelId}
      label={label}
      options={options}
    />
  );
}
