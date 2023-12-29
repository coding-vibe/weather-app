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
    padding: 8px 20px 8px 16px;
  }
`;

export const mainListItemButton = css`
  padding-left: 20px;
`;

export const mainListItem = (theme: Theme) => css`
  border-top: 1px solid ${theme.palette.secondary.light};
`;

export const chevron = (theme: Theme) => css`
  transition: transform ${theme.transitions.easing.easeOut}
    ${theme.transitions.duration.standard}ms;
`;

export const expandedChevron = css`
  transform: rotate(180deg);
`;
