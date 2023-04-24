import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './operations';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrOfThunks = [addContactThunk, deleteContactThunk, getContactsThunk];

const typingThunk = type => arrOfThunks.map(tunk => tunk[type]);

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const handleFulfilled = state => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

const handleFulfilledGet = (state, { payload }) => {
  state.contacts.items = payload;
};

const handleAddContactFulfilled = (state, { payload }) => {
  state.contacts.items = [...state.contacts.items, payload];
};

const handleRemoveContactFulfilled = (state, { payload }) => {
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
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder

      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)

      .addCase(addContactThunk.fulfilled, handleAddContactFulfilled)

      .addCase(deleteContactThunk.fulfilled, handleRemoveContactFulfilled)

      .addMatcher(isAnyOf(...typingThunk(PENDING)), handlePending)
      .addMatcher(isAnyOf(...typingThunk(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...typingThunk(REJECTED)), handleRejected);
  },
});

export const { setFilter } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
