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
  const hasError = meta?.touched && !!meta?.error;
  // TODO: @singvarr - unfuck this check
  const helperText = meta?.touched && !!meta?.error ? t(meta?.error) : '';
  return (
    <MUIDatePicker
      // TODO: let's disable both ESLint rules globally and clear all components
      onChange={(newDate) => form.setFieldValue(name, newDate)}
      slotProps={{
        textField: {
          error: hasError,
          helperText,
        },
      }}
      value={value}
      {...props}
    />
  );
}
