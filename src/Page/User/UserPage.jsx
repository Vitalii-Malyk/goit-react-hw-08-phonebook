import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ButtonStyle } from 'Page/User/UserPage.styled';

import { useSelector } from 'react-redux';
import CreateListContact from 'components/CreateListContact/CreateListContact';
import FormCreateContact from 'components/Forms/FormCreateContact';
import { WrapMainElementStyle } from 'components/App/App.styled';
import FilterContacts from 'components/FilterContacts/FilterContacts';
import Loader from 'components/Loading/Loading';

const UserPage = () => {
  const { error } = useSelector(state => state.contacts);
  return (
    <>
      <ButtonStyle
        onClick={() => {
          console.log('hello');
        }}
      >
        Go back
      </ButtonStyle>
      <WrapMainElementStyle>
        <h1>Phonebook</h1>
        <FormCreateContact />
        <h2>Contacts</h2>
        <FilterContacts />
        {error && <b>{error}</b>}
        <CreateListContact />
      </WrapMainElementStyle>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default UserPage;
