import { createSlice } from '@reduxjs/toolkit';

import {
  handlePending,
  handleRejected,
  handlefulfilled,
  handlefulfilledAdd,
  handlefulfilledDel,
  handlefulfilledFetch,
} from 'helper/functions/functions';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handlefulfilledFetch)
      .addCase(addContact.fulfilled, handlefulfilledAdd)
      .addCase(deleteContact.fulfilled, handlefulfilledDel)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('fulfilled'), handlefulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
