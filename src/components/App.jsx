//app.jsx
import React, { useState } from 'react'; // Importa useState
import { DivContainer } from './Contacts/Styles/DivStyles';
import Contacts from './Contacts/Contacts';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  // Función para cargar los contactos desde localStorage
  const loadContactsFromLocalStorage = () => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    return storedContacts || [];
  };

  const [contacts, setContacts] = useState(loadContactsFromLocalStorage());

  return (
    <section>
      <DivContainer>
        <Contacts contacts={contacts} setContacts={setContacts} />{' '}
        {/* Pasamos contacts y setContacts como props */}
      </DivContainer>
      <Toaster />
    </section>
  );
};
