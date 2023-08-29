import { css } from '@emotion/react';

export const wrap = css`
  margin-top: 10px;
  display: flex;
  gap: 30px;
  position: relative;
`;

export const startDatePicker = css`
  width: 200px;

  &::after {
    position: absolute;
    content: '-';
    font-size: 35px;
    color: #707070;
    left: 210px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const endDatePicker = css`
  width: 200px;
`;
