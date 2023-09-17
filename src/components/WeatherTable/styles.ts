import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const tableTitle = (theme: Theme) => css`
  margin-bottom: 15px;
  color: ${theme.palette.secondary.main};
`;

export const tableContainer = css`
  width: 960px;
`;

export const tableHeadCell = (theme: Theme) => css`
  color: ${theme.palette.secondary.main};
`;
