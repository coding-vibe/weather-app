import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const form = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  width: 435px;
  gap: 15px;
  ${theme.breakpoints.down('sm')} {
    width: 280px;
  }
`;

export const wrap = css`
  display: flex;
`;

export const startDateField = (theme: Theme) => css`
  margin-right: 30px;

  &::after {
    position: absolute;
    content: '-';
    font-size: 35px;
    color: #707070;
    left: 105%;
    top: 50%;
    transform: translateY(-50%);
  }

  ${theme.breakpoints.down('sm')} {
    margin-right: 15px;

    &::after {
      left: 103%;
      font-size: 30px;
    }

    & .MuiInputBase-input {
      font-size: 13px;
    }
  }

  //I need to change top positioning when error appears, but I have some problems with that, so I left that comment as a reminder
  & .Mui-error::after {
  }
`;

export const endDateField = (theme: Theme) => css`
  ${theme.breakpoints.down('sm')} {
    & .MuiInputBase-input {
      font-size: 12px;
    }
  }
`;
