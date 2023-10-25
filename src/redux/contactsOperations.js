import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

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
      toast.success(`Contact ${name} has been added`);
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
      toast.success(`Сontact ${data.name} has been deleted`);
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
      toast.success(`Contact ${name} has been update`);
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
