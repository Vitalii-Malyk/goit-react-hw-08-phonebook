import { Outlet } from 'react-router-dom';

import { Container } from './Layout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loading/Loading';

import { AppBarComponent } from 'components/AppBar/AppBar';

const Layout = () => {
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

export default Layout;
