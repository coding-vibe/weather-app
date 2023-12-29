import { useTranslation } from 'react-i18next';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import MUITableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import WeatherTableCell from 'components/WeatherTableCell';
import ForecastBody from 'types/forecast';
import WEEK_DAY_TRANSLATION_KEYS from 'constants/weekDays';

interface Props {
  weeklyForecast: ForecastBody[][];
  className?: string;
}

export default function HistoricalWeatherTable({
  weeklyForecast,
  className,
}: Props) {
  const { t } = useTranslation();
  const tableAriaLabel = t('labels.historicalWeatherTable');

  return (
    <div className={className}>
      <TableContainer component={Paper}>
        <Table aria-label={tableAriaLabel}>
          <TableHead>
            <TableRow>
              {WEEK_DAY_TRANSLATION_KEYS.map((day) => (
                <MUITableCell
                  key={day}
                  align='center'>
                  <Typography
                    variant='h2'
                    component='span'>
                    {t(day)}
                  </Typography>
                </MUITableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {weeklyForecast.map((weeklyWeather, weekIndex, arr) => {
              const emptyCellsCount =
                WEEK_DAY_TRANSLATION_KEYS.length - weeklyWeather.length;

              return (
                <TableRow
                  // eslint-disable-next-line react/no-array-index-key
                  key={weekIndex}
                  hover>
                  {weekIndex === 0 &&
                    Array.from({ length: emptyCellsCount }).map(
                      (_, dayIndex) => (
                        // We should leave some cells empty because user chooses historical weather data for specific dates and some days of week should be skipped
                        // eslint-disable-next-line react/no-array-index-key
                        <MUITableCell key={dayIndex} />
                      ),
                    )}
                  {weeklyWeather.map((dailyWeather) => (
                    <WeatherTableCell
                      isDateShown
                      key={dailyWeather.dt}
                      weather={dailyWeather}
                    />
                  ))}
                  {weekIndex === arr.length - 1 &&
                    emptyCellsCount > 0 &&
                    Array.from({ length: emptyCellsCount }).map((_, idx) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <MUITableCell key={idx} />
                    ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

HistoricalWeatherTable.defaultProps = {
  className: null,
};
