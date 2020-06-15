import React from 'react';
import './app.css';

import CategoryJokes from './components/organism/CategoryJokes';
import SearchJokes from './components/organism/SearchJokes';
import RandomJoke from './components/organism/RandomJoke';

const App = () => (
  <div>
    <header className="header">
      <span className="header-item">Chuck Norris Jokes</span>
      <span className="header-item">
        <span className="CN">CN</span> University
      </span>
    </header>
    <div className="content">
      <RandomJoke />
      <CategoryJokes />
      <SearchJokes />
    </div>
  </div>
);

export default App;
