/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { css } from '@emotion/react';

export const wrap = css`
  display: flex;
  align-items: center;
  margin: 15px 0px 0px 15px;
`;

export const text = (theme: any) => css`
  color: ${theme.palette.secondary.main};
`;

export const icon = (theme: any) => css`
  fill: ${theme.palette.secondary.main};
  font-size: 22px;
`;

export const select = css`
  margin: 15px;
`;

export const autocomplete = css`
  margin: 15px;
`;
