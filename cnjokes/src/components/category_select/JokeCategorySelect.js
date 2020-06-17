import React, { useEffect, useState } from 'react';

import SelectOption from './SelectOption';

import './CategorySelect.css';

const JokeCategorySelect = ({ categories, handleCategoryChange }) => {
  const [selected, setSelected] = useState('');

  const handleChange = (event) => {
    const { id } = event.target || {};
    if (id !== selected) setSelected(id);
    else setSelected('');
  };

  useEffect(() => {
    handleCategoryChange(selected);
  }, [selected, handleCategoryChange]);

  return (
    <>
      {categories.map((category) => {
        const isActive = () => {
          if (selected === category) return true;
          else return false;
        };

        return (
          <div key={category}>
            <SelectOption
              name={category}
              selected={isActive()}
              handleChange={handleChange}
            />
          </div>
        );
      })}
    </>
  );
};

export default JokeCategorySelect;
