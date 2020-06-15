import React from 'react';

import '../../app.css';

const SearchInput = ({ searchPhrase, onChangeHandler }) => (
  <input
    className="search-input"
    type="text"
    placeholder="Search"
    value={searchPhrase}
    onChange={onChangeHandler}
  />
);

export default SearchInput;
