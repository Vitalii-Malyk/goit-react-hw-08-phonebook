import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SignUp } from 'components/Registration/Registration';
import { registrationThunk } from 'redux/authOperations';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registration = body => {
    dispatch(registrationThunk(body));
    navigate('/user');
  };

  return <SignUp registration={registration} />;
};
export default RegistrationPage;
