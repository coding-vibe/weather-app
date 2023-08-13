import { useState, useEffect } from 'react';
import pick from 'lodash/pick';
import { axiosDefaultConfig } from 'api/axiosDefaultConfig';
import Location from 'components/LocationSelector/location';

interface Weather {
  description: string;
  icon: string;
  main: string;
}

interface Main {
  humidity: number;
  temp: number;
}

interface List {
  dt_txt: string;
  main: Main;
  weather: Weather[];
}

interface City {
  country: string;
  name: string;
}

interface FetchedWeatherData {
  city: City;
  list: List[];
}

interface Props {
  selectedLocation: Location | null;
}

export default function FetchWeatherData({ selectedLocation }: Props) {
  const [locationData, onLocationData] = useState<City | null>(null);
  const [locationWeatherData, onLocationWeatherData] = useState<List[]>([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (!selectedLocation) {
          return;
        }
        const { lat, lon } = selectedLocation;
        const response = await axiosDefaultConfig.get<FetchedWeatherData>(
          '/data/2.5/forecast',
          {
            params: {
              lat,
              lon,
            },
          },
        );
        const { city, list } = response.data;
        onLocationData(city);

        const weatherData = list.map((data) =>
          pick(data, ['dt_txt', 'main', 'weather']),
        );
        onLocationWeatherData(weatherData);
      } catch (error) {
        console.error(error);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchWeatherData();
  }, [selectedLocation]);

  console.log(locationWeatherData);

  return locationData && locationWeatherData ? (
    <table>
      <thead>{`Weather 5 days' forecast for ${locationData.country}, ${locationData.name}`}</thead>
      <table>
        {locationWeatherData.map((date, index) => (
          <tr key={index}>
            <td>{pick(date, ['data_txt'])}</td>
          </tr>
        ))}
      </table>
    </table>
  ) : null;
}
