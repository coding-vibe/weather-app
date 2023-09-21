import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const form = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 15px;

  ${theme.breakpoints.up('sm')} {
    width: 435px;
  }

  ${theme.breakpoints.down('sm')} {
    width: 280px;
  }
`;

export const wrap = (theme: Theme) => css`
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  &::after {
    content: '-';
    padding: 0 10px;
    color: #707070;

    ${theme.breakpoints.up('sm')} {
      font-size: 35px;
    }

    ${theme.breakpoints.down('sm')} {
      font-size: 30px;
    }
  }
`;

export const dateField = (theme: Theme) => css`
  ${theme.breakpoints.down('sm')} {
    & .MuiInputBase-input {
      font-size: 12px;
    }
  }
`;

export const endDateField = css`
  order: 1;
`;
