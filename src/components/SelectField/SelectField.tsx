import { FieldProps } from 'formik';
import Select from 'components/Select';

interface OptionBase {
  label: string;
  value: string;
}

interface SelectFieldProps<Option extends OptionBase> extends FieldProps {
  labelId: string;
  label: string;
  options: Option[];
}

export default function SelectField<Option extends OptionBase>({
  field: { value, onChange },
  labelId,
  label,
  options,
}: SelectFieldProps<Option>) {
  return (
    <Select
      value={value as Option['value']}
      setValue={onChange}
      labelId={labelId}
      label={label}
      options={options}
    />
  );
}
