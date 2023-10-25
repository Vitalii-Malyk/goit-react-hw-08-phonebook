import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import { addContact } from 'redux/contactsOperations';
import { contactsSelector } from 'redux/Selectors';

import { Button } from 'helper/materialApiImport';

import {
  FormElementStyle,
  InputElementStyle,
  WrapperStyle,
} from 'components/Forms/FormCreateContact.styled';

export const FormCreateContact = () => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');
  const dispatch = useDispatch();
  const { items } = useSelector(contactsSelector);

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setPhone(value);
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };
  const сreateСontact = e => {
    e.preventDefault();

    return formSubmitHandler({ name, number });
  };
  const formSubmitHandler = ({ name, number }) => {
    repeatControl({ name, number });
  };
  const repeatControl = newContact => {
    let nameArr = {
      id: nanoid(),
      name: newContact.name,
      number: newContact.number,
    };
    if (items.length > 0) {
      if (
        !items.find(
          nameArr =>
            nameArr.name.toLowerCase() === newContact.name.toLowerCase()
        )
      ) {
        dispatch(addContact(nameArr));
        resetForm();
      } else {
        toast.error('The contact is already in the phone book!');
      }
    } else {
      dispatch(addContact(nameArr));
      resetForm();
    }
  };

  return (
    <WrapperStyle>
      <FormElementStyle onSubmit={сreateСontact}>
        <label>Name</label>
        <InputElementStyle
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          required
        />
        <label>Phone</label>
        <InputElementStyle
          type="tel"
          onChange={handleChange}
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></InputElementStyle>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 1,
            mb: 1,
            p: 0.2,
            color: 'darkslategray',
            backgroundColor: 'rgb(250, 235, 215)',
            ':hover': {
              backgroundColor: 'rgb(250, 235, 215, 0.8)',
              color: 'rgba(25, 118, 210)',
            },
          }}
        >
          Add contact
        </Button>
      </FormElementStyle>
    </WrapperStyle>
  );
};
