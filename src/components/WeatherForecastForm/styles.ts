import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const wrap = (theme: Theme) => css`
  ${theme.breakpoints.up('md')} {
    display: flex;
    gap: 15px;
  }
`;

export const entry = (theme: Theme) => css`
  width: 100%;

  &:not(:last-child) {
    ${theme.breakpoints.between('sm', 'md')} {
      margin-bottom: 15px;
    }

    ${theme.breakpoints.down('sm')} {
      margin-bottom: 10px;
    }
  }
`;
