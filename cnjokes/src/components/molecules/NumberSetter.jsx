import React from 'react';

import CountInput from '../atoms/CountInput';

const NumberSetter = ({ count, max, onChangeHandler }) => (
  <div className="numberSetter">
    <span className="text">Set number of jokes: </span>
    <CountInput count={count} max={max} onChangeHandler={onChangeHandler} />
  </div>
);

export default NumberSetter;
