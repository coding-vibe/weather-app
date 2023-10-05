import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const wrap = (theme: Theme) => css`
  margin: 0 auto;
  padding: 0px 15px;
  min-height: 100vh;
  border-left: 1px solid ${theme.palette.secondary.light};
  border-right: 1px solid ${theme.palette.secondary.light};

  ${theme.breakpoints.up('md')} {
    max-width: ${theme.width.desktop};
  }

  ${theme.breakpoints.between('sm', 'md')} {
    max-width: ${theme.width.tablet};
  }

  ${theme.breakpoints.down('sm')} {
    max-width: ${theme.width.mobile};
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
