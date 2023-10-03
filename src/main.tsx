import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { StyledEngineProvider } from '@mui/material/styles';
import LocalizationProviderWrap from 'components/LocalizationProviderWrap';
import Routes from 'components/Routes';
import SettingsProvider from 'components/SettingsProvider';
import globalStyles from 'constants/globalStyles';
import theme from 'constants/theme';
import i18n from './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles styles={globalStyles} />
          <SnackbarProvider>
            <LocalizationProviderWrap>
              <I18nextProvider i18n={i18n}>
                <SettingsProvider>
                  <Routes />
                </SettingsProvider>
              </I18nextProvider>
            </LocalizationProviderWrap>
          </SnackbarProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </StrictMode>,
);
