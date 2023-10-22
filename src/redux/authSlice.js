import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registrationThunk,
} from './operations';
import {
  handleAuthFulfilled,
  handleLogoutFulfilled,
  handleRefreshFulfilled,
} from 'helper/functions/functions';

const initialState = {
  token: null,
  user: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleAuthFulfilled)
      .addCase(refreshThunk.fulfilled, handleRefreshFulfilled)
      .addCase(loginThunk.fulfilled, handleAuthFulfilled)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled);
  },
});

export const authReducer = authSlice.reducer;
