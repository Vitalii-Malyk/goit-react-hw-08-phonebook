import { createAsyncThunk } from '@reduxjs/toolkit';
import { logout, refresh, signIn, signUp } from 'api/auth';

import { delContact, getContacts, postContact } from 'api/contacts';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, { rejectWithValue }) => {
    try {
      const data = await postContact({ name: name, phone: phone });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await delContact(id);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
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
    if (token === null) {
      rejectWithValue('error');
    }
    try {
      const data = await refresh(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.respons.data);
    }
  }
);

const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signIn(body);
      return data;
    } catch (error) {
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
  registrationThunk,
  refreshThunk,
  loginThunk,
  logoutThunk,
};
