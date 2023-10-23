import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import { Container } from './Layout.styled';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'redux/authOperations';

const Layout = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth);

  useEffect(() => {
    if (isAuth) {
      dispatch(refreshThunk());
    }
    return;
  }, [dispatch, isAuth]);

  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;
