/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */ import { css } from '@emotion/react';

export const tableTitle = (theme: any) => css`
  margin-bottom: 15px;
  color: ${theme.palette.secondary.main};
`;

export const tableContainer = css`
  width: 960px;
`;

export const tableHeadCell = (theme: any) => css`
  color: ${theme.palette.secondary.main};
`;
