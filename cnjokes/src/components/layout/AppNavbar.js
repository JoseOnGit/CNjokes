import React from 'react';
import JokeNavbarSearch from '../JokeNavbarSearch';

import './AppNavbar.css';

const AppNavbar = () => {
  return (
    <div className="topnav">
      <a className="navbar-brand" href="/">
        CNjokes
      </a>
      <JokeNavbarSearch />
    </div>
  );
};

export default AppNavbar;
