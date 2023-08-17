import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';
import pick from 'lodash/pick';
import groupBy from 'lodash/groupBy';
import { useSnackbar } from 'notistack';
import { format, fromUnixTime } from 'date-fns';
import apiClient from 'api';
import Location from 'types/location';
import findCountryNameByCode from 'utils/findCountryNameByCode';
import HOURS from './hours';

interface ForecastBody {
  dt: number;
  main: {
    humidity: number;
    temp: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    },
  ];
}

interface ForecastAPIResponse {
  list: ForecastBody[];
}

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
            },
          },
        );
        const { list } = response.data;
        const forecastData = list.map((data) =>
          pick(data, ['dt', 'main', 'weather']),
        );
        const forecastByDate = groupBy(forecastData, (element) => {
          const dateObject = fromUnixTime(element.dt);
          const formattedDate = format(dateObject, `dd-MM`);
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
  }, [location, enqueueSnackbar]);

  const roundTemperature = (temp: number) => Math.floor(temp / 10);

  return isLoading ? (
    <CircularProgress size={SPINNER_SIZE} />
  ) : (
    <table>
      <caption>
        {location &&
          `${findCountryNameByCode(location.country)}, ${location.name}`}
      </caption>
      <thead>
        <tr>
          <th>Date/Hours</th>
          {HOURS.map((hour) => (
            <th key={hour}>{hour}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {forecast?.map(([date, weather], index) => {
          const emptyCells = TIME_PERIODS_AMOUNT - weather.length;
          return (
            <tr key={date}>
              <td>{date}</td>
              {index === 0 &&
                Array.from({ length: emptyCells }).map((_, idx) => (
                  // We should leave some cells empty because the weather API doesn't provide data for the past hours of the current day. Also, some cells at the end of the table are empty because data is only provided for the next 5 days
                  <td key={idx}> </td>
                ))}
              {weather.map((weatherReport) => {
                const {
                  dt,
                  weather: [{ icon, description }],
                  main: { temp, humidity },
                } = weatherReport;
                return (
                  <td key={dt}>
                    <Tooltip title={description}>
                      <img
                        src={`${
                          import.meta.env.VITE_BASE_URL
                        }img/wn/${icon}.png`}
                        alt='Weather condition'
                      />
                    </Tooltip>
                    {`Temperature: ${roundTemperature(
                      temp,
                    )}°C Humidity: ${humidity}%`}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
