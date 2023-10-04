import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const listItemText = (theme: Theme) => css`
  & .MuiListItemText-primary {
    display: flex;
    align-items: center;
    padding-left: 30px;

    ${theme.breakpoints.up('sm')} {
      gap: 30px;
      font-size: 12px;
    }

    ${theme.breakpoints.down('sm')} {
      gap: 10px;
      font-size: 9px;
    }
  }
`;
