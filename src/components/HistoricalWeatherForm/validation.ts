import { subDays } from 'date-fns';
import * as yup from 'yup';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';
import Location from 'types/location';

const VALIDATION_SCHEMA = yup.object().shape({
  language: yup
    .mixed<Languages>()
    .oneOf(Object.values(Languages))
    .required('errors.validationRequired'),
  startDate: yup
    .date()
    .max(subDays(new Date(), 1))
    .required('errors.validationRequired'),
  endDate: yup
    .date()
    .min(yup.ref('startDate'), 'errors.validationEndDateField')
    .max(subDays(new Date(), 1))
    .required('errors.validationRequired'),
  location: yup
    .object<Location>()
    .shape({
      name: yup.string().required('errors.validationRequired'),
      lat: yup.number().required('errors.validationRequired'),
      lon: yup.number().required('errors.validationRequired'),
      country: yup.string().required('errors.validationRequired'),
      state: yup.string(),
    })
    .required('errors.validationRequired'),
  temperatureUnit: yup
    .mixed<TemperatureUnits>()
    .oneOf(Object.values(TemperatureUnits))
    .required('errors.validationRequired'),
});

export default VALIDATION_SCHEMA;

export type FormValuesType = yup.InferType<typeof VALIDATION_SCHEMA>;
