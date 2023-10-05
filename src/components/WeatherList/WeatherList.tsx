import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import WeatherContentHeader from 'components/WeatherContentHeader';
import WeatherListItem from 'components/WeatherListItem';
import { Forecast } from 'types/forecast';
import Location from 'types/location';
import * as classes from './styles';

interface Props {
  forecast: Forecast;
  location: Location;
  className?: string;
}

const DATE_FORMAT = 'HH:00';

export default function WeatherList({ forecast, location, className }: Props) {
  const forecastDates = forecast.map(([date]) => date);
  const [openedListItems, setOpenedListItems] = useState<Set<string>>(
    new Set(forecastDates),
  );
  const { t } = useTranslation();

  const handleClick = (date: string) => {
    if (openedListItems.has(date)) {
      openedListItems.delete(date);
    } else {
      openedListItems.add(date);
    }
    setOpenedListItems(new Set(openedListItems));
  };

  return (
    <List
      disablePadding
      className={className}
      css={classes.headList}
      subheader={
        <WeatherContentHeader
          country={location.country}
          css={classes.headListTitle}
          name={location.name}
          text={t('texts.headerWeatherForecast')}
        />
      }>
      {forecast.map(([date, weather]) => (
        <List
          disablePadding
          key={date}>
          <ListItem
            disablePadding
            css={classes.mainListItem}
            key={date}
            onClick={() => handleClick(date)}>
            <ListItemButton css={classes.mainListItemButton}>
              <ListItemText css={classes.mainListItemText}>{date}</ListItemText>
            </ListItemButton>
          </ListItem>
          <Collapse
            in={openedListItems.has(date)}
            timeout='auto'
            unmountOnExit>
            {weather.map((hourlyWeather) => {
              const hour = format(hourlyWeather.dt * 1000, DATE_FORMAT);

              return (
                <List
                  disablePadding
                  key={hourlyWeather.dt}>
                  <WeatherListItem weather={hourlyWeather}>
                    <span>{hour}</span>
                  </WeatherListItem>
                </List>
              );
            })}
          </Collapse>
        </List>
      ))}
    </List>
  );
}

WeatherList.defaultProps = {
  className: null,
};
