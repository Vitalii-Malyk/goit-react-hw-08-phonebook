import SignUp from 'components/Registration/Registration';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registrationThunk } from 'redux/operations';
import { useEffect } from 'react';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.auth.token);

  const registration = body => {
    dispatch(registrationThunk(body));
    navigate('/');
  };

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth, navigate]);

  return <SignUp registration={registration} />;
};
export default RegistrationPage;