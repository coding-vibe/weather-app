import { useContext } from 'react';
import { startOfYesterday } from 'date-fns';
import { Formik, Form, Field } from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
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

interface Props {
  setFormValues: (value: FormValuesType) => void;
}

export default function HistoricalWeatherForm({ setFormValues }: Props) {
  const { onSelectLanguage, onSelectTemperatureUnit } =
    useContext<SettingsContextType>(SettingsContext);
  const INITIAL_FORM_VALUES = {
    language: '',
    startDate: null,
    endDate: null,
    location: null,
    temperatureUnit: '',
  };
  const yesterday = startOfYesterday();

  const handleSubmit = (values: FormValuesType) => {
    onSelectLanguage(values.language);
    onSelectTemperatureUnit(values.temperatureUnit);
    setFormValues(values);
  };

  return (
    <Formik<FormValuesType>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // We ignore ts rule, because initial values should be optional, but in Formik they must exactly match the validation scheme
      initialValues={INITIAL_FORM_VALUES}
      onSubmit={handleSubmit}
      validationSchema={VALIDATION_SCHEMA}>
      {({ isSubmitting }) => (
        <Form>
          <Grid
            container
            spacing={2}>
            <Grid
              item
              xs={12}>
              <Field
                validateOnBlur
                component={SelectField<LanguageOption>}
                label={LANGUAGE_CHOICE_LABEL}
                labelId={LANGUAGE_CHOICE_LABEL_ID}
                name='language'
                options={LANGUAGE_OPTIONS}
              />
            </Grid>
            <Grid
              item
              xs={2.5}>
              <Field
                validateOnBlur
                disableHighlightToday
                css={classes.startDateField}
                component={DateField}
                label='Start'
                maxDate={yesterday}
                name='startDate'
                type='date'
              />
            </Grid>
            <Grid
              item
              xs={2.5}>
              <Field
                validateOnBlur
                disableHighlightToday
                css={classes.endDateField}
                component={DateField}
                label='End'
                maxDate={yesterday}
                name='endDate'
                type='date'
              />
            </Grid>
            <Grid
              item
              xs={12}>
              <Field
                validateOnBlur
                css={classes.location}
                component={LocationAutoCompleteField}
                id={LOCATION_AUTOCOMPLETE}
                name='location'
              />
            </Grid>
            <Grid
              item
              xs={12}>
              <Field
                validateOnBlur
                component={SelectField<TemperatureUnitOption>}
                labelId={TEMPERATURE_UNITS_LABEL_ID}
                label={TEMPERATURE_UNITS_LABEL}
                name='temperatureUnit'
                options={TEMPERATURE_UNITS_OPTIONS}
              />
            </Grid>
            <Grid item>
              <LoadingButton
                loading={isSubmitting}
                type='submit'
                variant='contained'>
                Submit
              </LoadingButton>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
