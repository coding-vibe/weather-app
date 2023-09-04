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
  meta,
  ...props
}: Props<Option>) {
  return (
    <>
      <Select
        name={name}
        value={value}
        setValue={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </>
  );
}
