import Typography from '@mui/material/Typography';
import findCountryNameByCode from 'utils/findCountryNameByCode';
import * as classes from './styles';

interface Props {
  country: string;
  name: string;
  text: string;
  className?: string;
}

export default function WeatherContentHeader({
  country,
  name,
  text,
  className,
}: Props) {
  return (
    <Typography
      component='p'
      variant='h2'
      className={className}
      css={classes.heading}>
      {text}&nbsp;
      {`${name}, ${findCountryNameByCode(country)}`}
    </Typography>
  );
}

WeatherContentHeader.defaultProps = {
  className: null,
};
