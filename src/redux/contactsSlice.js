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
  handlefullfilledAdd,
  handlefullfilledClear,
  handlefullfilledDel,
  handlefullfilledFetch,
  handlefullfilledUpdate,
} from 'helper/functions/functions';
import {
  addContact,
  clearContacts,
  deleteContact,
  fetchContacts,
  updateContact,
} from 'redux/contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  // showModal: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    toggleOk(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items[index].selected = !state.items[index].selected;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handlefullfilledFetch)
      .addCase(addContact.fulfilled, handlefullfilledAdd)
      .addCase(deleteContact.fulfilled, handlefullfilledDel)
      .addCase(updateContact.fulfilled, handlefullfilledUpdate)
      .addCase(clearContacts.fulfilled, handlefullfilledClear)
      .addMatcher(
        isPending(
          fetchContacts,
          addContact,
          deleteContact,
          updateContact,
          clearContacts
        ),
        handlePending
      )
      .addMatcher(
        isRejected(
          fetchContacts,
          addContact,
          deleteContact,
          updateContact,
          clearContacts
        ),
        handleRejected
      )
      .addMatcher(
        isFulfilled(
          fetchContacts,
          addContact,
          deleteContact,
          updateContact,
          clearContacts
        ),
        handlefulfilled
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { toggleOk } = contactsSlice.actions;
