import ArrowIcon from '@mui/icons-material/ArrowCircleDownSharp';
import Typography from '@mui/material/Typography';
import * as classes from './styles';

interface Props {
  text: string;
  className?: string;
}

export default function WeatherSearchCaption({ text, className }: Props) {
  return (
    <div
      className={className}
      css={classes.wrap}>
      <Typography
        component='p'
        css={classes.text}
        variant='overline'>
        Select options for {text} forecast search&nbsp;
      </Typography>
      <ArrowIcon css={classes.icon} />
    </div>
  );
}

WeatherSearchCaption.defaultProps = {
  className: null,
};
