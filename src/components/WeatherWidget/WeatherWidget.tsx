import { useState, useEffect } from 'react';
import pick from 'lodash/pick';
import groupBy from 'lodash/groupBy';
import { useSnackbar } from 'notistack';
import { fromUnixTime } from 'date-fns';
import apiClient from 'api';
import Location from 'types/location';
import { HOURS } from './hours';

interface Forecast {
  list: {
    dt: number;
    main: {
      humidity: number;
      temp: number;
    };
    weather: {
      description: string;
      icon: string;
      main: string;
    }[];
  }[];
}

interface Props {
  selectedLocation: Location | null;
}

export default function WeatherWidget({ selectedLocation }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const [forecast, setForecast] = useState<Forecast['list'] | null>(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        if (selectedLocation) {
          const { lat, lon } = selectedLocation;
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
        enqueueSnackbar(
          'Sorry, we could not find any results that match your search.',
          { variant: 'error' },
        );
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchForecast();
  }, [selectedLocation, enqueueSnackbar]);

  const getDate = (element: Forecast['list'][0]) => {
    const dateObject = fromUnixTime(element.dt);
    const date = dateObject.getDate();
    const month = dateObject.getMonth();
    const formattedMonth = month <= 9 ? `0${month + 1}` : `${month + 1}`;
    return `${date}.${formattedMonth}`;
  };
  const forecastByDate = groupBy(forecast, getDate);
  const formattedForecast = Object.entries(forecastByDate);

  return forecast ? (
    <table>
      <thead>
        <tr>
          <th>Date/Hours</th>
          {HOURS.map((hour, index) => (
            <th key={index}>{hour}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {formattedForecast.map((element, index) => {
          const date = element[0];
          const weather = element[1].map((el) => {
            const { icon } = el.weather[0];
            const imageUrl = `https://openweathermap.org/img/wn/${icon}.png`;
            const weatherIcon = (
              <img
                src={imageUrl}
                alt='Weather icon'
              />
            );
            const { temp, humidity } = el.main;
            const weatherData = `Temperature: ${Math.floor(
              temp / 10,
            )}°C Humidity: ${humidity}%`;
            return (
              <>
                {weatherIcon}
                {weatherData}
              </>
            );
          });
          return (
            <tr key={index}>
              <td>{date}</td>
              {weather.map((data, idx) => (
                <td key={idx}>{data}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : null;
}
