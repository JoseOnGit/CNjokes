import React from 'react';

function SelectOption(props) {
  const { name, selected, handleChange } = props || {};
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
}

export default SelectOption;
