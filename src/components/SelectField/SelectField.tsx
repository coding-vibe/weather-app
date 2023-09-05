import { ErrorMessage, FieldProps } from 'formik';
import Select from 'components/Select';
import { FormValuesType } from 'components/HistoricalForecast/validation';
import OptionBase from 'types/optionBase';

interface Props<Option extends OptionBase>
  extends FieldProps<Option['value'], FormValuesType> {
  labelId: string;
  label: string;
  error: boolean;
  helperText: string;
  options: Option[];
}

export default function SelectField<Option extends OptionBase>({
  field: { name, value, onChange },
  // form: {errors, touched},
  ...props
}: Props<Option>) {
  return (
    <>
      <Select<Option>
        name={name}
        value={value}
        setValue={onChange}
        // helperText={
        //   touched[name] &&
        //   helperText === <div className='error'>{errors.name}</div>
        // }
        // error={touched[name] && !!error : false}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      <ErrorMessage name={name}>
        {(msg: string) => <div>{msg}</div>}
      </ErrorMessage>
    </>
  );
}
