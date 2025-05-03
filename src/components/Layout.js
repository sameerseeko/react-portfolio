import React, { useState } from 'react';
import { Box, CssBaseline, useMediaQuery } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext';
import Header from './Header';
import SideNav from './SideNav';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { theme } = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
        transition: 'all 0.3s ease',
      }}
    >
      <CssBaseline />
      {/* Header */}
      <Header handleDrawerToggle={handleDrawerToggle} />
      
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        {/* Side Navigation */}
        <SideNav 
          mobileOpen={mobileOpen} 
          handleDrawerToggle={handleDrawerToggle}
          isMobile={isMobile}
        />
        
        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - 240px)` },
            marginTop: { xs: '56px', sm: '64px' }
          }}
        >
          {children}
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Layout;