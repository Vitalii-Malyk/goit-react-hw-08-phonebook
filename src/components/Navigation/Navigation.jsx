import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { isAuthSelector } from 'redux/Selectors';

import {
  IconButton,
  HomeIcon,
  Typography,
  Button,
} from 'helper/materialApiImport';

import { Nav } from './Navigation.styled';

export const Navigation = () => {
  const isAuth = useSelector(isAuthSelector);
  const navigate = useNavigate();

  return (
    <Nav>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{
          p: 0.4,
          color: 'darkslategray',
          ':hover': {
            color: 'rgba(25, 118, 210)',
          },
        }}
        onClick={() => navigate('/')}
      >
        <HomeIcon />
      </IconButton>
      {isAuth && (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button
            onClick={() => navigate('/user')}
            color="inherit"
            sx={{
              p: 0.4,
              color: 'darkslategray',
              ':hover': {
                color: 'rgba(25, 118, 210)',
              },
            }}
          >
            Phonebook
          </Button>
        </Typography>
      )}
    </Nav>
  );
};
