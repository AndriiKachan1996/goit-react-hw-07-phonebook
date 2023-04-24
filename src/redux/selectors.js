export const selectContacts = state => state.phonebook.contacts.items;

export const selectFilter = state => state.phonebook.filter;

export const selectIsLoading = state => state.phonebook.contacts.isLoading;

export const selectError = state => state.phonebook.contacts.error;

export const selectFilteredContacts = state => {
  const filterNormalize = state.phonebook.filter.toLocaleLowerCase();

  return state.phonebook.contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(filterNormalize)
  );
};
