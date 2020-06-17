import React from 'react';

import AppNavbar from './AppNavbar';

const Layout = ({ children }) => {
  return (
    <>
      <AppNavbar />
      {children}
    </>
  );
};

export default Layout;
