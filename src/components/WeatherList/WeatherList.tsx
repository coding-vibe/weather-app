import { useContext, useState } from 'react';
import { format } from 'date-fns';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import WeatherContentHeader from 'components/WeatherContentHeader';
import SettingsContext from 'contexts/SettingsContext';
import { Forecast } from 'types/forecast';
import Location from 'types/location';
import SettingsContextType from 'types/settingsContextType';
import formatTemperatureData from 'utils/formatTemperature';
import generateIconURL from 'utils/generateIconURL';
import * as classes from './styles';

interface Props {
  forecast: Forecast;
  location: Location;
  className?: string;
}

export default function WeatherList({ forecast, location, className }: Props) {
  const { selectedTemperatureUnit } =
    useContext<SettingsContextType>(SettingsContext);
  const forecastDates = new Set<string>();
  forecast.forEach(([date]) => forecastDates.add(date));
  const [openItems, setOpenItems] = useState<Set<string>>(forecastDates);

  const handleClick = (date: string) => {
    if (openItems.has(date)) {
      openItems.delete(date);
    } else {
      openItems.add(date);
    }
    setOpenItems(new Set(openItems));
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
          text='5-Day'
        />
      }>
      {forecast?.map(([date, weather]) => (
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
            in={openItems.has(date)}
            timeout='auto'
            unmountOnExit>
            {weather.map((hourlyWeather) => {
              const {
                dt,
                main: { humidity, temp },
                weather: [{ description, icon }],
              } = hourlyWeather;
              const hour = format(dt * 1000, 'hh:00 a');
              return (
                <List
                  disablePadding
                  key={dt}>
                  <ListItem disablePadding>
                    <ListItemText css={classes.listItemText}>
                      <span>{hour}</span>
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
                            {formatTemperatureData(
                              temp,
                              selectedTemperatureUnit,
                            )}
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
