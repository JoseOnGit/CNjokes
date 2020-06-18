import React from 'react';
import './app.css';

import Header from './components/molecules/Header';
import CategoryJokes from './components/organism/CategoryJokes';
import SearchJokes from './components/organism/SearchJokes';
import RandomJoke from './components/organism/RandomJoke';

const App = () => (
  <div>
    <Header />
    <div className="content-wrapper">
      <RandomJoke />
      <CategoryJokes />
      <SearchJokes />
    </div>
  </div>
);

export default App;
