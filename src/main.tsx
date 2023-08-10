import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { StyledEngineProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import App from './App';

const globalStyles = (
  <GlobalStyles
    styles={{
      h1: {
        margin: 0,
      },
      h2: {
        margin: 0,
      },
      h3: {
        margin: 0,
      },
      p: {
        margin: 0,
      },
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
      img: {
        height: 'auto',

        display: 'block',
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
      button: {
        padding: 0,
        textAlign: 'center',

        fontFamily: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',

        cursor: 'pointer',
      },
    }}
  />
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      {globalStyles}
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </StyledEngineProvider>
  </StrictMode>,
);
