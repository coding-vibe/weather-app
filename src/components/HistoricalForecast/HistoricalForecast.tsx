import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import CircularProgress from '@mui/material/CircularProgress';
import pick from 'lodash/pick';
import HistoricalWeatherForm from 'components/HistoricalWeatherForm';
import HistoricalWeatherWidget from 'components/HistoricalWeatherWidget';
import ForecastBody from 'types/forecast';
import WeatherSearchCaption from 'components/WeatherSearchCaption';
import { FormValuesType } from '../HistoricalWeatherForm/validation';
import FORECAST from './forecast';
import * as classes from './styles';

const SPINNER_SIZE = 25;

export default function HistoricalForecast() {
  const { enqueueSnackbar } = useSnackbar();
  const [selectedSearchParams, onSelectSearchParams] =
    useState<FormValuesType | null>(null);
  const [forecast, setForecast] = useState<ForecastBody[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchForecast = () => {
      try {
        setIsLoading(true);
        const forecastData = FORECAST.list.map((data) =>
          pick(data, ['dt', 'main', 'weather']),
        );
        setForecast(forecastData);
      } catch (error) {
        enqueueSnackbar(t('error.fetchWeatherData'), {
          variant: 'error',
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchForecast();
  }, [selectedSearchParams, enqueueSnackbar, t]);

  return isLoading ? (
    <CircularProgress size={SPINNER_SIZE} />
  ) : (
    <div>
      <WeatherSearchCaption
        css={classes.caption}
        text={t('texts.propCaptionHistoricalForecast')}
      />
      <HistoricalWeatherForm
        css={classes.form}
        setSearchParams={onSelectSearchParams}
      />
      {forecast && selectedSearchParams && (
        <HistoricalWeatherWidget
          forecast={forecast}
          searchParams={selectedSearchParams}
        />
      )}
    </div>
  );
}
