import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import WeatherPeriodDetails from 'components/WeatherPeriodDetails/WeatherPeriodDetails';
import ForecastBody from 'types/forecast';
import * as classes from './styles';

interface Props {
  weather: ForecastBody;
  date?: string;
  hour?: string;
}

export default function WeatherListItem({ weather, date, hour }: Props) {
  return (
    <ListItem disablePadding>
      <ListItemText css={classes.listItemText}>
        {/* TODO: pass me via children */}
        {date && <p>{date}</p>}
        {hour && <span>{hour}</span>}
        <WeatherPeriodDetails weather={weather} />
      </ListItemText>
    </ListItem>
  );
}

WeatherListItem.defaultProps = {
  date: null,
  hour: null,
};
