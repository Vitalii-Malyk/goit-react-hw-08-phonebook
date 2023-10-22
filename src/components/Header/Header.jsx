import React from 'react';

import { HeaderStyled, StyledNavLink, StyledWrap } from './Header.styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { logoutThunk } from 'redux/operations';

const Header = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const handlLogout = () => {
    dispatch(logoutThunk());
    navigate('/');
  };

  return (
    <HeaderStyled>
      <nav>
        <StyledWrap>
          <StyledNavLink to="/">Home</StyledNavLink>
          {isAuth ? (
            <StyledNavLink to="user">User page</StyledNavLink>
          ) : (
            <StyledNavLink to="registration">Registration page</StyledNavLink>
          )}
        </StyledWrap>
        {isAuth ? (
          <Button
            onClick={handlLogout}
            type="button"
            variant="outlined"
            sx={{ mt: 1, mb: 1 }}
            size="small"
          >
            Logout
          </Button>
        ) : (
          <Button
            type="button"
            onClick={() => {
              navigate('login');
            }}
            variant="outlined"
            sx={{ mt: 1, mb: 1 }}
            size="small"
          >
            Login
          </Button>
        )}
      </nav>
    </HeaderStyled>
  );
};

export default Header;
