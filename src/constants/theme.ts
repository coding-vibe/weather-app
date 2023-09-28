import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    // TODO: remove me
    // According to MUI documentation, when changing the default breakpoints' values, it is necessary to provide all of them
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
      light: '#e0e0e0',
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
      fontSize: 12,
      fontWeight: 800,
    },
    subtitle2: {
      fontSize: 13,
      fontWeight: 500,
    },
  },
  width: {
    table: '1000px',
    desktop: '450px',
    mobile: '280px',
  },
});

export default theme;
