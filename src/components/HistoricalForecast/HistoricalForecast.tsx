// import { useContext } from 'react';
// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Field, Formik, Form } from 'formik';
import * as yup from 'yup';
import SelectField from 'components/SelectField';
import LANGUAGE_OPTIONS from 'constants/languageOptions';
import TEMPERATURE_UNITS_OPTIONS from 'constants/temperatureUnitsOptions';
// import SettingsContext from 'contexts/SettingsContext';
// import SettingsContextType from 'types/settingsContextType';

const LANGUAGE_CHOICE_LABEL_ID = 'language-label';
const LANGUAGE_CHOICE_LABEL = 'Language';
// const LOCATION_AUTOCOMPLETE = 'location-select';
const TEMPERATURE_UNITS_LABEL_ID = 'unit-label';
const TEMPERATURE_UNITS_LABEL = 'Temperature unit';

const VALIDATION_SCHEMA = yup.object().shape({
  language: yup.string(),
  startDate: yup.date().required('Required'),
  endDate: yup.date().required('Required'),
  location: yup.object().required('Required'),
  temperatureUnit: yup.string(),
});

export default function HistoricalForecast() {
  // const { selectedLanguage, selectedTemperatureUnit } =
  //   useContext<SettingsContextType>(SettingsContext);
  const INITIAL_FORM_VALUES = {
    language: '',
    startDate: Date,
    endDate: Date,
    location: {},
    temperatureUnit: '',
  };

  return (
    <Formik
      initialValues={{ ...INITIAL_FORM_VALUES }}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={(values) => {
        console.log(values);
      }}>
      <Form>
        <Grid
          container
          spacing={1}>
          <Grid
            item
            xs={12}>
            <Field
              component={SelectField}
              labelId={LANGUAGE_CHOICE_LABEL_ID}
              label={LANGUAGE_CHOICE_LABEL}
              name='language'
              options={LANGUAGE_OPTIONS}
            />
          </Grid>
          <Grid
            item
            xs={12}>
            <Field
              component={SelectField}
              labelId={TEMPERATURE_UNITS_LABEL_ID}
              label={TEMPERATURE_UNITS_LABEL}
              name='temperatureUnit'
              options={TEMPERATURE_UNITS_OPTIONS}
            />
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}
