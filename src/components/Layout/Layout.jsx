import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;
