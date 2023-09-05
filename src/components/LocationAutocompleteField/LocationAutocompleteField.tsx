/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable spaced-comment */
import { ErrorMessage, FieldProps } from 'formik';
import LocationAutocomplete from 'components/LocationAutocomplete';
import { FormValuesType } from 'components/HistoricalForecast/validation';
import Location from 'types/location';

interface Props extends FieldProps<Location, FormValuesType> {
  id: string;
}

export default function LocationAutoCompleteField({
  field: { name, value },
  form: { setValues },
  ...props
}: Props) {
  return (
    <>
      <LocationAutocomplete
        location={value}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        setLocation={setValues}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      <ErrorMessage name={name}>
        {(msg: string) => <div>{msg}</div>}
      </ErrorMessage>
    </>
  );
}
