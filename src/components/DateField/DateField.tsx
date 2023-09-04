import { FieldProps } from 'formik';
import {
  DatePickerProps,
  DatePicker as MUIDatePicker,
} from '@mui/x-date-pickers/DatePicker';
import { FormValuesType } from 'components/HistoricalForecast/validation';

interface Props
  extends FieldProps<Date, FormValuesType>,
    DatePickerProps<Date> {}

export default function DateField({
  field: { name, value },
  form: { setFieldValue },
  meta,
  ...props
}: Props) {
  return (
    <>
      <MUIDatePicker
        value={value}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onChange={(newDate) => setFieldValue(name, newDate)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </>
  );
}
