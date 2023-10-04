import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const tableTitle = css`
  margin-bottom: 15px;
`;

export const tableHeadCell = (theme: Theme) => css`
  color: ${theme.palette.secondary.main};
`;
