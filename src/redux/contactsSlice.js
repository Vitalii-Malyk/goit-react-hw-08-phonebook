import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import {
  handlePending,
  handleRejected,
  handlefulfilled,
  handlefulfilledAdd,
  handlefulfilledDel,
  handlefulfilledFetch,
} from 'helper/functions/functions';
import { addContact, deleteContact, fetchContacts } from './authOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  // showModal: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handlefulfilledFetch)
      .addCase(addContact.fulfilled, handlefulfilledAdd)
      .addCase(deleteContact.fulfilled, handlefulfilledDel)
      .addMatcher(
        isPending(fetchContacts, addContact, deleteContact),
        handlePending
      )
      .addMatcher(
        isRejected(fetchContacts, addContact, deleteContact),
        handleRejected
      )
      .addMatcher(
        isFulfilled(fetchContacts, addContact, deleteContact),
        handlefulfilled
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
