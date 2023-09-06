import { FieldProps } from 'formik';
import LocationAutocomplete from 'components/LocationAutocomplete';
import { FormValuesType } from 'components/HistoricalForecast/validation';
import Location from 'types/location';

interface Props extends FieldProps<Location, FormValuesType> {
  id: string;
}

export default function LocationAutoCompleteField({
  field: { name, value },
  form,
  ...props
}: Props) {
  const meta = form.getFieldMeta(name);
  const hasError = meta?.touched && !!meta?.error;
  const helperText = hasError ? meta?.error : '';
  const setLocation = (newValue: Location) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    form.setFieldValue(name, newValue);
  };
  return (
    <LocationAutocomplete
      error={hasError}
      helperText={helperText}
      location={value}
      setLocation={setLocation}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}
