import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import WeatherForecastForm from 'components/WeatherForecastForm';
import WeatherWidget from 'components/WeatherWidget';
import Location from 'types/location';
import * as classes from './styles';

export default function WeatherForecastTab() {
  const [selectedLocation, onSelectLocation] = useState<Location | null>(null);
  const { t } = useTranslation();

  return (
    <div>
      <Typography
        css={classes.caption}
        variant='h2'>
        {t('texts.searchWeatherForecastCaption')}&nbsp;
      </Typography>
      <WeatherForecastForm
        location={selectedLocation}
        setLocation={onSelectLocation}
      />
      {!!selectedLocation && (
        <WeatherWidget
          css={classes.widget}
          location={selectedLocation}
        />
      )}
    </div>
  );
}
