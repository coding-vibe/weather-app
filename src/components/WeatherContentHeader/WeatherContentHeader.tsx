import Typography from '@mui/material/Typography';
import findCountryNameByCode from 'utils/findCountryNameByCode';

interface Props {
  country: string;
  name: string;
  className?: string;
}

export default function WeatherContentHeader({
  country,
  name,
  className,
}: Props) {
  return (
    <Typography
      component='p'
      className={className}
      variant='overline'>
      5-Day Weather Forecast for&nbsp;
      {`${findCountryNameByCode(country)}, ${name}`}
    </Typography>
  );
}

WeatherContentHeader.defaultProps = {
  className: null,
};
