import React from 'react';

import CountInput from '../atoms/CountInput';

const NumberSetter = ({ count, max, onChangeHandler }) => (
  <div className="numberSetter">
    <span className="text">Number of jokes you would like to see: </span>
    <CountInput count={count} max={max} onChangeHandler={onChangeHandler} />
  </div>
);

export default NumberSetter;
