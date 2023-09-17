/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { css } from '@emotion/react';

export const headList = (theme: any) => css`
  border: 1px solid ${theme.palette.secondary.light};
  width: 435px;

  & .MuiListSubheader-root {
    border-bottom: 1px solid ${theme.palette.secondary.light};
    color: ${theme.palette.secondary.main};
    font-size: 20px;
    font-weight: 800;
  }
`;

export const mainListItemButton = css`
  padding-left: 20px;
`;

export const mainListItemText = (theme: any) => css`
  & .MuiListItemText-primary {
    color: ${theme.palette.secondary.main};
    font-weight: 500;
  }
`;

export const listItemText = css`
  & .MuiListItemText-primary {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-left: 30px;
    font-size: 12px;
  }
`;

export const data = css`
  display: flex;
  flex-direction: column;
`;

export const text = (theme: any) => css`
  color: ${theme.palette.secondary.main};
`;
