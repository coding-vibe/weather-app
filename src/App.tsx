/* eslint-disable react/jsx-props-no-spreading */
import { ReactNode, SyntheticEvent, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FutureForecast from 'components/FutureForecast';
import LanguageProvider from 'components/LanguageProvider';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { value, index, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    />
  );
}

TabPanel.defaultProps = {
  children: null,
};

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <LanguageProvider>
      <Box>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          aria-label='forecast tabs'>
          <Tab
            label='Future forecast'
            {...a11yProps(0)}
          />
          <Tab
            label='Historical forecast'
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel
        value={activeTab}
        index={0}>
        {activeTab === 0 && <FutureForecast />}
      </TabPanel>
      <TabPanel
        value={activeTab}
        index={1}>
        Historical Forecast
      </TabPanel>
    </LanguageProvider>
  );
}
