import { useTranslation } from 'react-i18next';
import List from '@mui/material/List';
import WeatherContentHeader from 'components/WeatherContentHeader';
import WeatherListItem from 'components/WeatherListItem';
import ForecastBody from 'types/forecast';
import convertTimestampToDate from 'utils/convertTimestampToDate';
import formatDate from 'utils/formatDate';
import * as classes from './styles';

interface Props {
  weeklyForecast: ForecastBody[][];
  country: string;
  name: string;
  className?: string;
}

export default function HistoricalWeatherList({
  weeklyForecast,
  country,
  name,
  className,
}: Props) {
  const { t } = useTranslation();

  return (
    <List
      disablePadding
      className={className}
      css={classes.list}
      subheader={
        <WeatherContentHeader
          country={country}
          css={classes.listTitle}
          name={name}
          text={t('texts.propHeaderHistoricalWeather')}
        />
      }>
      {weeklyForecast.map((forecast) =>
        forecast.map((dailyForecast) => {
          const date = formatDate(convertTimestampToDate(dailyForecast.dt));

          return (
            <WeatherListItem
              weather={dailyForecast}
              key={dailyForecast.dt}>
              <p>{date}</p>
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
