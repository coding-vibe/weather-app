import { FormValuesType } from 'components/HistoricalWeatherForm/validation';
import TableCell from 'components/TableCell';
import ForecastBody from 'types/forecast';
import convertTimestampToDate from 'utils/convertTimestampToDate';
import findCountryNameByCode from 'utils/findCountryNameByCode';
import WEEK_DAYS from './weekDays';

interface Props {
  forecast: ForecastBody[];
  searchParams: FormValuesType;
}

const MONDAY = 'Mon';
const WEEK_LENGTH = 7;

export default function HistoricalWeatherWidget({
  forecast,
  searchParams,
}: Props) {
  const weeklyForecast = forecast?.reduce<ForecastBody[][]>(
    (accumulator, dailyForecast) => {
      const { dt } = dailyForecast;
      const weekDayIndex = convertTimestampToDate(dt).getDay() - 1;
      const weekDay = WEEK_DAYS[weekDayIndex];

      if (weekDay === MONDAY) {
        accumulator.push([dailyForecast]);
      } else {
        accumulator[accumulator.length - 1].push(dailyForecast);
      }
      return accumulator;
    },
    [[]],
  );

  return (
    <table>
      <caption>
        {`${findCountryNameByCode(searchParams.location.country)}, ${
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
          const emptyCellsCount = WEEK_LENGTH - weeklyWeather.length;
          return (
            <tr key={index}>
              {index === 0 &&
                Array.from({ length: emptyCellsCount }).map((_, idx) => (
                  // We should leave some cells empty because user chooses historical forecast for specific dates and some days of week should be skipped
                  <td key={idx} />
                ))}
              {weeklyWeather.map((dailyWeather, idx) => (
                <TableCell
                  isDateShown
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
