import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const date = css`
  font-size: 9px;
`;

export const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const text = (theme: Theme) => css`
  color: ${theme.palette.secondary.main};
`;