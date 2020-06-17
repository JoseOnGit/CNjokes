import React from 'react';

const SelectOption = ({ name, selected, handleChange }) => {
  return (
    <button
      className={`select-button ${selected}`}
      key={name}
      onClick={handleChange}
      id={name}
    >
      {name}
    </button>
  );
};

export default SelectOption;
