import TemperatureUnits from 'constants/temperatureUnits';

const formatTemperatureUnits = (tempUnit: TemperatureUnits) => {
  switch (tempUnit) {
    case TemperatureUnits.KELVIN:
      return '\u00B0K';
    case TemperatureUnits.CELSIUS:
      return '\u2103';
    case TemperatureUnits.FAHRENHEIT:
      return '\u00B0F';
    default:
      throw new Error('New temperature unit found');
  }
};

const formatTemperatureData = (
  temperature: number,
  temperatureUnit: TemperatureUnits,
) => {
  const formattedTemperature = `${Math.floor(
    temperature,
  )}${formatTemperatureUnits(temperatureUnit)}`;

  return temperature > 0 ? `+${formattedTemperature}` : formattedTemperature;
};

export default formatTemperatureData;
