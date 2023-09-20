import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const list = (theme: Theme) => css`
  border: 1px solid ${theme.palette.secondary.light};

  ${theme.breakpoints.up('sm')} {
    width: 435px;
  }

  ${theme.breakpoints.down('sm')} {
    width: 280px;
  }
`;

export const listTitle = (theme: Theme) => css`
  padding: 16px;
  border-bottom: 1px solid ${theme.palette.secondary.light};

  ${theme.breakpoints.down('sm')} {
    font-size: 12px;
  }
`;

export const listItemText = (theme: Theme) => css`
  & .MuiListItemText-primary {
    display: flex;
    align-items: center;
    gap: 20px;
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
