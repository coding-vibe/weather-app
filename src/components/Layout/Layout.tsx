import { Outlet } from 'react-router-dom';
import MUITabs from '@mui/material/Tabs';

function Layout() {
    return (
      <>
      <MUITabs
        value={activeTab}
        onChange={handleSelectTab}
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
      <Outlet />
    </>
  );
}

export default Layout;
