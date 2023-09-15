import { useContext } from 'react';
import Tooltip from '@mui/material/Tooltip';
import ICON_BASE_URL from 'constants/iconBaseURL';
import TemperatureUnits from 'constants/temperatureUnits';
import SettingsContext from 'contexts/SettingsContext';
import ForecastBody from 'types/forecast';
import SettingsContextType from 'types/settingsContextType';
import convertTimestampToDate, { formatDate } from 'utils/formatDate';

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

  const formatTemperatureUnits = (tempUnit: TemperatureUnits) => {
    switch (tempUnit) {
      case TemperatureUnits.KELVIN:
        return '\u00B0K';
      case TemperatureUnits.CELSIUS:
        return '\u2103';
      case TemperatureUnits.FAHRENHEIT:
        return '\u00B0F';
      default:
        throw new Error('New temperature unit found');
    }
  };
  const formatTemperatureData = (
    temperature: number,
    temperatureUnit: TemperatureUnits,
  ) => `${Math.floor(temperature)}${formatTemperatureUnits(temperatureUnit)}`;

  return (
    <td key={dt}>
      {displayDate && formatDate(convertTimestampToDate(dt))}
      <Tooltip title={description}>
        <img
          src={`${ICON_BASE_URL}img/wn/${icon}.png`}
          alt='Weather condition'
        />
      </Tooltip>
      {`Temperature: ${formatTemperatureData(
        temp,
        selectedTemperatureUnit,
      )} Humidity: ${humidity}%`}
    </td>
  );
}

TableCell.defaultProps = {
  displayDate: false,
};
