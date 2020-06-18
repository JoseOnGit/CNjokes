import React from 'react';

import CountInput from '../atoms/CountInput';

const NumberSetter = ({ count, max, onChangeHandler }) => (
  <CountInput count={count} max={max} onChangeHandler={onChangeHandler} />
);

export default NumberSetter;
