import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const listItemText = (theme: Theme) => css`
  & .MuiListItemText-primary {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-left: 30px;

    ${theme.breakpoints.up('sm')} {
      font-size: 12px;
    }

    ${theme.breakpoints.down('sm')} {
      font-size: 9px;
    }
  }
`;
