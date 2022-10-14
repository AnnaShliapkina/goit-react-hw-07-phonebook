import PropTypes from 'prop-types';
import { List } from './ContactList.styled.jsx';
import { ContactCard } from '../ContactCard/ContactCard';

import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsApi';

import { useSelector } from 'react-redux';

const ContactList = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filterValue = useSelector(state => state.filter);

  const filterContcts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <List>
      {!isLoading &&
        filterContcts.reverse().map(({ name, id, phone }) => {
          return (
            <ContactCard
              key={id}
              id={id}
              name={name}
              phone={phone}
              onDeleteButton={() => deleteContact(id)}
            />
          );
        })}
    </List>
  );
};

ContactList.prototypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  onDeleleButton: PropTypes.func.isRequired,
};

export default ContactList;
