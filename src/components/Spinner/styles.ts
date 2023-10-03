import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const spinner = (theme: Theme) => css`
  ${theme.breakpoints.up('sm')} {
    padding: 10px;
  }

  ${theme.breakpoints.down('sm')} {
    padding: 5px;
  }
`;
