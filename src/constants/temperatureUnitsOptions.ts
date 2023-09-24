import TemperatureUnits from 'constants/temperatureUnits';
import i18n from '../i18n';

const { t } = i18n;

const TEMPERATURE_UNITS_OPTIONS = [
  {
    label: `${t('temperatureUnits.kelvin')}, \u00B0K`,
    value: TemperatureUnits.KELVIN,
  },
  {
    label: `${t('temperatureUnits.celsius')}, \u2103`,
    value: TemperatureUnits.CELSIUS,
  },
  {
    label: `${t('temperatureUnits.fahrenheit')}, \u00B0F`,
    value: TemperatureUnits.FAHRENHEIT,
  },
];

export default TEMPERATURE_UNITS_OPTIONS;
