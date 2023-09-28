import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const table = (theme: Theme) => css`
  margin: 30px 15px;
  max-width: ${theme.width.table};

  ${theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const list = (theme: Theme) => css`
  max-width: ${theme.width.desktop};

  ${theme.breakpoints.up('md')} {
    display: none;
  }

  ${theme.breakpoints.between('sm', 'md')} {
    margin: 30px 15px;
  }

  ${theme.breakpoints.down('sm')} {
    margin: 15px;
  }
`;
