import { useEffect } from 'react';

import SignIn from 'components/SignIn/SignIn';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.isAuth);

  const login = body => {
    dispatch(loginThunk(body));
    navigate('/user', { replace: true });
  };

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth, navigate]);

  return <SignIn login={login} />;
};

export default LoginPage;
