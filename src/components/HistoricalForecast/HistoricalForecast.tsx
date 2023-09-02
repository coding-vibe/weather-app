import { useContext } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
import { Field, Formik, Form } from 'formik';
import { startOfYesterday } from 'date-fns';
import DateRangePicker from 'components/DatePicker';
import LocationAutoCompleteField from 'components/LocationAutocompleteField';
import SelectField from 'components/SelectField';
import TEMPERATURE_UNITS_OPTIONS from 'constants/temperatureUnitsOptions';
import SettingsContext from 'contexts/SettingsContext';
import LanguageOption from 'types/languageOption';
import LANGUAGE_OPTIONS from 'types/languageOptions';
import SettingsContextType from 'types/settingsContextType';
import TemperatureUnitOption from 'types/temperatureUnitOption';
import VALIDATION_SCHEMA, { FormValuesType } from './validation';

const LANGUAGE_CHOICE_LABEL_ID = 'language-label';
const LANGUAGE_CHOICE_LABEL = 'Language';
const LOCATION_AUTOCOMPLETE = 'location-select';
const TEMPERATURE_UNITS_LABEL_ID = 'unit-label';
const TEMPERATURE_UNITS_LABEL = 'Temperature unit';

export default function HistoricalForecast() {
  const { selectedLanguage, selectedTemperatureUnit } =
    useContext<SettingsContextType>(SettingsContext);
  const INITIAL_FORM_VALUES = {
    language: selectedLanguage,
    startDate: null,
    endDate: null,
    temperatureUnit: selectedTemperatureUnit,
  };
  const yesterday = startOfYesterday();

  return (
    <Formik<FormValuesType>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // We ignore ts rule, because initial values should be optional, but in Formik they must exactly match the validation scheme
      initialValues={INITIAL_FORM_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={(values) => {
        console.log(values);
      }}>
      {({ isSubmitting, errors }) => {
        console.log(errors);
        return (
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
                xs={12}>
                <Field
                  disableHighlightToday
                  component={DateRangePicker}
                  label='Start'
                  name='startDate'
                  maxDate={yesterday}
                  type='date'
                />
                <Field
                  disableHighlightToday
                  component={DateRangePicker}
                  label='End'
                  name='endDate'
                  maxDate={yesterday}
                  type='date'
                />
              </Grid>
              <Grid
                item
                xs={12}>
                <Field
                  component={LocationAutoCompleteField}
                  id={LOCATION_AUTOCOMPLETE}
                  name='location'
                />
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
            <LoadingButton
              type='submit'
              loading={isSubmitting}
              variant='contained'>
              Submit
            </LoadingButton>
          </Form>
        );
      }}
    </Formik>
  );
}
