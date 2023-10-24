import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoading = useSelector(state => state.auth.isLoading);
  const isAuth = useSelector(state => state.auth.isAuth);

  const shouldRedirect = !isAuth && !isLoading;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
