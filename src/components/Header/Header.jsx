import React from 'react';

import { HeaderStyled, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/userPage">User page</StyledNavLink>
        <button type="button">Login</button>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
