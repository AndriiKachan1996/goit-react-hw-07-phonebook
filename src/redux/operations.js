import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  removeContact,
} from '..//service/contactsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getContacts();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await addContact(newContact);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (ContactID, thunkAPI) => {
    try {
      const response = await removeContact(ContactID);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
