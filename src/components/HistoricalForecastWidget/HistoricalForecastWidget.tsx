import { useEffect, useState } from 'react';
import { format, fromUnixTime } from 'date-fns';
import pick from 'lodash/pick';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';
import { useSnackbar } from 'notistack';
import { FormValuesType } from 'components/HistoricalForecastForm/validation';
import ForecastBody from 'types/forecastBody';
import findCountryNameByCode from 'utils/findCountryNameByCode';
import formatTemperatureData from 'utils/formatTemperature';
import FORECAST from './forecast';
import WEEK_DAYS from './weekDays';

interface Props {
  formValues: FormValuesType;
}

const SPINNER_SIZE = 25;

export default function HistoricalForecastWidget({ formValues }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const [forecast, setForecast] = useState<ForecastBody[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(formValues);
    const fetchForecast = () => {
      try {
        setIsLoading(true);
        const { list } = FORECAST;
        const forecastData = list.map((data) =>
          pick(data, ['dt', 'main', 'weather']),
        );
        console.log(forecastData);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setForecast(forecastData);
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
  }, [formValues, enqueueSnackbar]);

  const getDate = (unixDate: number) => {
    const dateObject = fromUnixTime(unixDate);
    return dateObject;
  };
  const getFormattedDate = (date: Date) => {
    const formattedDate = format(date, 'dd MMM');
    return formattedDate;
  };

  return isLoading ? (
    <CircularProgress size={SPINNER_SIZE} />
  ) : (
    <table>
      <caption>
        {formValues.location &&
          `${findCountryNameByCode(formValues.location.country)}, ${
            formValues.location.name
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
        {forecast?.map((forecastElement, index) => {
          const {
            dt,
            weather: [{ icon, description }],
            main: { temp, humidity },
          } = forecastElement;
          const date = getDate(dt);
          if (index === 0) {
            const weekDay = date.getDay();
            console.log(weekDay);
            const currentWeekDay = WEEK_DAYS[weekDay - 1];
            console.log(currentWeekDay);
          }
          return (
            <td key={dt}>
              {getFormattedDate(date)}
              <Tooltip title={description}>
                <img
                  src={`${import.meta.env.VITE_BASE_URL}img/wn/${icon}.png`}
                  alt='Weather condition'
                />
              </Tooltip>
              {`Temperature: ${formatTemperatureData(
                temp,
                formValues.temperatureUnit,
              )} Humidity: ${humidity}%`}
            </td>
          );
        })}
      </tbody>
    </table>
  );
}
