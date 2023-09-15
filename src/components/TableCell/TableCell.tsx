import { useContext } from 'react';
import MUITableCell from '@mui/material/TableCell';
import Tooltip from '@mui/material/Tooltip';
import SettingsContext from 'contexts/SettingsContext';
import ForecastBody from 'types/forecast';
import SettingsContextType from 'types/settingsContextType';
import convertTimestampToDate, { formatDate } from 'utils/formatDate';
import formatTemperatureData from 'utils/formatTemperature';
import * as classes from './styles';

interface TableCellProps {
  weather: ForecastBody;
  displayDate?: boolean;
}

export default function TableCell({ weather, displayDate }: TableCellProps) {
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
      {displayDate && formatDate(convertTimestampToDate(dt))}
      <Tooltip title={description}>
        <img
          alt='Weather condition'
          css={classes.icon}
          src={`${import.meta.env.VITE_BASE_URL}img/wn/${icon}.png`}
        />
      </Tooltip>
      <p>
        Temp:&nbsp;
        <span css={classes.data}>
          {formatTemperatureData(temp, selectedTemperatureUnit)}
        </span>
      </p>
      <p>
        Hum:&nbsp;<span css={classes.data}>{humidity}%</span>
      </p>
    </MUITableCell>
  );
}

TableCell.defaultProps = {
  displayDate: false,
};
