import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Dna } from 'react-loader-spinner';
import { ContactList } from 'components/ContactsList/ContactsList.jsx';
import { ContactForm } from '../ContactForm/ContactForm.jsx';
import { Container, Title } from './App.styled.js';
import { ContactFilter } from '../ContactFilter/ContactFilter.jsx';
import { selectError, selectIsLoading } from 'redux/selectors.js';
import { getContactsThunk } from 'redux/operations.js';

export const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      <Title>Contacts</Title>
      <ContactFilter />
      {isLoading && <Dna />}
      {error && <p>Error- {error}</p>}

      <ContactList />
    </Container>
  );
};
