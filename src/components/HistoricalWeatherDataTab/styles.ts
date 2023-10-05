import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const caption = (theme: Theme) => css`
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

export const spinner = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  max-width: ${theme.width.desktop};
`;
