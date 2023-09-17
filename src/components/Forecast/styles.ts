import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const wrap = (theme: Theme) => css`
  display: flex;
  align-items: center;
  padding: 15px 0px 0px 15px;
  ${theme.breakpoints.down('sm')} {
    padding: 10px;
  }
`;

export const text = (theme: Theme) => css`
  color: ${theme.palette.secondary.main};
  ${theme.breakpoints.down('sm')} {
    font-size: 9px;
  }
`;

export const icon = (theme: Theme) => css`
  fill: ${theme.palette.secondary.main};
  font-size: 22px;
  ${theme.breakpoints.down('sm')} {
    display: none;
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
