// ContactsList.jsx
import React from 'react';
import { DeleteButton } from './Styles/ButtonStyles';
import { ListStyle, ItemList } from './Styles/ListStyle';


const ContactList = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ListStyle>
      {filteredContacts.map(contact => (
        <ItemList key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => deleteContact(contact.id)}>Delete</DeleteButton>
        </ItemList>
      ))}

    </ListStyle>
  );
};

export default ContactList;
