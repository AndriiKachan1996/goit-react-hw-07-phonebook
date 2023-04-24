import { useDispatch, useSelector } from 'react-redux';
import { Container, Input, Title } from './ContactFilter';

import { setFilter } from '..//..//redux/contactsSlice';
import { selectFilter } from '../../redux/selectors';

export const ContactFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeInput = ({ currentTarget }) => {
    dispatch(setFilter(currentTarget.value));
  };

  return (
    <Container>
      <Title>Find contact by name</Title>
      <Input value={filter} onChange={handleChangeInput}></Input>
    </Container>
  );
};
