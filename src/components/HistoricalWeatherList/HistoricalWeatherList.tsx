import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import WeatherListItem from 'components/WeatherListItem';
import ForecastBody from 'types/forecast';
import convertTimestampToDate from 'utils/convertTimestampToDate';
import formatDate from 'utils/formatDate';
import * as classes from './styles';

interface Props {
  weeklyForecast: ForecastBody[][];
  className?: string;
}

export default function HistoricalWeatherList({
  weeklyForecast,
  className,
}: Props) {
  return (
    <List
      disablePadding
      className={className}
      css={classes.list}>
      {weeklyForecast.map((forecast) =>
        forecast.map((dailyForecast) => {
          const date = formatDate(convertTimestampToDate(dailyForecast.dt));

          return (
            <WeatherListItem
              weather={dailyForecast}
              key={dailyForecast.dt}>
              <Typography variant='h2'>{date}</Typography>
            </WeatherListItem>
          );
        }),
      )}
    </List>
  );
}

HistoricalWeatherList.defaultProps = {
  className: null,
};
