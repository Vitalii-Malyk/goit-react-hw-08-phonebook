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
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {user.name}
      </Typography>
      <Button onClick={handleClick} color="inherit">
        Log Out
      </Button>
    </Wrapper>
  );
};
