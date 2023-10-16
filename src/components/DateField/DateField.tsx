import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const meta = form.getFieldMeta(name);
  const error = meta?.touched && !!meta?.error ? t(meta.error) : '';

  return (
    <MUIDatePicker
      onChange={(newDate) => form.setFieldValue(name, newDate)}
      slotProps={{
        textField: {
          error: !!error,
          helperText: error,
        },
      }}
      value={value}
      {...props}
    />
  );
}
