import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { Loader } from 'components/Loading/Loading';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  ContactPhoneIcon,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  Link,
} from 'helper/materialApiImport';

function Copyright(props) {
  const navigate = useNavigate();
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          navigate('/');
        }}
      >
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export function SignIn({ login }) {
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const handlHomeBtn = () => {
    navigate('/');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Button
          type="button"
          variant="outlined"
          sx={{ mt: 1, mb: 1 }}
          size="small"
          onClick={handlHomeBtn}
        >
          Go home
        </Button>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'rgb(250, 235, 215)' }}>
            <ContactPhoneIcon sx={{ fill: 'rgba(25, 118, 210)' }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {<Loader />}
            <Grid container>
              <Grid item>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    navigate('/registration');
                  }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
