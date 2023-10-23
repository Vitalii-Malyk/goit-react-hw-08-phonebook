import { createSlice } from '@reduxjs/toolkit';

import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registrationThunk,
} from './authOperations';
import {
  handleAuthFulfilled,
  handleAuthPending,
  handleAuthRejected,
  handleLogoutFulfilled,
  handleRefreshFulfilled,
} from 'helper/functions/functions';
import toast from 'react-hot-toast';

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
      .addCase(registrationThunk.fulfilled, handleAuthFulfilled)
      .addCase(registrationThunk.rejected, handleAuthRejected)
      .addCase(refreshThunk.pending, handleAuthPending)
      .addCase(refreshThunk.fulfilled, handleRefreshFulfilled)
      .addCase(refreshThunk.rejected, handleAuthRejected)
      .addCase(loginThunk.pending, handleAuthPending)
      .addCase(loginThunk.fulfilled, handleAuthFulfilled)
      .addCase(loginThunk.rejected, handleAuthRejected, () => {
        toast.error('Wrong email or password');
      })
      .addCase(logoutThunk.pending, handleAuthPending)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
      .addCase(logoutThunk.rejected, handleAuthRejected)
      .addDefaultCase((state, action) => {});
  },
});

export const authReducer = authSlice.reducer;
