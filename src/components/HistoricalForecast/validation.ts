import * as yup from 'yup';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';
import Location from 'types/location';

const VALIDATION_SCHEMA = yup.object().shape({
  language: yup
    .mixed<Languages>()
    .oneOf(Object.values(Languages))
    .required('Required'),
  startDate: yup.date().required('Required'),
  endDate: yup.date().required('Required'),
  location: yup.object<Location>().required('Required'),
  temperatureUnit: yup
    .mixed<TemperatureUnits>()
    .oneOf(Object.values(TemperatureUnits))
    .required('Required'),
});

export default VALIDATION_SCHEMA;

export type FormValuesType = yup.InferType<typeof VALIDATION_SCHEMA>;
