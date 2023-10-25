import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isAuthLoadingSelector, isAuthSelector } from 'redux/Selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoading = useSelector(isAuthLoadingSelector);
  const isAuth = useSelector(isAuthSelector);

  const shouldRedirect = !isAuth && !isLoading;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
