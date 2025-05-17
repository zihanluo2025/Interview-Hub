// MainLayout.tsx - 按 Tailwind UI 风格重新设计
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import SidebarMenu from '../components/SidebarMenu';
import TopTabsBar from '../components/TopTabsBar';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const drawerWidth = 220;


const MainLayout: React.FC = () => {
    const location = useLocation();
    // 只有当路径是 /questions 开头时才显示顶部 Tabs
    const showTabs = location.pathname.startsWith('/questions');
  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f8f9fa' }}>
      <CssBaseline />
      <SidebarMenu drawerWidth={drawerWidth} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {showTabs && (
        <Box sx={{borderBottom: '1px solid #e0e0e0', backgroundColor: '#ffffff' }}>
          <TopTabsBar />
        </Box>)}

        <Box sx={{ p: 3, flexGrow: 1, backgroundColor: '#fff' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
