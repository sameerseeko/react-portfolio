import React, { createContext, useState, useContext } from 'react';

// Create a context for the page title
export const PageTitleContext = createContext();

// Create a custom hook to use the PageTitleContext
export const usePageTitle = () => {
  const context = useContext(PageTitleContext);
  if (!context) {
    throw new Error('usePageTitle must be used within a PageTitleProvider');
  }
  return context;
};

// PageTitleProvider component to wrap your app and provide context
export const PageTitleProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('Home'); // Default page title

  return (
    <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};
