/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { css } from '@emotion/react';

export const weatherTable = (theme: any) => css`
  margin: 15px;
  ${theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const weatherList = (theme: any) => css`
  margin: 15px;
  ${theme.breakpoints.up('bd')} {
    display: none;
  }
`;
