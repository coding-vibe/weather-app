import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const caption = (theme: Theme) => css`
  margin: 15px 0px 0px 15px;
  ${theme.breakpoints.down('sm')} {
    margin: 10px;
  }
`;

export const select = (theme: Theme) => css`
  margin: 15px;
  ${theme.breakpoints.down('sm')} {
    margin: 10px;
  }
`;

export const autocomplete = (theme: Theme) => css`
  margin: 15px;
  ${theme.breakpoints.down('sm')} {
    margin: 10px;
  }
`;
