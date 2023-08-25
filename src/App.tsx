/* eslint-disable react/jsx-props-no-spreading */
import { SyntheticEvent, useState } from 'react';
import MUITabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FutureForecast from 'components/FutureForecast';
import LanguageProvider from 'components/LanguageProvider';
import TabPanel from 'components/TabPanel/TabPanel';
import Tabs from 'constants/tabs';

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
  }

  return (
    <LanguageProvider>
      <MUITabs
        value={activeTab}
        onChange={handleChange}
        aria-label='forecast tabs'>
        <Tab
          label='Future forecast'
          {...a11yProps(Tabs.FUTURE_FORECAST)}
        />
        <Tab
          label='Historical forecast'
          {...a11yProps(Tabs.HISTORICAL_FORECAST)}
        />
      </MUITabs>
      <TabPanel
        value={activeTab}
        index={Tabs.FUTURE_FORECAST}>
        {activeTab === (Tabs.FUTURE_FORECAST as number) && <FutureForecast />}
      </TabPanel>
      <TabPanel
        value={activeTab}
        index={Tabs.HISTORICAL_FORECAST}>
        Historical Forecast
      </TabPanel>
    </LanguageProvider>
  );
}
