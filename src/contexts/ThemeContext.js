// ThemeContext.js
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const themeOptions = {
  light: createTheme({
    palette: {
      mode: 'light',
    },
  }),
  dark: createTheme({
    palette: {
      mode: 'dark',
    },
  }),
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = themeOptions[mode]; // ✅ this is now a valid MUI theme object

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, theme }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
