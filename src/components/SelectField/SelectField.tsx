import { FieldProps } from 'formik';
import Select from 'components/Select';
import { FormValuesType } from 'components/HistoricalForecast/validation';
import OptionBase from 'types/optionBase';

interface Props<Option extends OptionBase>
  extends FieldProps<Option['value'], FormValuesType> {
  labelId: string;
  label: string;
  options: Option[];
}

export default function SelectField<Option extends OptionBase>({
  field: { name, value, onChange },
  ...props
}: Props<Option>) {
  return (
    <Select
      value={value}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setValue={onChange(name)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}
