import { Routes, Route } from 'react-router-dom';
import FutureForecast from 'components/FutureForecast';
import LanguageProvider from 'components/LanguageProvider';
import Layout from 'components/Layout';
import TabPanel from 'components/TabPanel/TabPanel';
import Pathnames from 'constants/pathnames';
import Tabs from 'constants/tabs';

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route
          path={Pathnames.HOME}
          element={<Layout />}
        />
        <Route
          path={Pathnames.FUTURE}
          element={
            <TabPanel
              value={Tabs.FUTURE_FORECAST}
              index={Tabs.FUTURE_FORECAST}>
              <FutureForecast />
            </TabPanel>
          }
        />
        <Route
          path={Pathnames.HISTORICAL}
          element={
            <TabPanel
              value={Tabs.HISTORICAL_FORECAST}
              index={Tabs.HISTORICAL_FORECAST}>
              Historical Forecast
            </TabPanel>
          }
        />
      </Routes>
    </LanguageProvider>
  );
}
