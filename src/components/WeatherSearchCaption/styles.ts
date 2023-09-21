import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const wrap = css`
  display: flex;
  align-items: center;
`;

export const text = (theme: Theme) => css`
  color: ${theme.palette.secondary.main};

  ${theme.breakpoints.down('sm')} {
    font-size: 9px;
  }
`;

export const icon = (theme: Theme) => css`
  color: ${theme.palette.secondary.main};
  font-size: 22px;

  ${theme.breakpoints.down('sm')} {
    display: none;
  }
`;
