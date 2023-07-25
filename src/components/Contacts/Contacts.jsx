// Contacts.jsx
import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { DivContainerSection, DivContainerPhonebook } from './Styles/DivStyles';
import { StyledH2 } from './Styles/TitleStyles';
import { toast } from 'react-hot-toast';

class Contacts extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = newContact => {
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      toast.error(`${newContact.name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));

      toast.success(`${newContact.name} has been added to contacts.`);
    }
  };

  deleteContact = id => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: updatedContacts });
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <DivContainerSection className="test">
        <DivContainerPhonebook>
          <ContactForm addContact={this.addContact} />

          <StyledH2>Contacts</StyledH2>
          <Filter filter={filter} setFilter={this.handleFilterChange} />
          <ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </DivContainerPhonebook>
      </DivContainerSection>
    );
  }
}

export default Contacts;
