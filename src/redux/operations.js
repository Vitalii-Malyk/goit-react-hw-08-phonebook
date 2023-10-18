import { createAsyncThunk } from '@reduxjs/toolkit';

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

export { fetchContacts, addContact, deleteContact };
