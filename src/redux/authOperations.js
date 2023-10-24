import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setToken = token => {
  axios.defaults.headers['Authorization'] = `Bearer ${token}`;
};

const dellToken = () => {
  axios.defaults.headers['Authorization'] = '';
};

const registrationThunk = createAsyncThunk(
  'auth/registration',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', body);
      setToken(data.token);
      return data;
    } catch (error) {
      toast.error('Sorry, but you cannot register with this email');
      return rejectWithValue(error.message);
    }
  }
);

const refreshThunk = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const dataToken = thunkAPI.getState();
  const token = dataToken.auth.token;
  if (token === null) {
    return thunkAPI.rejectWithValue('Failed to get user data');
  }
  try {
    setToken(token);
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to get user data');
  }
});

const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', body);
      setToken(data.token);
      toast.success(`Welcome ${data.user.name}!`);
      return data;
    } catch (error) {
      toast.error('Login or password are not valid');
      return rejectWithValue();
    }
  }
);

const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/logout');
      dellToken();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { registrationThunk, refreshThunk, loginThunk, logoutThunk };
