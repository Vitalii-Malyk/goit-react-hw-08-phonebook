import { createSlice } from '@reduxjs/toolkit';

import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registrationThunk,
} from './authOperations';
import {
  handleAuthFullfilled,
  handleAuthPending,
  handleAuthRejected,
  handleLogoutFullfilled,
  handleRefreshFullfilled,
} from 'helper/functions/functions';

const initialState = {
  token: null,
  user: null,
  isAuth: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.pending, handleAuthPending)
      .addCase(registrationThunk.fulfilled, handleAuthFullfilled)
      .addCase(registrationThunk.rejected, handleAuthRejected)
      .addCase(refreshThunk.pending, handleAuthPending)
      .addCase(refreshThunk.fulfilled, handleRefreshFullfilled)
      .addCase(refreshThunk.rejected, handleAuthRejected)
      .addCase(loginThunk.pending, handleAuthPending)
      .addCase(loginThunk.fulfilled, handleAuthFullfilled)
      .addCase(loginThunk.rejected, handleAuthRejected)
      .addCase(logoutThunk.pending, handleAuthPending)
      .addCase(logoutThunk.fulfilled, handleLogoutFullfilled)
      .addCase(logoutThunk.rejected, handleAuthRejected)
      .addDefaultCase((state, action) => {});
  },
});

export const authReducer = authSlice.reducer;
