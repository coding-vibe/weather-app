import { ReactNode, FC } from 'react';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';

interface Props {
  children: ReactNode;
}

const ThemeProvider: FC<Props> = function ThemeProvider({ children }) {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
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
        fontSize: '14px',
      },
      body2: {
        fontSize: '12px',
      },
      button: {},
      caption: {},
      overline: {
        fontSize: '13px',
        fontWeight: 500,
      },
      subtitle1: {
        fontSize: '20px',
        fontWeight: 800,
      },
      subtitle2: {
        fontSize: '13px',
        fontWeight: 500,
      },
    },
  });
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
