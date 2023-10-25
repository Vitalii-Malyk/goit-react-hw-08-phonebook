import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { isAuthSelector } from 'redux/Selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuth = useSelector(isAuthSelector);

  return isAuth ? <Navigate to={redirectTo} /> : Component;
};
