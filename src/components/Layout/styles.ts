import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const wrap = (theme: Theme) => css`
  min-height: 100vh;
  margin: 0 auto;
  padding: 15px;

  ${theme.breakpoints.up('md')} {
    max-width: ${theme.width.desktop};
  }

  ${theme.breakpoints.between('sm', 'md')} {
    max-width: ${theme.width.tablet};
  }

  & .MuiTab-root {
    ${theme.breakpoints.between('sm', 'md')} {
      font-size: 12px;
    }

    ${theme.breakpoints.down('sm')} {
      font-size: 10px;
    }
  }
`;

export const settings = css`
  margin: 0 auto 10px 0;
`;
