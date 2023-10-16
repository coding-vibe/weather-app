import { css } from '@emotion/react';
import { Theme } from '@mui/material';

// TODO: do we need it? - Yes, because we reuse this component
export const header = (theme: Theme) => css`
  text-align: center;
  color: ${theme.palette.secondary.main};

  ${theme.breakpoints.between('sm', 'md')} {
    font-size: 12px;
  }

  ${theme.breakpoints.down('sm')} {
    font-size: 10px;
  }
`;
