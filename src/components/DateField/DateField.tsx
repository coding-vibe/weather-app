import { FieldProps } from 'formik';
import {
  DatePickerProps,
  DatePicker as MUIDatePicker,
} from '@mui/x-date-pickers/DatePicker';
import { FormValuesType } from 'components/HistoricalWeatherForm/validation';

interface Props
  extends FieldProps<Date, FormValuesType>,
    DatePickerProps<Date> {}

export default function DateField({
  field: { name, value },
  form,
  ...props
}: Props) {
  const meta = form.getFieldMeta(name);
  const hasError = meta?.touched && !!meta?.error;
  const helperText = hasError ? meta?.error : '';
  return (
    <MUIDatePicker
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onChange={(newDate) => form.setFieldValue(name, newDate)}
      slotProps={{
        textField: {
          error: hasError,
          helperText,
        },
      }}
      value={value}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}
