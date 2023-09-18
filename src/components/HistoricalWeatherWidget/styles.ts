import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const table = (theme: Theme) => css`
  margin: 30px 15px;
  ${theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const list = (theme: Theme) => css`
  margin: 30px 15px;
  ${theme.breakpoints.up('md')} {
    display: none;
  }
  ${theme.breakpoints.down('sm')} {
    margin: 10px;
  }
`;
