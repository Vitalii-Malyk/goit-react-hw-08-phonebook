import { useNavigate } from 'react-router-dom';

import { Button } from 'helper/materialApiImport';

import { AuthNavBox } from './AuthNav.styled';

export const AuthNav = () => {
  const navigate = useNavigate();

  return (
    <AuthNavBox>
      <Button
        onClick={() => navigate('/register')}
        sx={{
          color: 'darkslategray',
          ':hover': {
            color: 'rgba(25, 118, 210)',
          },
        }}
      >
        Register
      </Button>
      <Button
        onClick={() => navigate('/login')}
        sx={{
          color: 'darkslategray',
          ':hover': {
            color: 'rgba(25, 118, 210)',
          },
        }}
      >
        Login
      </Button>
    </AuthNavBox>
  );
};
