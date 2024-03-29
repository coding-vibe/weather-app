import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import pick from 'lodash/pick';
import { useSnackbar } from 'notistack';
import Typography from '@mui/material/Typography';
import HistoricalWeatherForm from 'components/HistoricalWeatherForm';
import HistoricalWeatherWidget from 'components/HistoricalWeatherWidget';
import Spinner from 'components/Spinner';
import ForecastBody from 'types/forecast';
import sleep from 'utils/sleep';
import { FormValuesType } from '../HistoricalWeatherForm/validation';
import FIXTURE from './fixture';
import * as classes from './styles';

const DELAY = 1000;

export default function HistoricalWeatherDataTab() {
  const { enqueueSnackbar } = useSnackbar();
  const [searchParams, handleSubmitSearchParams] =
    useState<FormValuesType | null>(null);
  const [forecast, setForecast] = useState<ForecastBody[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchForecast = async () => {
      if (searchParams) {
        try {
          setForecast(null);
          setIsLoading(true);
          await sleep(DELAY);
          const forecastData = FIXTURE.list.map((data) =>
            pick(data, ['dt', 'main', 'weather']),
          );
          setForecast(forecastData);
        } catch (error) {
          enqueueSnackbar(t('error.fetchWeatherData'), { variant: 'error' });
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchForecast();
  }, [searchParams, enqueueSnackbar, t]);

  return (
    <div>
      <Typography
        css={classes.caption}
        variant='h2'>
        {t('texts.searchHistoricalWeatherCaption')}&nbsp;
      </Typography>
      <HistoricalWeatherForm onSubmit={handleSubmitSearchParams} />
      {!!searchParams && (
        <div>
          {isLoading && (
            <div css={classes.spinner}>
              <Spinner />
            </div>
          )}
          {!!forecast && !isLoading && (
            <HistoricalWeatherWidget
              css={classes.widget}
              forecast={forecast}
            />
          )}
        </div>
      )}
    </div>
  );
}
