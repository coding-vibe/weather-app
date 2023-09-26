import { subDays } from 'date-fns';
import * as yup from 'yup';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';
import Location from 'types/location';

const VALIDATION_SCHEMA = yup.object().shape({
  language: yup
    .mixed<Languages>()
    .oneOf(Object.values(Languages))
    .required('errors.required'),
  startDate: yup.date().max(subDays(new Date(), 1)).required('errors.required'),
  endDate: yup
    .date()
    .min(yup.ref('startDate'), 'errors.endDateField')
    .max(subDays(new Date(), 1))
    .required('errors.required'),
  location: yup
    .object<Location>()
    .shape({
      name: yup.string().required('errors.required'),
      lat: yup.number().required('errors.required'),
      lon: yup.number().required('errors.required'),
      country: yup.string().required('errors.required'),
      state: yup.string(),
    })
    .required('errors.required'),
  temperatureUnit: yup
    .mixed<TemperatureUnits>()
    .oneOf(Object.values(TemperatureUnits))
    .required('errors.required'),
});

export default VALIDATION_SCHEMA;

export type FormValuesType = yup.InferType<typeof VALIDATION_SCHEMA>;
