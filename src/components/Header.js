import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggle from './ThemeToggle';  // Assuming ThemeToggle is set up properly
import { useTheme } from '../contexts/ThemeContext';  // Correct import of useTheme

const Header = ({ handleDrawerToggle }) => {
  const { theme, toggleTheme } = useTheme();  // Get current theme and toggle function from context

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        {/* Pass the toggle function to ThemeToggle for theme switching */}
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
