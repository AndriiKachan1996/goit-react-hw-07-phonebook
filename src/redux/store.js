import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './contactsSlice';

export const store = configureStore({
  reducer: { phonebook: phonebookReducer },
});
