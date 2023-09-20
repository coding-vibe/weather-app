import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const form = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 15px;

  ${theme.breakpoints.up('sm')} {
    width: 435px;
  }

  ${theme.breakpoints.down('sm')} {
    width: 280px;
  }
`;

export const wrap = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const startDateField = (theme: Theme) => css`
  ${theme.breakpoints.up('sm')} {
    margin-right: 30px;
  }

  ${theme.breakpoints.down('sm')} {
    margin-right: 15px;

    & .MuiInputBase-input {
      font-size: 12px;
    }
  }

  &::after {
    position: absolute;
    content: '-';
    top: 50%;
    transform: translateY(-50%);
    color: #707070;
    font-size: 35px;

    ${theme.breakpoints.up('sm')} {
      left: 105%;
      font-size: 35px;
    }

    ${theme.breakpoints.down('sm')} {
      left: 103%;
      font-size: 30px;
    }
  }
`;

export const endDateField = (theme: Theme) => css`
  ${theme.breakpoints.down('sm')} {
    & .MuiInputBase-input {
      font-size: 12px;
    }
  }
`;
