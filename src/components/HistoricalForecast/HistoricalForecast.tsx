import { useContext, useState } from 'react';
// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import DateRangePicker from 'components/DateRangePicker';
import Textfield from 'components/FormsUI/Textfield';
import LocationAutocomplete from 'components/LocationAutocomplete';
import Select from 'components/Select';
import WeatherWidget from 'components/WeatherWidget';
import LANGUAGE_OPTIONS from 'constants/languageOptions';
import Languages from 'constants/languages';
import TEMPERATURE_UNITS_OPTIONS from 'constants/temperatureUnitsOptions';
import TemperatureUnits from 'constants/temperatureUnits';
import SettingsContext from 'contexts/SettingsContext';
import SettingsContextType from 'types/settingsContextType';
import Location from 'types/location';
import * as classes from './styles';

const LANGUAGE_CHOICE_LABEL_ID = 'language-label';
const LANGUAGE_CHOICE_LABEL = 'Language';
const LOCATION_AUTOCOMPLETE = 'location-select';
const TEMPERATURE_UNITS_LABEL_ID = 'unit-label';
const TEMPERATURE_UNITS_LABEL = 'Temperature unit';

interface LanguageOption {
  label: string;
  value: Languages;
}

interface TemperatureUnitOption {
  label: string;
  value: TemperatureUnits;
}

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
  const {
    selectedLanguage,
    onSelectLanguage,
    selectedTemperatureUnit,
    onSelectTemperatureUnit,
  } = useContext<SettingsContextType>(SettingsContext);
  const [selectedLocation, onSelectLocation] = useState<Location | null>(null);

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
              <Textfield
                name='language'
                label='Language'
              />
            </Grid>
            <Grid
              item
              xs={12}>
              <Textfield
                name='startDate'
                label='Start date'
              />
            </Grid>
            <Grid
              item
              xs={12}>
              <Textfield
                name='endDate'
                label='End date'
              />
            </Grid>
            <Grid
              item
              xs={12}>
              <Textfield
                name='location'
                label='Location'
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
      <Select<LanguageOption>
        css={classes.languageSelect}
        value={selectedLanguage}
        setValue={onSelectLanguage}
        labelId={LANGUAGE_CHOICE_LABEL_ID}
        label={LANGUAGE_CHOICE_LABEL}
        options={LANGUAGE_OPTIONS}
      />
      <DateRangePicker css={classes.dateRangePicker} />
      <LocationAutocomplete
        css={classes.locationAutocomplete}
        location={selectedLocation}
        setLocation={onSelectLocation}
        id={LOCATION_AUTOCOMPLETE}
      />
      <Select<TemperatureUnitOption>
        css={classes.temperatureUnitsSelect}
        value={selectedTemperatureUnit}
        setValue={onSelectTemperatureUnit}
        labelId={TEMPERATURE_UNITS_LABEL_ID}
        label={TEMPERATURE_UNITS_LABEL}
        options={TEMPERATURE_UNITS_OPTIONS}
      />
      {selectedLocation && <WeatherWidget location={selectedLocation} />}
    </>
  );
}
