import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Nav } from './Navigation.styled';

export const Navigation = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const navigate = useNavigate();

  return (
    <Nav>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => navigate('/')}
      >
        <HomeIcon />
      </IconButton>
      {isAuth && (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button onClick={() => navigate('/contacts')} color="inherit">
            Phonebook
          </Button>
        </Typography>
      )}
    </Nav>
  );
};
