// src/components/ThemeManager.jsx
import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext'; // Use your custom context

export const ThemeManager = () => {
  const { theme } = useTheme(); // "light" or "dark"

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return null;
};
