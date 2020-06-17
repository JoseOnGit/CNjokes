import React, { useState, useEffect } from 'react';

import './JokeCounter.css';

const JokeCounter = ({ handleJokeCountChange }) => {
  const [count, setCount] = useState(1);

  const onInputChange = ({ target }) => {
    const { value } = target || {};
    if (value && value < 100) setCount(value);
  };

  const countAdd = () => () => {
    if (count < 99) setCount(count + 1);
  };

  const countSubtract = () => () => {
    if (count > 1) setCount(count - 1);
  };

  useEffect(() => {
    handleJokeCountChange(count);
  }, [handleJokeCountChange, count]);

  return (
    <div className="counter-body">
      <span>
        <input
          className="counter-input"
          type="number"
          min={1}
          max={99}
          value={count}
          onChange={onInputChange}
        />
      </span>
      <span>
        <div className="counter-buttons-div">
          <button className="counter-button" onClick={countAdd()}>
            Ʌ
          </button>
        </div>
        <div className="counter-buttons-div">
          <button className="counter-button" onClick={countSubtract()}>
            V
          </button>
        </div>
      </span>
    </div>
  );
};

export default JokeCounter;
