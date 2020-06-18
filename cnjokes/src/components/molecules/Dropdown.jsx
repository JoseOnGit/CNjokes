import React from 'react';

import '../../app.css';

const Dropdown = ({ selectedValue, onChangeHandler, data }) => (
  <div>
    <select
      value={selectedValue}
      onChange={onChangeHandler}
      className="dropdown"
    >
      {Array.from(data).map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
