import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const icon = css`
  padding: 0px 10px;
`;

export const data = (theme: Theme) => css`
  display: flex;
  flex-direction: column;

  ${theme.breakpoints.down('sm')} {
    font-size: 10px;
  }
`;

export const text = (theme: Theme) => css`
  color: ${theme.palette.secondary.main};

  ${theme.breakpoints.down('sm')} {
    font-size: 11px;
  }
`;
