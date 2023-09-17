/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { css } from '@emotion/react';

export const icon = css`
  margin: 0 auto;
`;

export const wrap = css`
  display: flex;
  flex-direction: column;
`;

export const text = (theme: any) => css`
  color: ${theme.palette.secondary.main};
`;
