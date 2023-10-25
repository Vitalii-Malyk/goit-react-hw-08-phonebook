import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logoutThunk } from 'redux/authOperations';
import { userSelector } from 'redux/Selectors';

import { Typography, Button } from 'helper/materialApiImport';

import { Wrapper } from './UserMenu.styled';
import { clearContacts } from 'redux/contactsOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(userSelector);

  const handleClick = () => {
    dispatch(logoutThunk());
    dispatch(clearContacts());
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
