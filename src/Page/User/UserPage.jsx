import { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// import { useSelector } from 'react-redux';
// import CreateListContact from 'components/CreateListContact/CreateListContact';
// import FormCreateContact from 'components/Forms/FormCreateContact';
// import { WrapMainElementStyle } from 'components/App/App.styled';
// import FilterContacts from 'components/FilterContacts/FilterContacts';
import Loader from 'components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/operations';
import { Button } from '@mui/material';

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);

  // const { error } = useSelector(state => state.contacts);

  const handlLogout = () => {
    dispatch(logoutThunk());
    navigate('/');
  };
  return (
    <>
      <Button
        onClick={() => {
          navigate('login');
        }}
        type="button"
        variant="outlined"
        sx={{ mt: 1, mb: 1 }}
        size="small"
      >
        Go back
      </Button>
      <div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        {/* {error && <b>{error}</b>} */}
        <Button
          onClick={handlLogout}
          type="button"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          size="small"
        >
          Logout
        </Button>
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
