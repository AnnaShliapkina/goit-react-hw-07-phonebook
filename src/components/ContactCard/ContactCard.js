// import PropTypes from 'prop-types';
import { ContactCards, Name, Number, DeleteBtn } from './ContactCard.styled';

export const ContactCard = ({ name, phone, id, onDeleteButton }) => {
  return (
    <ContactCards>
      <Name>{name}</Name>
      <Number>{phone}</Number>
      <DeleteBtn type="button" id={id} onClick={onDeleteButton}>
        Delete
      </DeleteBtn>
    </ContactCards>
  );
};

// ContactCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   onDeleteButton: PropTypes.func,
// };
