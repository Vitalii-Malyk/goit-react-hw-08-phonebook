import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Loader } from 'components/Loading/Loading';
import { AppBarComponent } from 'components/AppBar/AppBar';

import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <AppBarComponent />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
