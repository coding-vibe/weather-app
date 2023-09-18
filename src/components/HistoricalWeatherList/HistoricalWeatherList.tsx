import { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import WeatherContentHeader from 'components/WeatherContentHeader';
import SettingsContext from 'contexts/SettingsContext';
import ForecastBody from 'types/forecast';
import SettingsContextType from 'types/settingsContextType';
import convertTimestampToDate from 'utils/convertTimestampToDate';
import formatDate from 'utils/formatDate';
import formatTemperatureData from 'utils/formatTemperature';
import generateIconURL from 'utils/generateIconURL';
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
  const { selectedTemperatureUnit } =
    useContext<SettingsContextType>(SettingsContext);

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
          text='Historical'
        />
      }>
      {weeklyForecast?.map((weeklyWeather) =>
        weeklyWeather.map((dailyWeather) => {
          const {
            dt,
            main: { humidity, temp },
            weather: [{ description, icon }],
          } = dailyWeather;
          return (
            <ListItem disablePadding>
              <ListItemText css={classes.listItemText}>
                <p>{formatDate(convertTimestampToDate(dt))}</p>
                <Tooltip title={description}>
                  <img
                    alt='Weather condition'
                    src={generateIconURL(icon)}
                  />
                </Tooltip>
                <div css={classes.data}>
                  <span>
                    Temp:&nbsp;
                    <Typography
                      component='span'
                      css={classes.text}
                      variant='subtitle2'>
                      {formatTemperatureData(temp, selectedTemperatureUnit)}
                    </Typography>
                  </span>
                  <span>
                    Hum:&nbsp;
                    <Typography
                      component='span'
                      css={classes.text}
                      variant='subtitle2'>
                      {humidity}%
                    </Typography>
                  </span>
                </div>
              </ListItemText>
            </ListItem>
          );
        }),
      )}
    </List>
  );
}

HistoricalWeatherList.defaultProps = {
  className: null,
};
