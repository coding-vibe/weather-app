import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const wrap = (theme: Theme) => css`
  max-width: ${theme.width.desktop};
`;

export const caption = (theme: Theme) => css`
  ${theme.breakpoints.up('sm')} {
    margin: 15px 0px 0px 15px;
  }

  ${theme.breakpoints.down('sm')} {
    margin: 10px;
  }
`;

export const select = (theme: Theme) => css`
  width: 100%;
  ${theme.breakpoints.up('sm')} {
    margin: 15px;
  }

  ${theme.breakpoints.down('sm')} {
    margin: 10px;
  }
`;

export const autocomplete = (theme: Theme) => css`
  ${theme.breakpoints.up('sm')} {
    margin: 15px;
  }

  ${theme.breakpoints.down('sm')} {
    margin: 10px;
  }
`;
