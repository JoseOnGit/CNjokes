import React from 'react';

const SearchJokes = ({onChange}) => {
  const handleSearchedInput = async (event) => {
    onChange(event.target.value);
  }
  return <input type="text" className="search" placeholder="Search" onChange={handleSearchedInput} />;
}
export default SearchJokes;
