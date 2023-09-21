import { useContext } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import SettingsContext from 'contexts/SettingsContext';
import ForecastBody from 'types/forecast';
import SettingsContextType from 'types/settingsContextType';
import formatTemperatureData from 'utils/formatTemperature';
import generateIconURL from 'utils/generateIconURL';
import * as classes from './styles';

interface Props {
  weather: ForecastBody;
}

export default function WeatherPeriodDetails({ weather }: Props) {
  const { selectedTemperatureUnit } =
    useContext<SettingsContextType>(SettingsContext);
  const {
    main: { humidity, temp },
    weather: [{ description, icon }],
  } = weather;
  return (
    <>
      <Tooltip title={description}>
        <img
          alt='Weather condition'
          css={classes.icon}
          src={generateIconURL(icon)}
        />
      </Tooltip>
      <div css={classes.data}>
        <span>
          Temp:&nbsp;
          <Typography
            component='span'
            css={classes.text}
            variant='subtitle2'>
            {formatTemperatureData(temp, selectedTemperatureUnit)}
          </Typography>
        </span>
        <span>
          Hum:&nbsp;
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
