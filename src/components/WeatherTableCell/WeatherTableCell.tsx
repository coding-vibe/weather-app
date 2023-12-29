import MUITableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import WeatherDetails from 'components/WeatherDetails/WeatherDetails';
import ForecastBody from 'types/forecast';
import convertTimestampToDate from 'utils/convertTimestampToDate';
import formatDate from 'utils/formatDate';
import * as classes from './styles';

interface WeatherTableCellProps {
  weather: ForecastBody;
  isDateShown?: boolean;
}

export default function WeatherTableCell({
  weather,
  isDateShown,
}: WeatherTableCellProps) {
  return (
    <MUITableCell align='center'>
      {isDateShown && (
        <Typography
          component='span'
          css={classes.date}
          variant='overline'>
          {formatDate(convertTimestampToDate(weather.dt))}
        </Typography>
      )}
      <WeatherDetails weather={weather} />
    </MUITableCell>
  );
}

WeatherTableCell.defaultProps = {
  isDateShown: false,
};
