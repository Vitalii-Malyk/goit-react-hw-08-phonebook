import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', { name, number });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const delContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contact, { rejectWithValue }) => {
    const { id, name, number } = contact;
    try {
      const { data } = await axios.patch(`/contacts/${id}`, {
        name,
        number,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const clearContacts = createAsyncThunk(
  'contacts/clearContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = [];
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export { fetchContacts, addContact, delContact, updateContact, clearContacts };
