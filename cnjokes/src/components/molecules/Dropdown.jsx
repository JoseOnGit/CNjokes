import React from 'react';

import '../../app.css';

const Dropdown = ({ selectedValue, onChangeHandler, data }) => (
  <select value={selectedValue} onChange={onChangeHandler}>
    {Array.from(data).map((option) => (
      <option value={option} key={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Dropdown;
