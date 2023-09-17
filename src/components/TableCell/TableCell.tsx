import { useContext } from 'react';
import MUITableCell from '@mui/material/TableCell';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ICON_BASE_URL from 'constants/iconBaseURL';
import SettingsContext from 'contexts/SettingsContext';
import ForecastBody from 'types/forecast';
import SettingsContextType from 'types/settingsContextType';
import convertTimestampToDate from 'utils/convertTimestampToDate';
import formatDate from 'utils/formatDate';
import formatTemperatureData from 'utils/formatTemperature';
import * as classes from './styles';

interface TableCellProps {
  weather: ForecastBody;
  isDateShown?: boolean;
}

export default function TableCell({ weather, isDateShown }: TableCellProps) {
  const { selectedTemperatureUnit } =
    useContext<SettingsContextType>(SettingsContext);
  const {
    dt,
    main: { humidity, temp },
    weather: [{ description, icon }],
  } = weather;

  return (
    <MUITableCell key={dt}>
      {isDateShown && formatDate(convertTimestampToDate(dt))}
      <Tooltip title={description}>
        <img
          alt='Weather condition'
          css={classes.icon}
          src={`${ICON_BASE_URL}img/wn/${icon}.png`}
        />
      </Tooltip>
      <div css={classes.wrap}>
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
          Hum:&nbsp;
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

TableCell.defaultProps = {
  isDateShown: false,
};
