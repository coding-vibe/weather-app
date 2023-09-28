import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <Typography
      component='p'
      className={className}
      css={classes.header}
      variant='overline'>
      {text} {t('texts.contentHeader')}&nbsp;
      {`${findCountryNameByCode(country)}, ${name}`}
    </Typography>
  );
}

WeatherContentHeader.defaultProps = {
  className: null,
};
