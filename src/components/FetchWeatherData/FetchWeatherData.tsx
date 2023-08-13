import { useState, useEffect } from 'react';
import apiClient from 'api';
import { LONDON_GEO } from './londonGeo';

// TODO: Describe the type of data in interface below
interface FetchedWeatherData {}

export default function FetchWeatherData() {
  const { lat, lon } = LONDON_GEO;
  const [, setWeatherData] = useState<FetchedWeatherData | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await apiClient.get<FetchedWeatherData>(
          '/data/2.5/forecast',
          {
            params: {
              lat,
              lon,
            },
          },
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeatherData().catch((error) => console.error(error));
  }, [lat, lon]);

  return null;
}
