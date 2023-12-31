import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  ContactPhoneIcon,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
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

export function SignUp({ registration }) {
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    registration({
      name: data.get('name'),
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
            Registration
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  helperText="min. length is 7 ch."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registration
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
