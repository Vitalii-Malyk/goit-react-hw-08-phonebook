import { useEffect } from 'react';

import SignIn from 'components/SignIn/SignIn';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/authOperations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.isAuth);

  const login = body => {
    dispatch(loginThunk(body));
    if (isAuth === true) {
      navigate('/user');
    }
    return;
  };

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth, navigate]);

  return <SignIn login={login} />;
};

export default LoginPage;
