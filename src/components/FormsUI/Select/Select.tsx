/* eslint-disable react/jsx-props-no-spreading */
import { FieldProps } from 'formik';
import Select from 'components/Select';

interface OptionBase {
  label: string;
  value: string;
}

interface SelectWrapperProps<Option extends OptionBase> extends FieldProps {
  options: Option[];
}

export function SelectWrapper<Option extends OptionBase>({
  field,
  form,
  options,
  ...rest
}: SelectWrapperProps<Option>) {
  const handleChange = (value: Option['value']) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    form.setFieldValue(field.name, value);
  };

  return (
    <Select
      {...field}
      {...rest}
      value={field.value}
      setValue={handleChange}
    />
  );
}
