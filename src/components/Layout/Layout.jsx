import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import { Container } from './Layout.styled';
import Example from 'components/Loading/Loading';

const layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Example />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default layout;
