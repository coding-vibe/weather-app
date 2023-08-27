/* eslint-disable react/jsx-props-no-spreading */
import { SyntheticEvent } from 'react';
import { Link, Outlet } from 'react-router-dom';
import MUITabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Tabs from 'constants/tabs';

interface Props {
  activeTab: Tabs;
  setActiveTab: (value: Tabs) => void;
}

function Layout({ activeTab, setActiveTab }: Props) {
  const handleSelectTab = (_: SyntheticEvent, newValue: Tabs) => {
    setActiveTab(newValue);
  };

  const a11yProps = (index: number) => ({
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  });
  return (
    <>
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
      <Outlet />
    </>
  );
}

export default Layout;
