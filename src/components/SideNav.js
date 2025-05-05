import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {
  Home as HomeIcon,
  School as EducationIcon,
  Code as ProjectsIcon,
  ContactMail as ContactIcon,
  Assessment as SkillsIcon
} from '@mui/icons-material';

const SideNav = ({ mobileOpen, handleDrawerToggle, isMobile }) => {
  const drawerWidth = 240;

  const navItems = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'Education', path: '/education', icon: <EducationIcon /> },
    { text: 'Projects', path: '/projects', icon: <ProjectsIcon /> },
    { text: 'Skills', path: '/skills', icon: <SkillsIcon /> },
    { text: 'Contact', path: '/contact', icon: <ContactIcon /> },
  ];

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isMobile ? mobileOpen : true}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar /> {/* Spacer for AppBar */}
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.text} 
            component={NavLink} 
            to={item.path}
            sx={{
              '&.active': {
                backgroundColor: (theme) => theme.palette.action.selected,
              }
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideNav;