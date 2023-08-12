import { useState, useEffect } from 'react';
import { axiosDefaultConfig } from 'api/axiosDefaultConfig';
import Location from 'components/AutocompleteInput/locationInterface';

// TODO: Describe the type of data in interface below
interface FetchedWeatherData {}

interface Props {
  selectedLocation: Location | null;
}

export default function FetchWeatherData({ selectedLocation }: Props) {
  const [, setWeatherData] = useState<FetchedWeatherData | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (!selectedLocation) {
          return;
        }
        const { name, lat, lon, country, state } = selectedLocation;
        const response = await axiosDefaultConfig.get<FetchedWeatherData>(
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
  }, [selectedLocation]);

  return null;
}
