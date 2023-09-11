import Tooltip from '@mui/material/Tooltip';
import formatTemperatureData from 'utils/formatTemperature';
import ForecastBody from 'types/forecastBody';

export default function TableCell({ weatherReport }: ForecastBody) {
  weatherReport.map((dailyWeather) => {
    const {
      dt,
      weather: [{ icon, description }],
      main: { temp, humidity },
    } = dailyWeather;
    return (
      <td key={dt}>
        <Tooltip title={description}>
          <img
            src={`${import.meta.env.VITE_BASE_URL}img/wn/${icon}.png`}
            alt='Weather condition'
          />
        </Tooltip>
        {`Temperature: ${formatTemperatureData(temp, selectedTemperatureUnit)}
                    Humidity: ${humidity}%`}
      </td>
    );
  });
}
