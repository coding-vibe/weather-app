import { useContext } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { startOfYesterday } from 'date-fns';
import DateField from 'components/DateField';
import LocationAutoCompleteField from 'components/LocationAutocompleteField';
import SelectField from 'components/SelectField';
import TEMPERATURE_UNITS_OPTIONS from 'constants/temperatureUnitsOptions';
import SettingsContext from 'contexts/SettingsContext';
import LanguageOption from 'types/languageOption';
import LANGUAGE_OPTIONS from 'types/languageOptions';
import SettingsContextType from 'types/settingsContextType';
import TemperatureUnitOption from 'types/temperatureUnitOption';
import VALIDATION_SCHEMA, { FormValuesType } from './validation';
import * as classes from './styles';

const LANGUAGE_CHOICE_LABEL_ID = 'language-label';
const LANGUAGE_CHOICE_LABEL = 'Language';
const LOCATION_AUTOCOMPLETE = 'location-select';
const TEMPERATURE_UNITS_LABEL_ID = 'unit-label';
const TEMPERATURE_UNITS_LABEL = 'Temperature unit';

export default function HistoricalForecast() {
  const {
    selectedLanguage,
    onSelectLanguage,
    selectedTemperatureUnit,
    onSelectTemperatureUnit,
  } = useContext<SettingsContextType>(SettingsContext);
  const INITIAL_FORM_VALUES = {
    language: selectedLanguage,
    startDate: null,
    endDate: null,
    temperatureUnit: selectedTemperatureUnit,
  };
  const yesterday = startOfYesterday();

  const updateContextValues = (values: FormValuesType) => {
    onSelectLanguage(values.language);
    onSelectTemperatureUnit(values.temperatureUnit);
  };

  return (
    <Formik<FormValuesType>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // We ignore ts rule, because initial values should be optional, but in Formik they must exactly match the validation scheme
      initialValues={INITIAL_FORM_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={(values) => {
        updateContextValues(values);
        console.log(values);
      }}>
      {({ isSubmitting }) => (
        <Form>
          <Grid
            container
            spacing={2}>
            <Grid
              item
              xs={12}>
              <Field
                component={SelectField<LanguageOption>}
                labelId={LANGUAGE_CHOICE_LABEL_ID}
                label={LANGUAGE_CHOICE_LABEL}
                name='language'
                options={LANGUAGE_OPTIONS}
              />
            </Grid>
            <Grid
              item
              xs={2.5}>
              <Field
                css={classes.startDateField}
                disableHighlightToday
                component={DateField}
                label='Start'
                name='startDate'
                maxDate={yesterday}
                type='date'
              />
              <ErrorMessage name='startDate'>
                {(msg: string) => <div>{msg}</div>}
              </ErrorMessage>
            </Grid>
            <Grid
              item
              xs={2.5}>
              <Field
                css={classes.endDateField}
                disableHighlightToday
                component={DateField}
                label='End'
                name='endDate'
                maxDate={yesterday}
                type='date'
              />
              <ErrorMessage name='endDate'>
                {(msg: string) => <div>{msg}</div>}
              </ErrorMessage>
            </Grid>
            <Grid
              item
              xs={12}>
              <Field
                css={classes.location}
                component={LocationAutoCompleteField}
                id={LOCATION_AUTOCOMPLETE}
                name='location'
              />
              <ErrorMessage name='location'>
                {(msg: string) => <div>{msg}</div>}
              </ErrorMessage>
            </Grid>
            <Grid
              item
              xs={12}>
              <Field
                component={SelectField<TemperatureUnitOption>}
                labelId={TEMPERATURE_UNITS_LABEL_ID}
                label={TEMPERATURE_UNITS_LABEL}
                name='temperatureUnit'
                options={TEMPERATURE_UNITS_OPTIONS}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}>
            <LoadingButton
              type='submit'
              loading={isSubmitting}
              variant='contained'>
              Submit
            </LoadingButton>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
