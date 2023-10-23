import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';

import {
  FormElementStyle,
  InputElementStyle,
  ButtonElementStyle,
} from 'components/Forms/FormCreateContact.styled';

import { addContact } from 'redux/contactsOperations';
import { nanoid } from '@reduxjs/toolkit';

const FormCreateContact = () => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts);

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
        Notify.info(
          `A contact named ${nameArr.name} has been added to the contacts book`,
          {
            position: 'center-center',
            timeout: '1500',
          }
        );
        resetForm();
      } else {
        Notify.info('The contact is already in the phone book!', {
          position: 'center-center',
          timeout: '1500',
        });
      }
    } else {
      console.log(nameArr);
      dispatch(addContact(nameArr));
      resetForm();
    }
  };

  return (
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
      <ButtonElementStyle type="submit">Add contact</ButtonElementStyle>
    </FormElementStyle>
  );
};

export default FormCreateContact;
