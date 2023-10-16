import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const selectWrap = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
`;

export const datePickerWrap = (theme: Theme) => css`
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  &::after {
    content: '-';
    padding: 0 10px;
    color: #707070;

    ${theme.breakpoints.up('sm')} {
      font-size: 35px;
    }

    ${theme.breakpoints.down('sm')} {
      font-size: 30px;
    }
  }
`;

export const dateField = (theme: Theme) => css`
  ${theme.breakpoints.down('sm')} {
    & .MuiInputBase-input {
      font-size: 12px;
    }
  }
`;

export const endDateField = css`
  order: 1;
`;

export const button = (theme: Theme) => css`
  margin: 0 auto;
  width: 45%;

  ${theme.breakpoints.between('sm', 'md')} {
    font-size: 10px;
  }

  ${theme.breakpoints.down('sm')} {
    font-size: 8px;
  }
`;
