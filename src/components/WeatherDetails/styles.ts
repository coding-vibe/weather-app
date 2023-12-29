import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const icon = css`
  margin: 0 auto;
  padding: 0px 10px;
`;

export const data = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  color: ${theme.palette.secondary.main};

  ${theme.breakpoints.up('md')} {
    align-items: center;
  }

  ${theme.breakpoints.down('md')} {
    align-items: flex-end;
  }
`;

export const dropIcon = css`
  width: 12px;
`;

export const humidity = css`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
`;
