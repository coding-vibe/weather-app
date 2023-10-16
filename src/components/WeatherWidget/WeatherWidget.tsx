import { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import groupBy from 'lodash/groupBy';
import pick from 'lodash/pick';
import { useSnackbar } from 'notistack';
import apiClient from 'api';
import Spinner from 'components/Spinner';
import WeatherList from 'components/WeatherList';
import WeatherTable from 'components/WeatherTable';
import SettingsContext from 'contexts/SettingsContext';
import { ForecastAPIResponse, Forecast } from 'types/forecast';
import Location from 'types/location';
import formatDate from 'utils/formatDate';
import convertTimestampToDate from 'utils/convertTimestampToDate';
import * as classes from './styles';

interface Props {
  location: Location;
  className?: string;
}

export default function WeatherWidget({ location, className }: Props) {
  const { language, temperatureUnit } = useContext(SettingsContext);
  const { enqueueSnackbar } = useSnackbar();
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { t } = useTranslation();

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
              units: temperatureUnit,
              lang: language,
            },
          },
        );
        const { list } = response.data;
        const forecastData = list.map((data) =>
          pick(data, ['dt', 'main', 'weather']),
        );
        const forecastByDate = groupBy(forecastData, ({ dt }) =>
          formatDate(convertTimestampToDate(dt)),
        );
        const formattedForecast = Object.entries(forecastByDate);
        setForecast(formattedForecast);
      } catch (error) {
        enqueueSnackbar(t('errors.fetchWeatherData'), {
          variant: 'error',
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchForecast();
  }, [enqueueSnackbar, location, language, temperatureUnit, t]);

  if (isLoading) {
    return (
      <div css={classes.spinner}>
        <Spinner />
      </div>
    );
  }

  if (forecast) {
    return (
      <div className={className}>
        <WeatherTable
          css={classes.table}
          forecast={forecast}
          location={location}
        />
        <WeatherList
          css={classes.list}
          forecast={forecast}
          location={location}
        />
      </div>
    );
  }

  return null;
}

WeatherWidget.defaultProps = {
  className: null,
};
