import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const wrap = (theme: Theme) => css`
  display: flex;
  align-items: center;
  color: ${theme.palette.secondary.main};
`;

export const text = (theme: Theme) => css`
  ${theme.breakpoints.down('sm')} {
    font-size: 9px;
  }
`;

export const icon = (theme: Theme) => css`
  font-size: 22px;

  ${theme.breakpoints.down('sm')} {
    display: none;
  }
`;
