import React, { Component } from 'react';

class SearchInput extends Component {
  render() {
    const { searchPhrase, onChangeHandler } = this.props;
    return (
      <input
        type="text"
        placeholder="Search"
        value={searchPhrase}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchInput;
