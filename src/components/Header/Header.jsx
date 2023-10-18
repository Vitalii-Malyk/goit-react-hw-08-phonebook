import React from 'react';

import { HeaderStyled, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/user">User page</StyledNavLink>
        <StyledNavLink to="/login">Login page</StyledNavLink>
        <StyledNavLink to="/registration">Registration page</StyledNavLink>
        <button
          type="button"
          onClick={() => {
            console.log('login');
          }}
        >
          Login
        </button>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
