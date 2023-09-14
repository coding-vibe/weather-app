import { useState, useEffect, useContext } from 'react';
import { format, fromUnixTime } from 'date-fns';
import groupBy from 'lodash/groupBy';
import pick from 'lodash/pick';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import MUITableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSnackbar } from 'notistack';
import apiClient from 'api';
import TableCell from 'components/TableCell';
import SettingsContext from 'contexts/SettingsContext';
import ForecastBody, { ForecastAPIResponse } from 'types/forecast';
import Location from 'types/location';
import SettingsContextType from 'types/settingsContextType';
import findCountryNameByCode from 'utils/findCountryNameByCode';
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
        const forecastByDate = groupBy(forecastData, (element) => {
          const dateObject = fromUnixTime(element.dt);
          const formattedDate = format(dateObject, 'dd MMM');
          return formattedDate;
        });
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
    </Box>
  );
}
