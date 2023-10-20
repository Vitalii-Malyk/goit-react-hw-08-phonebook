import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import { Container } from './Layout.styled';
import Example from 'components/Loading/Loading';
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
      <Suspense fallback={<Example />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
