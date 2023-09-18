import { useContext } from 'react';
import MUITableCell from '@mui/material/TableCell';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import SettingsContext from 'contexts/SettingsContext';
import ForecastBody from 'types/forecast';
import SettingsContextType from 'types/settingsContextType';
import convertTimestampToDate from 'utils/convertTimestampToDate';
import formatDate from 'utils/formatDate';
import formatTemperatureData from 'utils/formatTemperature';
import generateIconURL from 'utils/generateIconURL';
import * as classes from './styles';

interface WeatherTableCellProps {
  weather: ForecastBody;
  isDateShown?: boolean;
}

export default function WeatherTableCell({
  weather,
  isDateShown,
}: WeatherTableCellProps) {
  const { selectedTemperatureUnit } =
    useContext<SettingsContextType>(SettingsContext);
  const {
    dt,
    main: { humidity, temp },
    weather: [{ description, icon }],
  } = weather;

  return (
    <MUITableCell>
      <div css={classes.wrap}>
        {isDateShown && (
          <Typography
            component='span'
            css={classes.date}
            variant='overline'>
            {formatDate(convertTimestampToDate(dt))}
          </Typography>
        )}
        <Tooltip title={description}>
          <img
            alt='Weather condition'
            src={generateIconURL(icon)}
          />
        </Tooltip>
        <Typography
          component='span'
          variant='body2'>
          Temp:&nbsp;
          <Typography
            component='span'
            css={classes.text}
            variant='subtitle2'>
            {formatTemperatureData(temp, selectedTemperatureUnit)}
          </Typography>
        </Typography>
        <Typography
          component='span'
          variant='body2'>
          Humid:&nbsp;
          <Typography
            component='span'
            css={classes.text}
            variant='subtitle2'>
            {humidity}%
          </Typography>
        </Typography>
      </div>
    </MUITableCell>
  );
}

WeatherTableCell.defaultProps = {
  isDateShown: false,
};
