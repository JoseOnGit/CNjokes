import React, { Component } from 'react';
import './app.css';

import CategoryJokes from './components/organism/CategoryJokes';
import SearchJokes from './components/organism/SearchJokes';
// import RandomJokes from './components/organism/RandomJokes';
// import GlobalJokesProvider from './context/Provider';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">CN Jokes</header>
        <div className="content">
          <h1 className="text">Chuck Norris Jokes</h1>
          <div className="chuckHeader" />
          {/* <GlobalJokesProvider>
            <RandomJokes />
          </GlobalJokesProvider> */}
          <CategoryJokes />
          <SearchJokes />
        </div>
      </div>
    );
  }
}

export default App;
