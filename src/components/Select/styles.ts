import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const select = (theme: Theme) => css`
  width: 435px;
  ${theme.breakpoints.down('sm')} {
    width: 280px;
  }

  & .MuiInputBase-input {
    ${theme.breakpoints.down('sm')} {
      font-size: 12px;
    }
  }
`;
