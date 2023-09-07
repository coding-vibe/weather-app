import { useEffect, useState } from 'react';
import { format, fromUnixTime } from 'date-fns';
import groupBy from 'lodash/groupBy';
import pick from 'lodash/pick';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';
import { useSnackbar } from 'notistack';
import { FormValuesType } from 'components/HistoricalForecast/validation';
import TemperatureUnits from 'constants/temperatureUnits';
import ForecastBody from 'types/forecastBody';
import findCountryNameByCode from 'utils/findCountryNameByCode';
import FORECAST from './forecast';
import WEEK_DAYS from './weekDays';

type Forecast = Array<[string, [ForecastBody]]>;

interface Props {
  values: FormValuesType;
}

const SPINNER_SIZE = 25;

export default function HistoricalForecastWidget({ values }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(values);
    const fetchForecast = () => {
      try {
        setIsLoading(true);
        const { list } = FORECAST;
        console.log(list);
        const forecastData = list.map((data) =>
          pick(data, ['dt', 'main', 'weather']),
        );
        const forecastByDate = groupBy(forecastData, (element) => {
          const dateObject = fromUnixTime(element.dt);
          const formattedDate = format(dateObject, `dd MMM`);
          return formattedDate;
        });
        const formattedForecast = Object.entries(forecastByDate);
        setForecast(formattedForecast);
      } catch (error) {
        enqueueSnackbar('No weather data found for this location', {
          variant: 'error',
        });
      } finally {
        setIsLoading(false);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchForecast();
  }, [values, enqueueSnackbar]);

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
  const formatTemperatureData = (temp: number, tempUnit: TemperatureUnits) =>
    `${Math.floor(temp)}${formatTemperatureUnits(tempUnit)}`;

  return isLoading ? (
    <CircularProgress size={SPINNER_SIZE} />
  ) : (
    <table>
      <caption>
        {values.location &&
          `${findCountryNameByCode(values.location.country)}, ${
            values.location.name
          }`}
      </caption>
      <thead>
        <tr>
          {WEEK_DAYS.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {forecast?.map(([date, weather], index) => (
          <tr key={index}>
            {weather.map((weatherReport, idx) => {
              const {
                dt,
                weather: [{ icon, description }],
                main: { temp, humidity },
              } = weatherReport;
              const formattedDate = new Date(dt * 1000);
              const weekDay = formattedDate.getDay();
              console.log(weekDay);
              return (
                <td key={idx}>
                  {date}
                  <Tooltip title={description}>
                    <img
                      src={`${import.meta.env.VITE_BASE_URL}img/wn/${icon}.png`}
                      alt='Weather condition'
                    />
                  </Tooltip>
                  {`Temperature: ${formatTemperatureData(
                    temp,
                    values.temperatureUnit,
                  )}
                    Humidity: ${humidity}%`}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
