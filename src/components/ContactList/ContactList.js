// import PropTypes from 'prop-types';
import { List } from './ContactList.styled.jsx';
import { ContactCard } from '../ContactCard/ContactCard';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectedContacts,
  deleteContact,
  selectedFilter,
} from 'redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(selectedContacts);
  const filter = useSelector(selectedFilter);
  const dispatch = useDispatch();

  const filterContactList = () => {
    const normalizedValue = filter.toLowerCase();
    console.log(contacts);

    return contacts.filter(contact =>
      contact.name?.toLowerCase().includes(normalizedValue)
    );
  };

  return (
    <List>
      {filterContactList().map(({ name, id, number }) => {
        return (
          <ContactCard
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteButton={() => dispatch(deleteContact(id))}
          />
        );
      })}
    </List>
  );
};

// ContactList.prototypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleleButton: PropTypes.func.isRequired,
// };
