import { useContext } from 'react';
import Tooltip from '@mui/material/Tooltip';
import TemperatureUnits from 'constants/temperatureUnits';
import SettingsContext from 'contexts/SettingsContext';
import ForecastBody from 'types/forecastBody';
import SettingsContextType from 'types/settingsContextType';

interface TableCellProps {
  weatherReport: ForecastBody[];
}

export default function TableCell({ weatherReport }: TableCellProps) {
  const { selectedTemperatureUnit } =
    useContext<SettingsContextType>(SettingsContext);

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
  const formatTemperatureData = (temp: number, tempUnit: TemperatureUnits) =>
    `${Math.floor(temp)}${formatTemperatureUnits(tempUnit)}`;

  return (
    <>
      {weatherReport.map((weather) => {
        const {
          dt,
          weather: [{ icon, description }],
          main: { temp, humidity },
        } = weather;

        return (
          <td key={dt}>
            <Tooltip title={description}>
              <img
                src={`${import.meta.env.VITE_BASE_URL}img/wn/${icon}.png`}
                alt='Weather condition'
              />
            </Tooltip>
            {`Temperature: ${formatTemperatureData(
              temp,
              selectedTemperatureUnit,
            )} Humidity: ${humidity}%`}
          </td>
        );
      })}
    </>
  );
}
