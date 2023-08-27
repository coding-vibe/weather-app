import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import FutureForecast from 'components/FutureForecast';
import LanguageProvider from 'components/LanguageProvider';
import Layout from 'components/Layout/Layout';
import TabPanel from 'components/TabPanel/TabPanel';
import Tabs from 'constants/tabs';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.FUTURE_FORECAST);

  return (
    <LanguageProvider>
      <Layout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <Routes>
        <Route
          path='/future forecast'
          element={
            <TabPanel
              value={activeTab}
              index={Tabs.FUTURE_FORECAST}>
              {activeTab === Tabs.FUTURE_FORECAST && <FutureForecast />}
            </TabPanel>
          }
        />
        <Route
          path='/historical forecast'
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
