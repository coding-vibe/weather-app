import { useContext, useState } from 'react';
import { format } from 'date-fns';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Tooltip from '@mui/material/Tooltip';
import ICON_BASE_URL from 'constants/iconBaseURL';
import SettingsContext from 'contexts/SettingsContext';
import { Forecast } from 'types/forecast';
import Location from 'types/location';
import SettingsContextType from 'types/settingsContextType';
import findCountryNameByCode from 'utils/findCountryNameByCode';
import formatTemperatureData from 'utils/formatTemperature';
import * as classes from './styles';

interface Props {
  forecast: Forecast;
  location: Location;
  className?: string;
}

export default function WeatherList({ forecast, location, className }: Props) {
  const { selectedTemperatureUnit } =
    useContext<SettingsContextType>(SettingsContext);
  const [openItems, setOpenItems] = useState<boolean[]>(
    Array(forecast.length).fill(true),
  );

  const handleClick = (index: number) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <List
      component='ul'
      className={className}
      css={classes.headList}
      subheader={
        <ListSubheader component='p'>
          5-Day Weather Forecast for&nbsp;
          {location &&
            `${findCountryNameByCode(location.country)}, ${location.name}`}
        </ListSubheader>
      }>
      {forecast?.map(([date, weather], index) => (
        <List
          key={date}
          component='ul'
          css={classes.mainList}>
          <ListItem
            key={index}
            css={classes.mainListItem}
            onClick={() => handleClick(index)}>
            <ListItemButton css={classes.mainListItemButton}>
              <ListItemText css={classes.mainListItemText}>{date}</ListItemText>
            </ListItemButton>
          </ListItem>
          <Collapse
            in={openItems[index]}
            timeout='auto'
            unmountOnExit>
            {weather.map((hourlyWeather, idx) => {
              const {
                dt,
                main: { humidity, temp },
                weather: [{ description, icon }],
              } = hourlyWeather;
              const hour = format(dt * 1000, 'hh:00 a');
              return (
                <List
                  component='ul'
                  disablePadding
                  key={idx}>
                  <ListItem css={classes.listItem}>
                    <ListItemText css={classes.listItemText}>
                      <p>{hour}</p>
                      <Tooltip title={description}>
                        <img
                          alt='Weather condition'
                          src={`${ICON_BASE_URL}img/wn/${icon}.png`}
                        />
                      </Tooltip>
                      <div css={classes.data}>
                        <span>
                          Temp:&nbsp;
                          <span css={classes.text}>
                            {formatTemperatureData(
                              temp,
                              selectedTemperatureUnit,
                            )}
                          </span>
                        </span>
                        <span>
                          Hum:&nbsp;<span css={classes.text}>{humidity}%</span>
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
