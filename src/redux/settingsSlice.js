import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './operations';

export const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

export const arrOfThunks = [
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
];

export const typingThunk = type => arrOfThunks.map(tunk => tunk[type]);

export const handlePending = state => {
  state.contacts.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

export const handleFulfilled = state => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

export const handleFulfilledGet = (state, { payload }) => {
  state.contacts.items = payload;
};

export const handleAddContactFulfilled = (state, { payload }) => {
  state.contacts.items = [...state.contacts.items, payload];
};

export const handleRemoveContactFulfilled = (state, { payload }) => {
  const index = state.contacts.items.findIndex(item => item.id === payload.id);
  state.contacts.items.splice(index, 1);
};
