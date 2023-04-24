import axios from 'axios';

axios.defaults.baseURL =
  'https://643a7540bd3623f1b9b3cb6f.mockapi.io/contacts/';

export const getContacts = async () => {
  try {
    const result = await axios.get('/contacts');

    return result;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const addContact = async newContact => {
  try {
    const result = await axios.post('/contacts', newContact);

    return result.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const removeContact = async id => {
  try {
    const result = await axios.delete(`/contacts/${id}`);

    return result.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
