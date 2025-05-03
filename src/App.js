
import React, { use } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PageTitleProvider } from './contexts/PageTitleContext';
import { ThemeProvider } from './contexts/ThemeContext'; // Fix here
import { useTheme } from './contexts/ThemeContext'; // Fix here
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Layout from './components/Layout';
import { ThemeManager } from './components/ThemeManager'; // Fix here


// Create a wrapper component to properly use the theme context
const MuiThemeProviderWrapper = ({ children }) => {
  const { theme } = useTheme();
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <MuiThemeProviderWrapper>
          <CssBaseline />
          <ThemeManager /> {/* Add ThemeManager here */}
          <PageTitleProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
              </Routes>
            </Layout>
          </PageTitleProvider>
        </MuiThemeProviderWrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;