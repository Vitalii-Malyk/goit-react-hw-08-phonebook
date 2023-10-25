import * as React from 'react';
import { useSelector } from 'react-redux';

import { AppBar, Box, Toolbar } from 'helper/materialApiImport';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { isAuthSelector } from 'redux/Selectors';

export const AppBarComponent = () => {
  const isAuth = useSelector(isAuthSelector);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: 'rgb(250, 235, 215)',
            color: 'rgba(25, 118, 210)',
          }}
        >
          <Navigation />
          {isAuth ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
