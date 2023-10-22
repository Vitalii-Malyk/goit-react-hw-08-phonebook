import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  > nav {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: orangered;
  }
`;
export const StyledWrap = styled.div`
  display: flex;
  gap: 30px;
`;
