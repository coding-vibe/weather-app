import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const select = (theme: Theme) => css`
  & .MuiInputBase-input {
    ${theme.breakpoints.down('sm')} {
      font-size: 12px;
    }
  }
`;
