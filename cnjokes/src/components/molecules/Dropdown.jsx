import React, { Component } from 'react';
import '../../App.css';

class Dropdown extends Component {
  render() {
    const { selectedValue, onChangeHandler, data } = this.props;

    return (
      <select value={selectedValue} onChange={onChangeHandler}>
        {Array.from(data).map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
}

export default Dropdown;
