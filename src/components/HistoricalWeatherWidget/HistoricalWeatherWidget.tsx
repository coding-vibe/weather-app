import HistoricalWeatherList from 'components/HistoricalWeatherList';
import HistoricalWeatherTable from 'components/HistoricalWeatherTable';
import ForecastBody from 'types/forecast';
import convertTimestampToDate from 'utils/convertTimestampToDate';
import WEEK_DAY_TRANSLATION_KEYS from 'constants/weekDays';
import { FormValuesType } from '../HistoricalWeatherForm/validation';
import * as classes from './styles';

interface Props {
  forecast: ForecastBody[];
  searchParams: FormValuesType;
  className?: string;
}

const [MONDAY] = WEEK_DAY_TRANSLATION_KEYS;

export default function HistoricalWeatherWidget({
  forecast,
  searchParams,
  className,
}: Props) {
  const weeklyForecast = forecast.reduce<ForecastBody[][]>(
    (accumulator, dailyForecast) => {
      const { dt } = dailyForecast;
      const weekDayIndex = convertTimestampToDate(dt).getDay() - 1;
      const weekDay = WEEK_DAY_TRANSLATION_KEYS[weekDayIndex];

      if (weekDay === MONDAY) {
        accumulator.push([dailyForecast]);
      } else {
        accumulator[accumulator.length - 1].push(dailyForecast);
      }

      return accumulator;
    },
    [[]],
  );

  const {
    location: { country, name },
  } = searchParams;

  return (
    <div>
      <HistoricalWeatherTable
        className={className}
        country={country}
        css={classes.table}
        name={name}
        weeklyForecast={weeklyForecast}
      />
      <HistoricalWeatherList
        country={country}
        css={classes.list}
        name={name}
        weeklyForecast={weeklyForecast}
      />
    </div>
  );
}

HistoricalWeatherWidget.defaultProps = {
  className: null,
};
