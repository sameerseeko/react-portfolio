import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'; 
import './styles/index.css';
import './styles/styles.css';   // Your global CSS for styles

import { ThemeProvider } from './contexts/ThemeContext';  // Import the ThemeProvider

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider> {/* Wrap the App with ThemeProvider */}
    <App />
  </ThemeProvider>
);
