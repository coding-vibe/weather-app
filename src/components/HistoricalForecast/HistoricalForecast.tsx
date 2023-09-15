import { useEffect, useState } from 'react';
import pick from 'lodash/pick';
import { useSnackbar } from 'notistack';
import HistoricalWeatherForm from 'components/HistoricalWeatherForm';
import HistoricalWeatherWidget from 'components/HistoricalWeatherWidget';
import ForecastBody from 'types/forecast';
import { FormValuesType } from '../HistoricalWeatherForm/validation';
import FORECAST from './forecast';

export default function HistoricalForecast() {
  const { enqueueSnackbar } = useSnackbar();
  const [selectedSearchParams, onSelectSearchParams] =
    useState<FormValuesType | null>(null);
  const [forecast, setForecast] = useState<ForecastBody[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchForecast = () => {
      try {
        setIsLoading(true);
        const forecastData = FORECAST.list.map((data) =>
          pick(data, ['dt', 'main', 'weather']),
        );
        setForecast(forecastData);
      } catch (error) {
        enqueueSnackbar('No weather data found for this location', {
          variant: 'error',
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchForecast();
  }, [selectedSearchParams, enqueueSnackbar]);

  return (
    <>
      <HistoricalWeatherForm setSearchParams={onSelectSearchParams} />
      {forecast && selectedSearchParams && (
        <HistoricalWeatherWidget
          forecast={forecast}
          loadingStatus={isLoading}
          searchParams={selectedSearchParams}
        />
      )}
    </>
  );
}
