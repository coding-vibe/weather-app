import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const headList = (theme: Theme) => css`
  border: 1px solid ${theme.palette.secondary.light};

  ${theme.breakpoints.up('sm')} {
    width: 435px;
  }

  ${theme.breakpoints.down('sm')} {
    width: 280px;
  }
`;

export const headListTitle = (theme: Theme) => css`
  ${theme.breakpoints.up('sm')} {
    padding: 16px;
  }

  ${theme.breakpoints.down('sm')} {
    padding: 8px;
    font-size: 12px;
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

export const data = css`
  display: flex;
  flex-direction: column;
`;

export const text = (theme: Theme) => css`
  color: ${theme.palette.secondary.main};

  ${theme.breakpoints.down('sm')} {
    font-size: 10px;
  }
`;
