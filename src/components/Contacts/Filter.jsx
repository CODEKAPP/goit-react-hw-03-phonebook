// Filter.jsx
import React from 'react';
import { FilterStyleContainer } from './Styles/FormStyles';
import { InputStyle } from './Styles/InputStyle';
import { LabelStyle } from './Styles/LabelStyle';

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <FilterStyleContainer>
      <LabelStyle htmlFor="filter">Find contacts by name</LabelStyle>
      <InputStyle
        type="text"
        name="filter"
        placeholder="Search..."
        value={filter}
        onChange={handleFilterChange}
      />
    </FilterStyleContainer>
  );
};

export default Filter;
