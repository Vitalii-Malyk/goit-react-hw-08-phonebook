import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ButtonStyle } from 'Page/User/UserPage.styled';

// import { useSelector } from 'react-redux';
// import CreateListContact from 'components/CreateListContact/CreateListContact';
// import FormCreateContact from 'components/Forms/FormCreateContact';
// import { WrapMainElementStyle } from 'components/App/App.styled';
// import FilterContacts from 'components/FilterContacts/FilterContacts';
import Loader from 'components/Loading/Loading';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/operations';

const UserPage = () => {
  const dispatch = useDispatch();
  // const { error } = useSelector(state => state.contacts);

  const handlLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <>
      <ButtonStyle
        onClick={() => {
          console.log('hello');
        }}
      >
        Go back
      </ButtonStyle>
      <div>
        <p>mango@mail.com</p>
        <button onClick={handlLogout}>Logout</button>
      </div>
      {/* <WrapMainElementStyle>
        <h1>Phonebook</h1>
        <FormCreateContact />
        <h2>Contacts</h2>
        <FilterContacts />
        {error && <b>{error}</b>}
        <CreateListContact />
      </WrapMainElementStyle> */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default UserPage;
