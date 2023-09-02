import { useContext } from 'react';
// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Field, Formik, Form } from 'formik';
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
    temperatureUnit: selectedTemperatureUnit,
  };

  return (
    <Formik<FormValuesType>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // We ignore ts rule, because initial values should be optional, but in Formik they must exactly match the validation scheme
      initialValues={{ INITIAL_FORM_VALUES }}
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
      </Form>
    </Formik>
  );
}
