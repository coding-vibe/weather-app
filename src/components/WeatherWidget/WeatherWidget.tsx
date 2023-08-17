import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';
import pick from 'lodash/pick';
import groupBy from 'lodash/groupBy';
import { useSnackbar } from 'notistack';
import { format, fromUnixTime } from 'date-fns';
import apiClient from 'api';
import Location from 'types/location';
import COUNTRY_CODES from 'components/LocationAutocomplete/countryCodes';
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

interface Forecast {
  list: ForecastBody[];
}

interface FormattedForecast
  extends Array<[string, Pick<ForecastBody, 'dt' | 'main' | 'weather'>[]]> {}

interface Props {
  location: Location | null;
}

export default function WeatherWidget({ location }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const [forecast, setForecast] = useState<FormattedForecast | null>(null);
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
          const forecastByDate = groupBy(forecastData, (element) => {
            const dateObject = fromUnixTime(element.dt);
            const formattedDate = format(dateObject, `dd-MM`);
            return formattedDate;
          });
          const formattedForecast = Object.entries(forecastByDate);
          setForecast(formattedForecast);
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

  const roundTemperature = (temp: number) => {
    const roundedTemperature = Math.floor(temp / 10);
    return roundedTemperature;
  };

  return (
    <>
      {isLoading && <CircularProgress size={SPINNER_SIZE} />}
      <table>
        <caption>
          {location &&
            `${COUNTRY_CODES.find(
              (country) => country.code === location.country,
            )?.name}, ${location.name}`}
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
          {forecast?.map((element) => {
            const [date, weather] = element;
            return (
              <tr key={date}>
                <td>{date}</td>
                {weather.map((el) => {
                  // const dateObject = fromUnixTime(el.dt);
                  // const currentHour = dateObject.getHours();
                  // const currentHourIndex = currentHour / 3;
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
    </>
  );
}
