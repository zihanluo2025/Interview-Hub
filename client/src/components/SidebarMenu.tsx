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
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

interface SidebarMenuProps {
  drawerWidth: number;
}

const menuItems = [
  { label: '题库', path: '/questions', icon: <SchoolIcon /> },
  { label: '面试记录', path: '/jobs', icon: <WorkIcon /> },
  { label: '收藏', path: '/favorites', icon: <FavoriteIcon /> },
  { label: '我的资料', path: '/profile', icon: <PersonIcon /> },
];

const SidebarMenu: React.FC<SidebarMenuProps> = ({ drawerWidth }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#0f172a',
          color: 'white',
        },
      }}
    >
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
    </Drawer>
  );
};

export default SidebarMenu;
