import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import MUITableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import WeatherContentHeader from 'components/WeatherContentHeader';
import WeatherTableCell from 'components/WeatherTableCell';
import { Forecast } from 'types/forecast';
import Location from 'types/location';
import HOURS from './hours';
import * as classes from './styles';

interface Props {
  forecast: Forecast;
  location: Location;
  className?: string;
}

export default function WeatherTable({ forecast, location, className }: Props) {
  const { t } = useTranslation();
  const tableAriaLabel = t('labels.weatherTable');

  return (
    <Box className={className}>
      <WeatherContentHeader
        country={location.country}
        css={classes.tableTitle}
        name={location.name}
        text={t('texts.headerWeatherForecast')}
      />
      <TableContainer component={Paper}>
        <Table aria-label={tableAriaLabel}>
          <TableHead>
            <TableRow>
              <MUITableCell align='center'>
                <Typography variant='h2'>
                  {t('texts.historicalWeatherDataTableCell')}
                </Typography>
              </MUITableCell>
              {HOURS.map((hour) => (
                <MUITableCell
                  align='center'
                  key={hour}>
                  <Typography variant='h2'>{hour}</Typography>
                </MUITableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {forecast.map(([date, weather], rowIndex, arr) => {
              const emptyCells = HOURS.length - weather.length;

              return (
                <TableRow
                  hover
                  key={date}>
                  <MUITableCell align='center'>
                    <Typography variant='h2'>{date}</Typography>
                  </MUITableCell>
                  {rowIndex === 0 &&
                    Array.from({ length: emptyCells }).map((_, idx) => (
                      // We should leave some cells empty because the weather API doesn't provide data for the past hours of the current day. Also, some cells at the end of the table are empty because data is only provided for the next 5 days
                      // eslint-disable-next-line react/no-array-index-key
                      <MUITableCell key={idx} />
                    ))}
                  {weather.map((hourlyWeather) => (
                    <WeatherTableCell
                      key={hourlyWeather.dt}
                      weather={hourlyWeather}
                    />
                  ))}
                  {rowIndex === arr.length - 1 &&
                    emptyCells > 0 &&
                    Array.from({ length: emptyCells }).map((_, idx) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <MUITableCell key={idx} />
                    ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

WeatherTable.defaultProps = {
  className: null,
};
