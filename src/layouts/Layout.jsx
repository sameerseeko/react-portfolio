import React from 'react';
import Header from './Header';
import SideNav from './SideNav';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <SideNav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;