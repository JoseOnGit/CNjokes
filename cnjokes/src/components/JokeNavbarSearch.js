import React, { useState } from 'react';

import JokeList from './JokeList';
import { CHUCK_API, SEARCH_QUERY } from '../GlobalVariables';

function JokeNavbarSearch() {
  const [searchedJokes, setSearchedJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSearchedJokes = (query) => {
    setIsLoading(true);
    fetch(`${CHUCK_API}${SEARCH_QUERY}${query}`)
      .then((response) => response.json())
      .then((data) => {
        const { result } = data || [];
        console.log(result);
        const results = result.splice(0, 25).map(({ value }) => value);
        setSearchedJokes(results);
        setIsLoading(false);
      });
  };

  const handleSearchChange = (event) => {
    const searchedString = event.target.value || {};

    if (searchedString.length >= 3) {
      getSearchedJokes(searchedString);
    } else {
      setSearchedJokes([]);
    }
  };

  const searchResultsList = () => {
    if (searchedJokes.length > 0)
      return (
        <div className="search-results">
          <JokeList
            jokeList={searchedJokes}
            isLoading={isLoading}
            className="search-results"
          />
        </div>
      );
  };

  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        onChange={handleSearchChange}
        placeholder="search jokes"
      />
      {searchResultsList()}
    </div>
  );
}

export default JokeNavbarSearch;
