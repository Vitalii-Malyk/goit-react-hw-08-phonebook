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
} from 'helper/functions/functions';

const initialState = {
  token: '',
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(registrationThunk.fulfilled, handleAuthFulfilled)
      .addCase(refreshThunk.fulfilled, handleAuthFulfilled)
      .addCase(loginThunk.fulfilled, handleAuthFulfilled)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled);
  },
});

export const authReducer = authSlice.reducer;
