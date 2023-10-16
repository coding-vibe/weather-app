import { ReactNode } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import WeatherDetails from 'components/WeatherDetails';
import ForecastBody from 'types/forecast';
import * as classes from './styles';

interface Props {
  weather: ForecastBody;
  children: ReactNode;
}

export default function WeatherListItem({ weather, children }: Props) {
  return (
    <ListItem disablePadding>
      <ListItemText css={classes.listItemText}>
        {children}
        <WeatherDetails weather={weather} />
      </ListItemText>
    </ListItem>
  );
}
