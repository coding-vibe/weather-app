import { FieldProps } from 'formik';
import LocationAutocomplete from 'components/LocationAutocomplete';
import { FormValuesType } from 'components/HistoricalForecast/validation';
import Location from 'types/location';

interface Props extends FieldProps<Location, FormValuesType> {
  id: string;
}

export default function LocationAutoCompleteField({
  field: { value, onChange },
  ...props
}: Props) {
  return (
    <LocationAutocomplete
      location={value}
      setLocation={onChange}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}
