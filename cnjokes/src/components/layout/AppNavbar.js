import React from 'react';
import JokeNavbarSearch from '../JokeNavbarSearch';

import './AppNavbar.css';

function AppNavbar() {
  return (
    <div className="topnav">
      <a className="navbar-brand" href="/">
        CNjokes
      </a>
      <JokeNavbarSearch className="search-container" />
    </div>
  );
}

export default AppNavbar;
