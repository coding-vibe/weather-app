import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const header = (theme: Theme) => css`
  color: ${theme.palette.secondary.main};
`;
