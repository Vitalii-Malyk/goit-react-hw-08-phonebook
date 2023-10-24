import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import FormCreateContact from 'components/Forms/FormCreateContact';
import FilterContacts from 'components/FilterContacts/FilterContacts';
import CreateListContact from 'components/CreateListContact/CreateListContact';

import { fetchContacts } from 'redux/contactsOperations';

import { Button } from '@mui/material';

import { WrapMainElementStyle } from 'Page/Home/HomePage.styled';

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <WrapMainElementStyle>
        <Button
          onClick={() => {
            navigate('/');
          }}
          type="button"
          variant="outlined"
          sx={{ mt: 1, mb: 1 }}
          size="small"
        >
          Go home
        </Button>
        <h1>Phonebook</h1>
        <FormCreateContact />
        <h2>Contacts</h2>
        <FilterContacts />
        <CreateListContact />
      </WrapMainElementStyle>
    </>
  );
};

export default UserPage;
