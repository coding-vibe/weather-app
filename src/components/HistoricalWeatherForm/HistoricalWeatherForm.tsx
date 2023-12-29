import { useTranslation } from 'react-i18next';
import { startOfYesterday } from 'date-fns';
import { Formik, FormikConfig, Form, Field } from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
import DateField from 'components/DateField';
import LocationAutoCompleteField from 'components/LocationAutocompleteField';
import INITIAL_FORM_VALUES from './initialFormValues';
import VALIDATION_SCHEMA, { FormValuesType } from './validation';
import * as classes from './styles';

interface Props {
  onSubmit: (value: FormValuesType) => void;
  className?: string;
}

export default function HistoricalWeatherForm({ onSubmit, className }: Props) {
  const { t } = useTranslation();
  const yesterday = startOfYesterday();

  const handleSubmit: FormikConfig<FormValuesType>['onSubmit'] = (
    values,
    { setSubmitting },
  ) => {
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
            component={LocationAutoCompleteField}
            id='location-autocomplete'
            name='location'
          />
          <div css={classes.datePickerWrap}>
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
          <LoadingButton
            css={classes.button}
            loading={isSubmitting}
            type='submit'
            variant='contained'>
            {t('searchHistoricalWeather')}
          </LoadingButton>
        </Form>
      )}
    </Formik>
  );
}

HistoricalWeatherForm.defaultProps = {
  className: null,
};
