import { useContext } from 'react';
import MUITableCell from '@mui/material/TableCell';
import Tooltip from '@mui/material/Tooltip';
import ICON_BASE_URL from 'constants/iconBaseURL';
import SettingsContext from 'contexts/SettingsContext';
import ForecastBody from 'types/forecast';
import SettingsContextType from 'types/settingsContextType';
import convertTimestampToDate, { formatDate } from 'utils/formatDate';
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
    <MUITableCell
      css={classes.tableCell}
      key={dt}>
      {isDateShown && formatDate(convertTimestampToDate(dt))}
      <Tooltip title={description}>
        <img
          alt='Weather condition'
          css={classes.icon}
          src={`${ICON_BASE_URL}img/wn/${icon}.png`}
        />
      </Tooltip>
      <span>
        Temp:&nbsp;
        <span css={classes.data}>
          {formatTemperatureData(temp, selectedTemperatureUnit)}
        </span>
      </span>
      <span>
        Hum:&nbsp;<span css={classes.data}>{humidity}%</span>
      </span>
    </MUITableCell>
  );
}

TableCell.defaultProps = {
  isDateShown: false,
};
