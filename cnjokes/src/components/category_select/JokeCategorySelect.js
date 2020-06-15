import React, { useEffect, useState } from 'react';

import SelectOption from './SelectOption';

import './CategorySelect.css';

function JokeCategorySelect(props) {
  const { categories, handleCategoryChange } = props || {};

  const [selected, setSelected] = useState('');

  const handleChange = (event) => {
    const { id } = event.target || {};
    if (id !== selected) setSelected(id);
    else setSelected('');
  };

  useEffect(() => {
    handleCategoryChange(selected);
  }, [selected]);

  return (
    <>
      {categories.map((category) => {
        let active = false;
        if (selected === category) active = true;

        return (
          <div key={category}>
            <SelectOption
              name={category}
              selected={active}
              handleChange={handleChange}
            />
          </div>
        );
      })}
    </>
  );
}

export default JokeCategorySelect;
