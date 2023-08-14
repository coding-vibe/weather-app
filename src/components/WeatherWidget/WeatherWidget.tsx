/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import pick from 'lodash/pick';
import { useSnackbar } from 'notistack';
import apiClient from 'api';
import Location from 'types/location';

interface Forecast {
  list: {
    dt: string;
    main: {
      humidity: number;
      temp: number;
    };
    weather: {
      description: string;
      icon: string;
      main: string;
    };
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
  console.log(forecast);

  return forecast ? (
    <table>
      {/* <thead>{`Weather 5 days' forecast for ${locationData.country}, ${locationData.name}`}</thead>
      {locationWeatherData.map((date, index) => (
        <tr key={index}>
          <td>{pick(date, ['data_txt'])}</td>
        </tr>
      ))} */}
    </table>
  ) : null;
}
