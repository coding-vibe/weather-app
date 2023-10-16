import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const listItemText = (theme: Theme) => css`
  & .MuiListItemText-primary {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    ${theme.breakpoints.up('sm')} {
      font-size: 12px;
    }

    ${theme.breakpoints.down('sm')} {
      font-size: 9px;
    }
  }
`;
