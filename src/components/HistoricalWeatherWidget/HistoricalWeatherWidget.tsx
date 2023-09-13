import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import pick from 'lodash/pick';
import CircularProgress from '@mui/material/CircularProgress';
import { useSnackbar } from 'notistack';
import { FormValuesType } from 'components/HistoricalWeatherForm/validation';
import TableCell from 'components/TableCell';
import ForecastBody from 'types/forecast';
import findCountryNameByCode from 'utils/findCountryNameByCode';
import FORECAST from './forecast';
import WEEK_DAYS from './weekDays';

type Forecast = ForecastBody[];

interface Props {
  formValues: FormValuesType;
}

const MONDAY = 'Mon';
const SPINNER_SIZE = 25;
const WEEK_LENGTH = 7;

export default function HistoricalWeatherWidget({ formValues }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchForecast = () => {
      try {
        setIsLoading(true);
        const forecastData = FORECAST.list.map((data) =>
          pick(data, ['dt', 'main', 'weather']),
        );
        setForecast(forecastData);
      } catch (error) {
        enqueueSnackbar('No weather data found for this location', {
          variant: 'error',
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchForecast();
  }, [formValues, enqueueSnackbar]);

  const getDate = (unixDate: number) => {
    const date = new Date(unixDate * 1000);
    return date;
  };
  const formatDate = (date: Date) => {
    const formattedDate = format(date, 'dd MMM');
    return formattedDate;
  };
  const weeklyForecast = forecast?.reduce<Array<ForecastBody[]>>(
    (accumulator, dailyForecast) => {
      const { dt } = dailyForecast;
      const weekDay = getDate(dt).getDay();
      const currentWeekDay = WEEK_DAYS[weekDay - 1];

      if (currentWeekDay === MONDAY || accumulator.length === 0) {
        accumulator.push([dailyForecast]);
      } else {
        accumulator[accumulator.length - 1].push(dailyForecast);
      }
      return accumulator;
    },
    [[]],
  );

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
        {weeklyForecast?.map((weeklyWeather, index) => {
          const emptyCells = WEEK_LENGTH - weeklyWeather.length;
          return (
            <tr key={index}>
              {index === 0 &&
                Array.from({ length: emptyCells }).map((_, idx) => (
                  // We should leave some cells empty because user chooses historical forecast for specific dates and some days of week should be skipped
                  <td key={idx} />
                ))}
              {weeklyWeather.map((dailyWeather, idx) => (
                <TableCell
                  key={idx}
                  weather={dailyWeather}
                  formatDate={formatDate}
                  getDate={getDate}
                />
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
