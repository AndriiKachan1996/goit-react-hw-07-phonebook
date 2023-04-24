import { useDispatch } from 'react-redux';
import { Btn, Li, Name, Num } from './ContactItem.styled';
import { deleteContactThank } from 'redux/operations';

export const ContactItem = ({ contact }) => {
  const { name, phone, id } = contact;
  const dispatch = useDispatch();
  const heandleClickDell = id => {
    dispatch(deleteContactThank(id));
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

// ContactItem.propTypes = {
//   contact: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//   }),
// };
