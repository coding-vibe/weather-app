import { css } from '@emotion/react';
import { Theme } from '@mui/material';

// TODO: do we need it? - Yes, because we reuse this component
export const header = (theme: Theme) => css`
  color: ${theme.palette.secondary.main};
`;
