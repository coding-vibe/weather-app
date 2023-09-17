import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const icon = css`
  margin: 0 auto;
`;

export const wrap = css`
  display: flex;
  flex-direction: column;
`;

export const text = (theme: Theme) => css`
  color: ${theme.palette.secondary.main};
`;
