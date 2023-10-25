import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import SignIn from 'components/SignIn/SignIn';

import { loginThunk } from 'redux/authOperations';
import { isAuthSelector } from 'redux/Selectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(isAuthSelector);

  const login = body => {
    dispatch(loginThunk(body));
    if (isAuth) {
      navigate('/user');
    }

    return;
  };

  return <SignIn login={login} />;
};

export default LoginPage;
