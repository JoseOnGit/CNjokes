import React from 'react';

const Button = ({ text, onClickHandler }) => (
  <button className="new-joke-button" onClick={onClickHandler}>
    {text}
  </button>
);

export default Button;
