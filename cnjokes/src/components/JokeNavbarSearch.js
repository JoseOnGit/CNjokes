import React, { useState } from 'react';
import { Form, Input } from 'reactstrap';

import JokeList from './JokeList';
import { CHUCK_API, SEARCH_QUERY } from '../GlobalVariables';

import './layout/AppNavbar.css';

function JokeNavbarSearch() {
  const [searchedJokes, setSearchedJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSearchedJokes = (query) => {
    setIsLoading(true);
    fetch(`${CHUCK_API}${SEARCH_QUERY}${query}`)
      .then((response) => response.json())
      .then(({ result }) => {
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

  return (
    <Form>
      <Input
        className="search-input"
        type="text"
        onChange={handleSearchChange}
      />
      <JokeList jokeList={searchedJokes} isLoading={isLoading} />
    </Form>
  );
}

export default JokeNavbarSearch;
