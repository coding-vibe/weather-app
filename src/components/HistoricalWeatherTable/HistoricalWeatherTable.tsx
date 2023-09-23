import { useTranslation } from 'react-i18next';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import MUITableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import WeatherContentHeader from 'components/WeatherContentHeader';
import WeatherTableCell from 'components/WeatherTableCell';
import ForecastBody from 'types/forecast';
import WEEK_DAYS from 'constants/weekDays';
import * as classes from './styles';

interface Props {
  country: string;
  name: string;
  weeklyForecast: ForecastBody[][];
  className?: string;
}

export default function HistoricalWeatherTable({
  country,
  name,
  weeklyForecast,
  className,
}: Props) {
  const { t } = useTranslation();
  return (
    <div className={className}>
      <WeatherContentHeader
        country={country}
        css={classes.header}
        name={name}
        text={t('texts.propHistoricalForecast')}
      />
      <TableContainer component={Paper}>
        <Table aria-label={t('labels.historicalWeatherTable')}>
          <TableHead>
            <TableRow>
              {WEEK_DAYS.map((day) => (
                <MUITableCell key={day}>{day}</MUITableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {weeklyForecast.map((weeklyWeather, index) => {
              const emptyCellsCount = WEEK_DAYS.length - weeklyWeather.length;
              return (
                <TableRow key={index}>
                  {index === 0 &&
                    Array.from({ length: emptyCellsCount }).map((_, idx) => (
                      // We should leave some cells empty because user chooses historical forecast for specific dates and some days of week should be skipped
                      <MUITableCell key={idx} />
                    ))}
                  {weeklyWeather.map((dailyWeather) => (
                    <WeatherTableCell
                      isDateShown
                      key={dailyWeather.dt}
                      weather={dailyWeather}
                    />
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
