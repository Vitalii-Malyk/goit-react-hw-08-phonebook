import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAuth = useSelector(state => state.auth.isAuth);

  return isAuth ? <Navigate to={redirectTo} /> : Component;
};
