import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { StyledEngineProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { globalStyles } from './globalStyles';
import App from './App';

/* eslint-disable react/jsx-props-no-spreading */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <GlobalStyles {...globalStyles} />
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </StyledEngineProvider>
  </StrictMode>,
);
