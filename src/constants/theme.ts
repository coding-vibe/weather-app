import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
      light: '#e0e0e0',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h2: ({ theme: customizedTheme }) => ({
          fontSize: 16,
          lineHeight: 1.4,
          fontWeight: 700,
          color: customizedTheme.palette.secondary.main,
        }),
        body1: {
          fontSize: 14,
        },
        body2: {
          fontSize: 12,
        },
        overline: {
          fontSize: 14,
          fontWeight: 800,
        },
        subtitle2: {
          fontSize: 13,
          fontWeight: 500,
        },
      },
    },
  },
  width: {
    desktop: '1000px',
    tablet: '600px',
  },
});

export default theme;
