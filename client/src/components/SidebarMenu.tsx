// SidebarMenu.tsx
import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Avatar,
  Button,
  Divider,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

import { logout } from "../api/auth";
import { useUserStore } from '../store/user'; // 根据实际路径调整


interface SidebarMenuProps {
  drawerWidth: number;
}

const menuItems = [
  { label: 'Question Records', path: '/questions', icon: <SchoolIcon /> },
  { label: 'Interview track', path: '/jobs', icon: <WorkIcon /> },
  { label: 'Favorites', path: '/favorites', icon: <FavoriteIcon /> },
  { label: 'Profile', path: '/profile', icon: <PersonIcon /> },
];

const SidebarMenu: React.FC<SidebarMenuProps> = ({ drawerWidth }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);


  const handleLogout= async (e: React.FormEvent) =>{
     e.preventDefault();
        try {
          await logout();
          clearUser();    // 清除本地
        } catch (err: any) {
          // setError(err.response?.data?.message || "退出失败");
        }
    navigate('/login');
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#0f172a',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
      }}
    >
      {/* 顶部区域 */}
      <Box>
        <Box
          sx={{
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            paddingLeft: '25px',
            color: 'white',
            backgroundColor: '#0f172a',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
          }}
        >
          Interview Hub
        </Box>

        <List>
          {menuItems.map(({ label, path, icon }) => (
            <ListItem key={label} disablePadding>
              <ListItemButton
                selected={location.pathname.startsWith(path)}
                onClick={() => navigate(path)}
                sx={{
                  mx: 1,
                  my: 0.5,
                  borderRadius: 2,
                  color: 'rgba(255,255,255,0.8)',
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    '& .MuiListItemIcon-root': {
                      color: '#fff',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.04)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* 底部头像 + Exit */}
{/* 底部头像 + Exit */}
<Box sx={{ px: 0, pb: 2 }}>


  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, mb: 2 }}>
    <Avatar sx={{ width: 64, height: 64, bgcolor: '#475569' }}>{user && <p>{user.email.charAt(0).toUpperCase()}</p>}</Avatar>
  </Box>

  <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 2, mx: 0 }} />

  <Box sx={{ display: 'flex', justifyContent: 'center', px: 2, pt: 1 }}>
    <Button
      onClick={handleLogout}
    
      size="small"
      startIcon={<LogoutIcon />}
      sx={{
        borderColor: 'rgba(255,255,255,0.5)',
        color: 'white',
        textTransform: 'none',
        fontSize: '0.75rem',
        '&:hover': {
          borderColor: 'white',
          backgroundColor: 'rgba(255,255,255,0.1)',
        },
      }}
    >
      Exit
    </Button>
  </Box>
</Box>

    </Drawer>
  );
};

export default SidebarMenu;
