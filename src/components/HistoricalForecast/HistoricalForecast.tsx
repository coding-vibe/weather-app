import { useState } from 'react';
// import Button from '@mui/material/Button';
import Field from '@mui/material';
import Grid from '@mui/material/Grid';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import DateRangePicker from 'components/DateRangePicker';
import Textfield from 'components/FormsUI/Textfield';
import SelectWrapper from 'components/FormsUI/Select';
import WeatherWidget from 'components/WeatherWidget';
import Location from 'types/location';
import * as classes from './styles';

const INITIAL_FORM_VALUES = {
  language: '',
  startDate: Date,
  endDate: Date,
  location: '',
  temperatureUnit: '',
};

const VALIDATION_SCHEME = yup.object().shape({
  language: yup.string(),
  startDate: yup.date().required('Required'),
  endDate: yup.date().required('Required'),
  location: yup.string().required('Required'),
  temperatureUnit: yup.string(),
});

export default function HistoricalForecast() {
  const [selectedLocation] = useState<Location | null>(null);

  return (
    <>
      <Formik
        initialValues={{ ...INITIAL_FORM_VALUES }}
        validationSchema={VALIDATION_SCHEME}
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
                name='selectedOption'
                component={SelectWrapper}
                label='Оберіть опцію'
              />
            </Grid>
            <Grid
              item
              xs={12}>
              <Textfield
                name='temperatureUnit'
                label='Temperature unit'
              />
            </Grid>
          </Grid>
        </Form>
      </Formik>
      <DateRangePicker css={classes.dateRangePicker} />
      {selectedLocation && <WeatherWidget location={selectedLocation} />}
    </>
  );
}
