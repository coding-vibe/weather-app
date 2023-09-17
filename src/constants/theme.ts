import { createTheme } from '@mui/material/styles';

const THEME = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    secondary: {
      main: '#49484a',
      light: '#E0E0E0',
    },
  },
  typography: {
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 12,
    },
    overline: {
      fontSize: 13,
      fontWeight: 800,
    },
    subtitle2: {
      fontSize: 13,
      fontWeight: 500,
    },
  },
});

export default THEME;
