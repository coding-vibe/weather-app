import { subDays } from 'date-fns';
import * as yup from 'yup';
import Languages from 'constants/languages';
import TemperatureUnits from 'constants/temperatureUnits';
import Location from 'types/location';

const VALIDATION_SCHEMA = yup.object().shape({
  language: yup
    .mixed<Languages>()
    .oneOf(Object.values(Languages))
    .required('Required'),
  startDate: yup.date().max(subDays(new Date(), 1)).required('Required'),
  endDate: yup
    .date()
    .min(yup.ref('startDate'), "Shouldn't be before start date")
    .max(subDays(new Date(), 1))
    .required('Required'),
  location: yup
    .object<Location>()
    .shape({
      name: yup.string().required('Required'),
      lat: yup.number().required('Required'),
      lon: yup.number().required('Required'),
      country: yup.string().required('Required'),
      state: yup.string(),
    })
    .required('Required'),
  temperatureUnit: yup
    .mixed<TemperatureUnits>()
    .oneOf(Object.values(TemperatureUnits))
    .required('Required'),
});

export default VALIDATION_SCHEMA;

export type FormValuesType = yup.InferType<typeof VALIDATION_SCHEMA>;
