import { useState, useEffect, useContext } from 'react';
import { format } from 'date-fns';
import groupBy from 'lodash/groupBy';
import pick from 'lodash/pick';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Collapse from '@mui/material/Collapse';
// import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import MUITableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import { useSnackbar } from 'notistack';
import apiClient from 'api';
import TableCell from 'components/TableCell';
import TemperatureUnits from 'constants/temperatureUnits';
import SettingsContext from 'contexts/SettingsContext';
import ForecastBody, { ForecastAPIResponse } from 'types/forecast';
import Location from 'types/location';
import SettingsContextType from 'types/settingsContextType';
import findCountryNameByCode from 'utils/findCountryNameByCode';
import convertTimestampToDate, { formatDate } from 'utils/formatDate';
import HOURS from './hours';
import * as classes from './styles';

type Forecast = Array<[string, ForecastBody[]]>;

interface Props {
  location: Location;
}

const SPINNER_SIZE = 25;
const TIME_PERIODS_AMOUNT = 8;

export default function WeatherWidget({ location }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { selectedLanguage, selectedTemperatureUnit } =
    useContext<SettingsContextType>(SettingsContext);
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (openItemIndex === index) {
      setOpenItemIndex(null);
    } else {
      setOpenItemIndex(index);
    }
  };

  const formatTemperatureUnits = (tempUnit: TemperatureUnits) => {
    switch (tempUnit) {
      case TemperatureUnits.KELVIN:
        return '\u00B0K';
      case TemperatureUnits.CELSIUS:
        return '\u2103';
      case TemperatureUnits.FAHRENHEIT:
        return '\u00B0F';
      default:
        throw new Error('New temperature unit found');
    }
  };
  const formatTemperatureData = (
    temperature: number,
    temperatureUnit: TemperatureUnits,
  ) => `${Math.floor(temperature)}${formatTemperatureUnits(temperatureUnit)}`;

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        setIsLoading(true);
        const { lat, lon } = location;
        const response = await apiClient.get<ForecastAPIResponse>(
          '/data/2.5/forecast',
          {
            params: {
              lat,
              lon,
              units: selectedTemperatureUnit,
              lang: selectedLanguage,
            },
          },
        );
        const { list } = response.data;
        const forecastData = list.map((data) =>
          pick(data, ['dt', 'main', 'weather']),
        );
        const forecastByDate = groupBy(forecastData, ({ dt }) =>
          formatDate(convertTimestampToDate(dt)),
        );
        const formattedForecast = Object.entries(forecastByDate);
        setForecast(formattedForecast);
      } catch (error) {
        enqueueSnackbar('No weather data found for this location', {
          variant: 'error',
        });
      } finally {
        setIsLoading(false);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchForecast();
  }, [location, selectedLanguage, selectedTemperatureUnit, enqueueSnackbar]);

  return isLoading ? (
    <CircularProgress size={SPINNER_SIZE} />
  ) : (
    <Box>
      <p css={classes.tableTitle}>
        5-Day Weather Forecast for&nbsp;
        {location &&
          `${findCountryNameByCode(location.country)}, ${location.name}`}
      </p>
      <TableContainer
        component={Paper}
        css={classes.tableContainer}>
        <Table aria-label='5-Day Weather Forecast'>
          <TableHead>
            <TableRow>
              <MUITableCell css={classes.tableHeadCell}>
                Date/Hours
              </MUITableCell>
              {HOURS.map((hour) => (
                <MUITableCell
                  align='center'
                  css={classes.tableHeadCell}
                  key={hour}>
                  {hour}
                </MUITableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {forecast?.map(([date, weather], index) => {
              const emptyCells = TIME_PERIODS_AMOUNT - weather.length;
              return (
                <TableRow
                  hover
                  key={date}>
                  <MUITableCell css={classes.tableHeadCell}>
                    {date}
                  </MUITableCell>
                  {index === 0 &&
                    Array.from({ length: emptyCells }).map((_, idx) => (
                      // We should leave some cells empty because the weather API doesn't provide data for the past hours of the current day. Also, some cells at the end of the table are empty because data is only provided for the next 5 days
                      <MUITableCell key={idx} />
                    ))}
                  {weather.map((hourlyWeather, idx) => (
                    <TableCell
                      key={idx}
                      weather={hourlyWeather}
                    />
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <List component='nav'>
        <ListItem>
          <ListItemButton>
            <ListItemText>
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
                    in={openItemIndex === index}
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
                                  {formatTemperatureData(
                                    temp,
                                    selectedTemperatureUnit,
                                  )}
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
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
