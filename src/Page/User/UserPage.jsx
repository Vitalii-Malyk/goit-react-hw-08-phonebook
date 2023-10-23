// import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

// import CreateListContact from 'components/CreateListContact/CreateListContact';

// import { WrapMainElementStyle } from 'components/App/App.styled';
// import FilterContacts from 'components/FilterContacts/FilterContacts';
// import Loader from 'components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/authOperations';
import { Button } from '@mui/material';
import { WrapMainElementStyle } from 'components/App/App.styled';
import FormCreateContact from 'components/Forms/FormCreateContact';
import FilterContacts from 'components/FilterContacts/FilterContacts';
import CreateListContact from 'components/CreateListContact/CreateListContact';
// import FilterContacts from 'components/FilterContacts/FilterContacts';
// import CreateListContact from 'components/CreateListContact/CreateListContact';

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);

  const handlLogout = () => {
    dispatch(logoutThunk());
    navigate('/');
  };
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
        <div>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
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
        <h1>Phonebook</h1>
        <FormCreateContact />
        <h2>Contacts</h2>
        <FilterContacts />
        <CreateListContact />
      </WrapMainElementStyle>
      {/* <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> */}
    </>
  );
};

export default UserPage;
