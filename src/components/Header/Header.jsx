import React from 'react';

import { HeaderStyled, StyledNavLink } from './Header.styled';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="user">User page</StyledNavLink>
        <StyledNavLink to="registration">Registration page</StyledNavLink>
        <button
          type="button"
          onClick={() => {
            navigate('login');
          }}
        >
          Login
        </button>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
