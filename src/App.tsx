/* eslint-disable react/jsx-props-no-spreading */
import { SyntheticEvent, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MUITabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FutureForecast from 'components/FutureForecast';
import LanguageProvider from 'components/LanguageProvider';
import TabPanel from 'components/TabPanel/TabPanel';
import Tabs from 'constants/tabs';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.FUTURE_FORECAST);
  const handleSelectTab = (_: SyntheticEvent, newValue: Tabs) => {
    setActiveTab(newValue);
  };

  const a11yProps = (index: number) => ({
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  });

  return (
    <LanguageProvider>
      <MUITabs
        value={activeTab}
        onChange={handleSelectTab}
        aria-label='forecast tabs'>
        <Tab
          label='Future forecast'
          to='/future forecast'
          component={Link}
          {...a11yProps(Tabs.FUTURE_FORECAST)}
        />
        <Tab
          label='Historical forecast'
          to='/historical forecast'
          component={Link}
          {...a11yProps(Tabs.HISTORICAL_FORECAST)}
        />
      </MUITabs>

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
