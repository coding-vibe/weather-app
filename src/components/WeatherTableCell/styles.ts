import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const date = (theme: Theme) => css`
  color: ${theme.palette.secondary.main};
  font-size: 12px;
`;
