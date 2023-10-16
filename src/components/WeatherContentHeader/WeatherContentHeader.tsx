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
      className={className}
      css={classes.header}
      variant='overline'>
      {text}&nbsp;
      {`${findCountryNameByCode(country)}, ${name}`}
    </Typography>
  );
}

WeatherContentHeader.defaultProps = {
  className: null,
};
