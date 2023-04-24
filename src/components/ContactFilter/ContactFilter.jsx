import { useDispatch, useSelector } from 'react-redux';
import { Container, Input } from './ContactFilter';

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
      <Input value={filter} onChange={handleChangeInput}></Input>
    </Container>
  );
};