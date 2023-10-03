import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import SettingsContext from 'contexts/SettingsContext';
import ForecastBody from 'types/forecast';
import formatTemperatureData from 'utils/formatTemperature';
import generateIconURL from 'utils/generateIconURL';
import * as classes from './styles';

interface Props {
  weather: ForecastBody;
}

export default function WeatherDetails({ weather }: Props) {
  const { temperatureUnit } = useContext(SettingsContext);
  const { t } = useTranslation();
  const {
    main: { humidity, temp },
    weather: [{ description, icon }],
  } = weather;

  return (
    <>
      <Tooltip title={t(description)}>
        <img
          alt={t('texts.iconAlt')}
          css={classes.icon}
          src={generateIconURL(icon)}
        />
      </Tooltip>
      <div css={classes.data}>
        <span>
          {t('weatherDetails.temperature')}:&nbsp;
          <Typography
            component='span'
            css={classes.text}
            variant='subtitle2'>
            {formatTemperatureData(temp, temperatureUnit)}
          </Typography>
        </span>
        <span>
          {t('weatherDetails.humidity')}:&nbsp;
          <Typography
            component='span'
            css={classes.text}
            variant='subtitle2'>
            {humidity}%
          </Typography>
        </span>
      </div>
    </>
  );
}
