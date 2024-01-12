import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const caption = (theme: Theme) => css`
  text-align: center;

  ${theme.breakpoints.up('sm')} {
    margin: 30px 0px;
  }

  ${theme.breakpoints.between('sm', 'md')} {
    margin: 15px 0px;
  }

  ${theme.breakpoints.down('sm')} {
    margin: 10px 0px;
  }
`;

export const widget = (theme: Theme) => css`
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
