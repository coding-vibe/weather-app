import { useTranslation } from 'react-i18next';
import { FieldProps } from 'formik';
import LocationAutocomplete from 'components/LocationAutocomplete';
import { FormValuesType } from 'components/HistoricalWeatherForm/validation';
import Location from 'types/location';

interface Props extends FieldProps<Location, FormValuesType> {
  id: string;
}

export default function LocationAutoCompleteField({
  field: { name, value },
  form,
  ...props
}: Props) {
  const { t } = useTranslation();
  const meta = form.getFieldMeta(name);
  const error = meta?.touched && !!meta?.error ? t(meta?.error) : '';
  const setLocation = (newValue: Location) => {
    form.setFieldValue(name, newValue);
  };

  return (
    <LocationAutocomplete
      inputProps={{
        error: !!error,
        helperText: error,
      }}
      location={value}
      setLocation={setLocation}
      {...props}
    />
  );
}
