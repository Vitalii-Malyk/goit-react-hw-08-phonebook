import { createAsyncThunk } from '@reduxjs/toolkit';
import { logout, refresh, signIn, signUp } from 'api/auth';

import {
  delContact,
  getContacts,
  postContact,
  updateContact,
} from 'api/contacts';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    const dataToken = JSON.parse(localStorage.getItem('persist:auth'));

    const token = JSON.parse(dataToken?.token);
    if (token) {
      try {
        const data = await getContacts(token);
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
    return;
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, { rejectWithValue }) => {
    const dataToken = JSON.parse(localStorage.getItem('persist:auth'));

    const token = JSON.parse(dataToken?.token);
    if (token) {
      try {
        const data = await postContact(token, { name: name, number: phone });
        return data;
      } catch (error) {
        return rejectWithValue(error);
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
        const data = await delContact(token, id);
        return data;
      } catch (error) {
        return rejectWithValue(error);
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
        return rejectWithValue(error);
      }
    }
    return;
  }
);

const registrationThunk = createAsyncThunk(
  'auth/registration',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signUp(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.respons.data);
    }
  }
);

const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue }) => {
    const dataToken = JSON.parse(localStorage.getItem('persist:auth'));
    const token = JSON.parse(dataToken?.token);
    if (token) {
      try {
        const data = await refresh(token);
        return data;
      } catch (error) {
        return rejectWithValue(error.respons.data);
      }
    }
    return;
  }
);

const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signIn(body);
      return data;
    } catch (error) {
      // console.log(error.response.status);
      return rejectWithValue(error.respons.data);
    }
  }
);

const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logout();
      return data;
    } catch (error) {
      return rejectWithValue(error.respons.data);
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
