import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const wrap = (theme: Theme) => css`
  max-width: ${theme.width.desktop};
  padding-left: 15px;
`;

export const caption = css`
  margin-top: 15px;
`;

export const entry = (theme: Theme) => css`
  width: 100%;

  &:not(:last-child) {
    ${theme.breakpoints.up('sm')} {
      margin-bottom: 15px;
    }
    ${theme.breakpoints.down('sm')} {
      margin-bottom: 10px;
    }
  }
`;
