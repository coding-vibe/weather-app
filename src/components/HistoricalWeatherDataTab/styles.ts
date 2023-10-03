import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const wrap = (theme: Theme) => css`
  margin: 15px auto;
  max-width: ${theme.width.desktop};

  ${theme.breakpoints.down('sm')} {
    margin: 10px auto;
  }
`;

export const spinner = (theme: Theme) => css`
  margin: 0 auto;
  max-width: ${theme.width.desktop};
`;
