import { FieldProps } from 'formik';
import LocationAutocomplete from 'components/LocationAutocomplete';
import { FormValuesType } from 'components/HistoricalForecast/validation';
import Location from 'types/location';

interface Props extends FieldProps<Location, FormValuesType> {
  id: string;
}

export default function LocationAutoCompleteField({
  field: { value },
  form: { setValues },
  ...props
}: Props) {
  return (
    <LocationAutocomplete
      location={value}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      setLocation={setValues}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}
