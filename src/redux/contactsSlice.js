import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './operations';
import {
  STATUS,
  handleAddContactFulfilled,
  handleFulfilled,
  handleFulfilledGet,
  handlePending,
  handleRejected,
  handleRemoveContactFulfilled,
  typingThunk,
} from './settingsSlice';

import { initialState } from './initialState';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
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
