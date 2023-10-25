import React from 'react';
import { nanoid } from 'nanoid';

import {
  WrapElementStyle,
  InputElementStyle,
  WrapMainElementStyle,
} from 'components/FilterContacts/FilterContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import { filterSelector } from 'redux/Selectors';

const FilterContacts = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  let nameInputId = nanoid();

  const handleChange = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(updateFilter(normalizedValue));
  };

  return (
    <WrapMainElementStyle>
      <WrapElementStyle>
        <label htmlFor={nameInputId}>Filter contacts:</label>
        <InputElementStyle
          onChange={handleChange}
          id={nameInputId}
          type="text"
          name="name"
          value={filter}
        />
      </WrapElementStyle>
    </WrapMainElementStyle>
  );
};

export default FilterContacts;
