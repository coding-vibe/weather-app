/* eslint-disable react/jsx-props-no-spreading */
import { SyntheticEvent, useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import MUITabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FutureForecast from 'components/FutureForecast';
import LanguageProvider from 'components/LanguageProvider';
import TabPanel from 'components/TabPanel/TabPanel';
import Tabs from 'constants/tabs';

export default function App() {
  // const routes = ['/future', '/historical'];

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
      <Route>
        <MUITabs
          value={activeTab}
          onChange={handleSelectTab}
          aria-label='forecast tabs'>
          <NavLink to='future'>
            <Tab
              label='Future forecast'
              {...a11yProps(Tabs.FUTURE_FORECAST)}
            />
          </NavLink>
          <NavLink to='historical'>
            <Tab
              label='Historical forecast'
              {...a11yProps(Tabs.HISTORICAL_FORECAST)}
            />
          </NavLink>
        </MUITabs>
      </Route>

      <Routes>
        <Route
          path='future'
          element={
            <TabPanel
              value={activeTab}
              index={Tabs.FUTURE_FORECAST}>
              {activeTab === Tabs.FUTURE_FORECAST && <FutureForecast />}
            </TabPanel>
          }
        />
        <Route
          path='historical'
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
