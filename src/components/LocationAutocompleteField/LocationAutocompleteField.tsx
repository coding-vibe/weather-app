import { ErrorMessage, FieldProps } from 'formik';
import LocationAutocomplete from 'components/LocationAutocomplete';
import { FormValuesType } from 'components/HistoricalForecast/validation';
import Location from 'types/location';

interface Props extends FieldProps<Location, FormValuesType> {
  id: string;
}

export default function LocationAutoCompleteField({
  field: { name, value },
  form: { setFieldValue },
  ...props
}: Props) {
  const setLocation = (newValue: Location) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    setFieldValue(name, newValue);
  };
  return (
    <>
      <LocationAutocomplete
        location={value}
        setLocation={setLocation}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      <ErrorMessage name={name}>
        {(msg: string) => <div>{msg}</div>}
      </ErrorMessage>
    </>
  );
}
