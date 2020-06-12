import React from 'react';
import { Input } from 'reactstrap';

function JokeCategorySelect(props) {
  const { categories, handleCategoryChange } = props || {};

  return (
    <Input type="select" name="select" onChange={handleCategoryChange}>
      <option key="Any">Any</option>
      {categories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </Input>
  );
}

export default JokeCategorySelect;
