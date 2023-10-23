import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  delContact,
  getContacts,
  postContact,
  updateContact,
} from 'api/contacts';
import toast from 'react-hot-toast';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers['Authorization'] = `Bearer ${token}`;
};

const dellToken = () => {
  instance.defaults.headers['Authorization'] = '';
};

const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    const dataToken = JSON.parse(localStorage.getItem('persist:auth'));
    const token = JSON.parse(dataToken?.token);

    if (token) {
      try {
        const data = await postContact({ name, number });
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
    return;
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    const dataToken = JSON.parse(localStorage.getItem('persist:auth'));
    const token = JSON.parse(dataToken?.token);
    if (token) {
      try {
        const data = await delContact(id);
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
    return;
  }
);

const patchContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    const dataToken = JSON.parse(localStorage.getItem('persist:auth'));
    const token = JSON.parse(dataToken?.token);
    if (token) {
      try {
        const data = await updateContact(id);
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
    return;
  }
);

const registrationThunk = createAsyncThunk(
  'auth/registration',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/signup', body);
      setToken(data.token);
      toast.success('Cool!!! You registred');
      return data;
    } catch (error) {
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
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to get user data');
  }
});

const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/login', body);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/users/logout');
      dellToken();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export {
  fetchContacts,
  addContact,
  deleteContact,
  patchContact,
  registrationThunk,
  refreshThunk,
  loginThunk,
  logoutThunk,
};
