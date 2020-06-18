import React from 'react';

const CountInput = ({ count, max, onChangeHandler }) => {
  const maxValue = max && max;

  return (
    <input
      className="count-input"
      type="number"
      min="1"
      value={count}
      onChange={onChangeHandler}
      max={maxValue}
    />
  );
};

export default CountInput;
