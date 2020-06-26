import React from 'react';

function SearchJokes(props) {

  const handleSearchedInput = async (event) => {
    props.onChange(event.target.value);
  }

  return (
    <div>
      <input type="text" className="search" placeholder="Search" onChange={handleSearchedInput} />
    </div>
  )
}
export default SearchJokes;