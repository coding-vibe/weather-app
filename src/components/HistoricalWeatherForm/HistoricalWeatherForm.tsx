import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { startOfYesterday } from 'date-fns';
import { Formik, FormikConfig, Form, Field } from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
import DateField from 'components/DateField';
import LocationAutoCompleteField from 'components/LocationAutocompleteField';
import SelectField from 'components/SelectField';
import LANGUAGE_OPTIONS from 'constants/languageOptions';
import TEMPERATURE_UNITS_OPTIONS from 'constants/temperatureUnitsOptions';
import SettingsContext from 'contexts/SettingsContext';
import LanguageOption from 'types/languageOption';
import SettingsContextType from 'types/settingsContextType';
import TemperatureUnitOption from 'types/temperatureUnitOption';
import VALIDATION_SCHEMA, { FormValuesType } from './validation';
import * as classes from './styles';

const LANGUAGE_CHOICE_LABEL_ID = 'language-label';
const LOCATION_AUTOCOMPLETE = 'location-select';
const TEMPERATURE_UNITS_LABEL_ID = 'unit-label';

interface Props {
  setSearchParams: (value: FormValuesType) => void;
  className?: string;
}

export default function HistoricalWeatherForm({
  setSearchParams,
  className,
}: Props) {
  const { onSelectLanguage, onSelectTemperatureUnit } =
    useContext<SettingsContextType>(SettingsContext);
  const INITIAL_FORM_VALUES = {
    language: '',
    startDate: null,
    endDate: null,
    location: null,
    temperatureUnit: '',
  };
  const { t } = useTranslation();
  const yesterday = startOfYesterday();

  const handleSubmit: FormikConfig<FormValuesType>['onSubmit'] = (
    values,
    { setSubmitting },
  ) => {
    onSelectTemperatureUnit(values.temperatureUnit);
    setSearchParams(values);
    setSubmitting(false);
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
        <Form
          className={className}
          css={classes.form}>
          <Field
            component={SelectField<LanguageOption>}
            label={t('labels.languageSelect')}
            labelId={LANGUAGE_CHOICE_LABEL_ID}
            name='language'
            onSelectLanguage={onSelectLanguage}
            options={LANGUAGE_OPTIONS}
          />
          <div css={classes.wrap}>
            <Field
              disableHighlightToday
              css={classes.dateField}
              component={DateField}
              label={t('labels.startDayDatePicker')}
              maxDate={yesterday}
              name='startDate'
              type='date'
            />
            <Field
              disableHighlightToday
              css={[classes.dateField, classes.endDateField]}
              component={DateField}
              label={t('labels.endDayDatePicker')}
              maxDate={yesterday}
              name='endDate'
              type='date'
            />
          </div>
          <Field
            component={LocationAutoCompleteField}
            id={LOCATION_AUTOCOMPLETE}
            name='location'
          />
          <Field
            component={SelectField<TemperatureUnitOption>}
            label={t('labels.temperatureUnitsSelect')}
            labelId={TEMPERATURE_UNITS_LABEL_ID}
            name='temperatureUnit'
            options={TEMPERATURE_UNITS_OPTIONS}
          />
          <LoadingButton
            loading={isSubmitting}
            type='submit'
            variant='contained'>
            {t('submit')}
          </LoadingButton>
        </Form>
      )}
    </Formik>
  );
}

HistoricalWeatherForm.defaultProps = {
  className: null,
};
