import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const autocomplete = (theme: Theme) => css`
  ${theme.breakpoints.up('sm')} {
    width: 435px;
  }

  ${theme.breakpoints.down('sm')} {
    width: 280px;
    font-size: 12px;
  }

  & .MuiInputLabel-root {
    ${theme.breakpoints.down('sm')} {
      font-size: 12px;
    }
  }

  & .MuiInputBase-input {
    ${theme.breakpoints.down('sm')} {
      font-size: 12px;
    }
  }
`;
