import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Wrapper } from './UserMenu.styled';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { logoutThunk } from 'redux/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);

  const handleClick = () => {
    dispatch(logoutThunk());
    navigate('/');
  };

  return (
    <Wrapper>
      <Typography component="p" sx={{ color: 'rgba(25, 118, 210)' }}>
        {user.name}
      </Typography>
      <Button
        onClick={handleClick}
        sx={{
          p: 0.5,
          color: 'darkslategray',
          ':hover': {
            color: 'rgba(25, 118, 210)',
          },
        }}
      >
        Log Out
      </Button>
    </Wrapper>
  );
};
