import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const list = (theme: Theme) => css`
  border: 1px solid ${theme.palette.secondary.light};

  ${theme.breakpoints.up('sm')} {
    width: 435px;
  }

  ${theme.breakpoints.down('sm')} {
    width: 280px;
  }
`;

export const listTitle = (theme: Theme) => css`
  padding: 16px;
  border-bottom: 1px solid ${theme.palette.secondary.light};

  ${theme.breakpoints.down('sm')} {
    font-size: 12px;
  }
`;
