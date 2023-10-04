import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const wrap = (theme: Theme) => css`
  ${theme.breakpoints.up('md')} {
    margin: 30px 0px;
  }

  ${theme.breakpoints.between('sm', 'md')} {
    margin: 15px 0px;
  }

  ${theme.breakpoints.down('sm')} {
    margin: 10px 0px;
  }
`;

export const table = (theme: Theme) => css`
  ${theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const list = (theme: Theme) => css`
  ${theme.breakpoints.up('md')} {
    display: none;
  }
`;
