import CircularProgress from '@mui/material/CircularProgress';
import TableCell from 'components/TableCell';
import ForecastBody, { Forecast } from 'types/forecast';
import convertTimestampToDate from 'utils/formatDate';
import findCountryNameByCode from 'utils/findCountryNameByCode';
import WEEK_DAYS from './weekDays';

interface Props {
  forecast: Forecast;
  isLoading: boolean;
}

const MONDAY = 'Mon';
const SPINNER_SIZE = 25;
const WEEK_LENGTH = 7;

export default function HistoricalWeatherWidget({
  forecast,
  isLoading,
}: Props) {
  const weeklyForecast = forecast?.reduce<ForecastBody[][]>(
    (accumulator, dailyForecast) => {
      const { dt } = dailyForecast;
      const weekDay = convertTimestampToDate(dt).getDay();
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
        {forecast.location &&
          `${findCountryNameByCode(searchParams.location.country)}, ${
            searchParams.location.name
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
                  displayDate
                  key={idx}
                  weather={dailyWeather}
                />
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
