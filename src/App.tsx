import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import FutureForecast from 'components/FutureForecast';
import LanguageProvider from 'components/LanguageProvider';
import Layout from 'components/Layout';
import TabPanel from 'components/TabPanel/TabPanel';
import Pathnames from 'constants/pathnames';
import Tabs from 'constants/tabs';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.FUTURE_FORECAST);

  return (
    <LanguageProvider>
      <Routes>
        <Route
          path={Pathnames.HOME}
          element={
            <Layout
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          }
        />
        <Route
          path={Pathnames.FUTURE}
          element={
            <TabPanel
              value={activeTab}
              index={Tabs.FUTURE_FORECAST}>
              {activeTab === Tabs.FUTURE_FORECAST && <FutureForecast />}
            </TabPanel>
          }
        />
        <Route
          path={Pathnames.HISTORICAL}
          element={
            <TabPanel
              value={activeTab}
              index={Tabs.HISTORICAL_FORECAST}>
              Historical Forecast
            </TabPanel>
          }
        />
      </Routes>
    </LanguageProvider>
  );
}
