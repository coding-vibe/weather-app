import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import * as classes from './styles';

interface Props {
  text: string;
  className?: string;
}

export default function WeatherSearchCaption({ text, className }: Props) {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <Typography
        component='p'
        css={classes.text}
        variant='overline'>
        {t('texts.searchCaption', { text })}&nbsp;
      </Typography>
    </div>
  );
}

WeatherSearchCaption.defaultProps = {
  className: null,
};
