import React from 'react';

const Button = ({handleClick, text}) => 
  <button className="button" onClick={handleClick}>{text}</button>
export default Button;
