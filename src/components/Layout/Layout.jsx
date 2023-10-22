import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import { Container } from './Layout.styled';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/operations';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;
