import React, { useEffect, useState } from 'react';

import JokeList from './JokeList';
import { CHUCK_API, SEARCH_QUERY } from '../GlobalVariables';

function JokeNavbarSearch() {
  const [searchedJokes, setSearchedJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchedString, setSearchedString] = useState('');

  const getSearchedJokes = (query) => {
    setIsLoading(true);
    fetch(`${CHUCK_API}${SEARCH_QUERY}${query}`)
      .then((response) => response.json())
      .then((data) => {
        const result = data.result || [];
        const results = result.splice(0, 25).map(({ value }) => {
          console.log(value);
          if (value.length > 25) {
            return value.slice(0, 50) + '...';
          } else return value;
        });
        setSearchedJokes(results);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (searchedString.length >= 3) {
      getSearchedJokes(searchedString);
    } else {
      setSearchedJokes([]);
    }
  }, [searchedString]);

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
        onChange={(event) => setSearchedString(event.target.value)}
        placeholder="search jokes"
      />
      {searchResultsList()}
    </div>
  );
}

export default JokeNavbarSearch;
