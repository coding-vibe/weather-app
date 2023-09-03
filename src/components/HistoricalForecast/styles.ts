import { css } from '@emotion/react';

export const location = css`
  width: 460px;
`;

export const startDateField = css`
  width: 200px;

  &::after {
    position: absolute;
    content: '-';
    font-size: 35px;
    color: #707070;
    left: 225px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const endDateField = css`
  width: 200px;
`;
