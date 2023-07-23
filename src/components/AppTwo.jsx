import React, { Component } from 'react';
import { DivContainer } from './Contacts/Styles/DivStyles';
import {ContactsTwo} from './Contacts/ContactsTwo';
import { Toaster } from 'react-hot-toast';

export class AppTwo extends Component {
  // Función para cargar los contactos desde localStorage
  loadContactsFromLocalStorage() {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    return storedContacts || [];
  }

  state = {
    contacts: this.loadContactsFromLocalStorage(),
  };

  render() {
    const { contacts } = this.state;

    return (
      <section>
        <DivContainer>
          <ContactsTwo contacts={contacts} setContacts={this.setContacts} />
        </DivContainer>
        <Toaster />
      </section>
    );
  }

  setContacts = newContacts => {
    this.setState({ contacts: newContacts });
  };

  componentDidMount() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
}
