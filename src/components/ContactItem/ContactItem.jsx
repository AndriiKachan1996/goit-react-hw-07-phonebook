import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Btn, Li, Name, Num } from './ContactItem.styled';
import { deleteContactThunk } from 'redux/operations';

export const ContactItem = ({ contact }) => {
  const { name, phone, id } = contact;
  // console.log(name, phone, id);

  const dispatch = useDispatch();
  const heandleClickDell = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <>
      <Li>
        <Name>{name}:</Name>
        <Num>{phone}</Num>
        <Btn
          type="button"
          onClick={() => {
            heandleClickDell(id);
          }}
        >
          delete
        </Btn>
      </Li>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
