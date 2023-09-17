import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const weatherTable = (theme: Theme) => css`
  margin: 15px;
  ${theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const weatherList = (theme: Theme) => css`
  margin: 15px;
  ${theme.breakpoints.up('md')} {
    display: none;
  }
  ${theme.breakpoints.down('sm')} {
    margin: 10px;
  }
`;
