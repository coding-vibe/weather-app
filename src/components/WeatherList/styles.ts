import { css } from '@emotion/react';

export const headList = css`
  border: 1px solid #f5f5f5;

  width: 420px;

  & .MuiListSubheader-root {
    border-bottom: 1px solid #f5f5f5;

    color: #49484a;

    font-size: 19px;
    font-weight: 800;
  }
`;

export const mainList = css`
  padding: 10px 0px 0px 0px;
`;

export const mainListItem = css`
  padding: 0;
  border-bottom: 1px solid #fcfcfc;
`;

export const mainListItemButton = css`
  padding-left: 30px;
`;

export const mainListItemText = css`
  & .MuiListItemText-primary {
    color: #49484a;

    font-size: 16px;
    font-weight: 800;
  }
`;
export const listItem = css`
  padding-left: 0px;
`;

export const listItemText = css`
  & .MuiListItemText-primary {
    display: flex;
    align-items: center;
    gap: 20px;

    padding-left: 40px;

    font-size: 14px;
  }
`;

export const data = css`
  display: flex;
  flex-direction: column;
`;

export const text = css`
  color: #49484a;

  font-weight: 800;
`;
