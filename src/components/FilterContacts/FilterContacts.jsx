import React from 'react';
import { nanoid } from 'nanoid';

import {
  WrapElementStyle,
  InputElementStyle,
  WrapMainElementStyle,
} from 'components/FilterContacts/FilterContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import Example from 'components/Loading/Loading';

const FilterContacts = value => {
  let nameInputId = nanoid();
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.contacts);

  const handleChange = event => {
    dispatch(updateFilter(event.currentTarget.value));
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
      {isLoading && <Example />}
    </WrapMainElementStyle>
  );
};

export default FilterContacts;
