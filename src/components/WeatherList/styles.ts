import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const headList = (theme: Theme) => css`
  border: 1px solid ${theme.palette.secondary.light};
  border-radius: 5px;
`;

export const headListTitle = (theme: Theme) => css`
  ${theme.breakpoints.up('sm')} {
    padding: 16px;
  }

  ${theme.breakpoints.down('sm')} {
    padding: 8px;
  }
`;

export const mainListItemButton = css`
  padding-left: 20px;
`;

export const mainListItem = (theme: Theme) => css`
  border-top: 1px solid ${theme.palette.secondary.light};
`;

export const mainListItemText = (theme: Theme) => css`
  & .MuiListItemText-primary {
    color: ${theme.palette.secondary.main};
    font-weight: 500;

    ${theme.breakpoints.down('sm')} {
      font-size: 10px;
    }
  }
`;
