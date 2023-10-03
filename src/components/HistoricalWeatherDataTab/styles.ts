import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const wrap = (theme: Theme) => css`
  max-width: ${theme.width.desktop};

  ${theme.breakpoints.up('sm')} {
    margin: 15px 0px 0px 15px;
  }

  ${theme.breakpoints.down('sm')} {
    margin: 10px 0px 0px 10px;
  }
`;

export const caption = (theme: Theme) => css`
  ${theme.breakpoints.up('sm')} {
    margin-bottom: 15px;
  }

  ${theme.breakpoints.down('sm')} {
    margin-bottom: 10px;
  }
`;

export const spinner = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  max-width: ${theme.width.desktop};
`;
