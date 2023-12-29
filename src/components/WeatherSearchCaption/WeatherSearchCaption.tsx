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
        css={classes.text}
        variant='h2'
        sx={{ mb: 3.5 }}>
        {t('texts.searchCaption', { text })}&nbsp;
      </Typography>
    </div>
  );
}

WeatherSearchCaption.defaultProps = {
  className: null,
};
