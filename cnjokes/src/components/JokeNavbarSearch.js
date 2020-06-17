import React, { useEffect, useState } from 'react';

import JokeList from './JokeList';
import { CHUCK_API, SEARCH_QUERY } from '../GlobalVariables';

const JokeNavbarSearch = () => {
  const [searchedJokes, setSearchedJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchedString, setSearchedString] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [displayJokes, setDisplayJokes] = useState(false);

  const getSearchedJokes = (query) => {
    setIsLoading(true);
    fetch(`${CHUCK_API}${SEARCH_QUERY}${query}`)
      .then((response) => response.json())
      .then((data) => {
        const result = data.result || [];
        const results = result.splice(0, 25).map(({ value, id }) => {
          if (value.length > 25) {
            return { value: value.slice(0, 70) + '...', id: id };
          } else return value;
        });
        setSearchedJokes(results);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (searchedString.length >= 3) {
      getSearchedJokes(searchedString);
      setDisplayJokes(true);
    } else {
      setSearchedJokes([]);
      setDisplayJokes(false);
    }
  }, [searchedString]);

  const searchResultsList = () => {
    if (searchedJokes.length > 0 && isFocused && displayJokes)
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

  const handleFocus = (isFocused) => () => setIsFocused(isFocused);

  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        onChange={(event) => setSearchedString(event.target.value)}
        placeholder="search jokes"
        onFocus={handleFocus(true)}
        onBlur={handleFocus(false)}
      />
      {searchResultsList()}
    </div>
  );
};

export default JokeNavbarSearch;
