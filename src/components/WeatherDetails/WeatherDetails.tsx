import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import SettingsContext from 'contexts/SettingsContext';
import ForecastBody from 'types/forecast';
import formatTemperatureData from 'utils/formatTemperature';
import generateIconURL from 'utils/generateIconURL';
import { ReactComponent as DropIcon } from 'assets/drop.svg';
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
        <Typography
          variant='h2'
          component='span'>
          {formatTemperatureData(temp, temperatureUnit)}
        </Typography>
        <span css={classes.humidity}>
          <DropIcon css={classes.dropIcon} />
          <span>{humidity}%</span>
        </span>
      </div>
    </>
  );
}
