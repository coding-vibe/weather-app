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
import TemperatureUnitOption from 'types/temperatureUnitOption';
import INITIAL_FORM_VALUES from './initialFormValues';
import VALIDATION_SCHEMA, { FormValuesType } from './validation';
import * as classes from './styles';

interface Props {
  onSubmit: (value: FormValuesType) => void;
  className?: string;
}

export default function HistoricalWeatherForm({ onSubmit, className }: Props) {
  const { onSelectLanguage, onSelectTemperatureUnit } =
    useContext(SettingsContext);
  const { t } = useTranslation();
  const yesterday = startOfYesterday();

  const handleSubmit: FormikConfig<FormValuesType>['onSubmit'] = (
    values,
    { setSubmitting },
  ) => {
    onSelectTemperatureUnit(values.temperatureUnit);
    onSubmit(values);
    setSubmitting(false);
  };

  return (
    <Formik<FormValuesType>
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
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
            labelId='language-select'
            name='language'
            setOption={onSelectLanguage}
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
            id='location-autocomplete'
            name='location'
          />
          <Field
            component={SelectField<TemperatureUnitOption>}
            label={t('labels.temperatureUnitsSelect')}
            labelId='temperature-unit-select'
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
