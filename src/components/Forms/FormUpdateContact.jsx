import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { updateContact } from 'redux/contactsOperations';

import {
  FormElementStyle,
  InputElementStyle,
  WrapperStyle,
} from 'components/Forms/FormUpdateContact.styled';
import { Button } from '@mui/material';
import { contactsSelector } from 'redux/Selectors';

const FormUpdateContact = ({ contactId }) => {
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

  const updateСontact = e => {
    e.preventDefault();

    return formSubmitHandler({ name, number });
  };
  const formSubmitHandler = ({ name, number }) => {
    repeatControl({ name, number });
  };
  const repeatControl = newContact => {
    let nameArr = {
      id: contactId,
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
        dispatch(updateContact(nameArr));
        resetForm();
      } else {
        toast.error('The contact is already in the phone book!');
      }
    } else {
      dispatch(updateContact(nameArr));
      resetForm();
    }
  };

  return (
    <WrapperStyle>
      <FormElementStyle onSubmit={updateСontact}>
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
          Update contact
        </Button>
      </FormElementStyle>
    </WrapperStyle>
  );
};

export default FormUpdateContact;
