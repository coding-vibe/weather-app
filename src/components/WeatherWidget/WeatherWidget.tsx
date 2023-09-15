import { useState, useEffect, useContext } from 'react';
import groupBy from 'lodash/groupBy';
import pick from 'lodash/pick';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useSnackbar } from 'notistack';
import apiClient from 'api';
import WeatherList from 'components/WeatherList';
import WeatherTable from 'components/WeatherTable';
import SettingsContext from 'contexts/SettingsContext';
import { ForecastAPIResponse, Forecast } from 'types/forecast';
import Location from 'types/location';
import SettingsContextType from 'types/settingsContextType';
import convertTimestampToDate, { formatDate } from 'utils/formatDate';
import * as classes from './styles';

interface Props {
  location: Location;
}

const SPINNER_SIZE = 25;

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
      {forecast && (
        <WeatherTable
          css={classes.weatherTable}
          forecast={forecast}
          location={location}
        />
      )}
      {forecast && (
        <WeatherList
          css={classes.weatherList}
          forecast={forecast}
          location={location}
        />
      )}
    </Box>
  );
}
