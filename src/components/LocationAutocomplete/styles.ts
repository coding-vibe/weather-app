import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const autocomplete = (theme: Theme) => css`
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
