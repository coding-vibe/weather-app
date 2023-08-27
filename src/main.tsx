import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { StyledEngineProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import SettingsProvider from 'components/SettingsProvider';
import { globalStyles } from './globalStyles';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <SnackbarProvider>
          <SettingsProvider>
            <App />
          </SettingsProvider>
        </SnackbarProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </StrictMode>,
);
