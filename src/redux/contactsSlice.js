import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThank,
  getContactsThunk,
} from './operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = payload;
};

const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const handleAddContactFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = [...state.contacts.items, payload];
};

const handleRemoveContactFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  const index = state.contacts.items.findIndex(item => item.id === payload.id);

  state.contacts.items.splice(index, 1);
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(getContactsThunk.rejected, handleRejected)

      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, handleAddContactFulfilled)
      .addCase(addContactThunk.rejected, handleRejected)

      .addCase(deleteContactThank.pending, handlePending)
      .addCase(deleteContactThank.fulfilled, handleRemoveContactFulfilled)
      .addCase(deleteContactThank.rejected, handleRejected);
  },
});

export const { setFilter } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
