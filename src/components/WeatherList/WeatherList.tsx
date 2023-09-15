import { useContext, useState } from 'react';
import { format } from 'date-fns';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
import Tooltip from '@mui/material/Tooltip';
import SettingsContext from 'contexts/SettingsContext';
import { Forecast } from 'types/forecast';
import SettingsContextType from 'types/settingsContextType';
import formatTemperatureData from 'utils/formatTemperature';

interface Props {
  forecast: Forecast;
}

export default function WeatherList({ forecast }: Props) {
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
    <List component='nav'>
      {forecast?.map(([date, weather], index) => (
        <List component='nav'>
          <ListItem
            key={index}
            onClick={() => handleClick(index)}>
            <ListItemButton>
              <ListItemText>{date}</ListItemText>
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
                  component='div'
                  disablePadding
                  key={idx}>
                  <ListItem>
                    <ListItemText>
                      <p>{hour}</p>
                      <Tooltip title={description}>
                        <img
                          alt='Weather condition'
                          src={`${
                            import.meta.env.VITE_BASE_URL
                          }img/wn/${icon}.png`}
                        />
                      </Tooltip>
                      <p>
                        Temp:&nbsp;
                        <span>
                          {formatTemperatureData(temp, selectedTemperatureUnit)}
                        </span>
                      </p>
                      <p>
                        Hum:&nbsp;<span>{humidity}%</span>
                      </p>
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
