import CircularProgress from '@mui/material/CircularProgress';
import * as classes from './styles';

interface Props {
  className?: string;
}

const SPINNER_SIZE = 50;

export default function Spinner({ className }: Props) {
  return (
    <CircularProgress
      className={className}
      css={classes.spinner}
      size={SPINNER_SIZE}
    />
  );
}

Spinner.defaultProps = {
  className: null,
};
