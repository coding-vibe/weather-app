import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';
import pick from 'lodash/pick';
import groupBy from 'lodash/groupBy';
import { useSnackbar } from 'notistack';
import { fromUnixTime } from 'date-fns';
import apiClient from 'api';
import Location from 'types/location';
import HOURS from './hours';

interface WeatherData {
  description: string;
  icon: string;
}

interface Forecast {
  list: {
    dt: number;
    main: {
      humidity: number;
      temp: number;
    };
    weather: WeatherData[];
    // weather: [string, string][];
  }[];
}

interface Props {
  location: Location | null;
}

export default function WeatherWidget({ location }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const [forecast, setForecast] = useState<Forecast['list'] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const SPINNER_SIZE = 25;

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        if (location) {
          setIsLoading(true);
          const { lat, lon } = location;
          const response = await apiClient.get<Forecast>('/data/2.5/forecast', {
            params: {
              lat,
              lon,
            },
          });
          const { list } = response.data;
          const forecastData = list.map((data) =>
            pick(data, ['dt', 'main', 'weather']),
          );
          setForecast(forecastData);
        }
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
  }, [location, enqueueSnackbar]);

  const forecastByDate = groupBy(forecast, (element) => {
    const dateObject = fromUnixTime(element.dt);
    const date = dateObject.getDate();
    const month = dateObject.getMonth();
    const formattedMonth = month <= 9 ? `0${month + 1}` : `${month + 1}`;
    return `${date}-${formattedMonth}`;
  });
  const formattedForecast = Object.entries(forecastByDate);
  console.log(formattedForecast);

  return (
    <>
      {isLoading && <CircularProgress size={SPINNER_SIZE} />}
      <table>
        <thead>
          <tr>
            <th>Date/Hours</th>
            {HOURS.map((hour) => (
              <th key={hour}>{hour}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {formattedForecast.map((element) => {
            const [date, weather] = element;
            return (
              <tr key={date}>
                <td>{date}</td>
                {weather.map((el) => {
                  const { icon, description } = el.weather[0];
                  const { temp, humidity } = el.main;
                  return (
                    <td key={`${temp}-${humidity}-${icon}-${description}`}>
                      <Tooltip title={description}>
                        <img
                          src={`${
                            import.meta.env.VITE_BASE_URL
                          }img/wn/${icon}.png`}
                          alt='Weather condition'
                        />
                      </Tooltip>
                      {`Temperature: ${Math.floor(
                        temp / 10,
                      )}°C Humidity: ${humidity}%`}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
