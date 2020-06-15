import React from 'react';

import '../../app.css';

const Dropdown = ({ selectedValue, onChangeHandler, data }) => (
  <div className="dropdown">
    <span className="text">Choose category </span>
    <select value={selectedValue} onChange={onChangeHandler}>
      {Array.from(data).map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
