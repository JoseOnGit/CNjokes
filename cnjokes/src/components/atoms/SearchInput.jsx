import React from 'react';

const SearchInput = ({ searchPhrase, onChangeHandler }) => (
  <input
    type="text"
    placeholder="Search"
    value={searchPhrase}
    onChange={onChangeHandler}
  />
);

export default SearchInput;
