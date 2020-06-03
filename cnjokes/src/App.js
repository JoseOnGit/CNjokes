import React, { Component } from "react";
import "./App.css";

import CategoryJokes from "./components/organism/CategoryJokes";
import SearchJokes from "./components/organism/SearchJokes";

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">CN Jokes</header>
        <div className="content">
          <h1 className="text">Chuck Norris Jokes</h1>
          <div className="chuckHeader" />
          <CategoryJokes />
          <SearchJokes />
        </div>
      </div>
    );
  }
}

export default App;
