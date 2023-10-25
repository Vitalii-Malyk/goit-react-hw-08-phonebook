import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FormCreateContact } from 'components/Forms/FormCreateContact';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';
import { CreateListContact } from 'components/CreateListContact/CreateListContact';
import { fetchContacts } from 'redux/contactsOperations';
import { Loader2 } from 'components/Loading/Loading';

import { Button } from 'helper/materialApiImport';

import {
  TextStyle,
  TitleStyle,
  WrapLoaderStyle,
  WrapMainElementStyle,
} from './UserPage.styled';

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
          variant="contained"
          sx={{
            mt: 1,
            mb: 1,
            p: 0.3,
            color: 'darkslategray',
            backgroundColor: 'rgb(250, 235, 215)',
            ':hover': {
              backgroundColor: 'rgb(250, 235, 215, 0.8)',
              color: 'rgba(25, 118, 210)',
            },
          }}
          size="small"
        >
          Go home
        </Button>
        <TitleStyle>Phonbook</TitleStyle>
        <FormCreateContact />
        <TextStyle>Contacts</TextStyle>
        <FilterContacts />
        <WrapLoaderStyle>{<Loader2 />}</WrapLoaderStyle>
        <CreateListContact />
      </WrapMainElementStyle>
    </>
  );
};

export default UserPage;
