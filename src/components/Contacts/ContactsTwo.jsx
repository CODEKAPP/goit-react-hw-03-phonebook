import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { DivContainerSection, DivContainerPhonebook } from './Styles/DivStyles';
import { StyledH2 } from './Styles/TitleStyles';
import { toast } from 'react-hot-toast';

export class ContactsTwo extends Component {
  state = {
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.props;
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      // alert(`${newContact.name} is already in contacts.`);
      toast.error(`${newContact.name} is already in contacts.`);
    } else {
      this.props.setContacts([...contacts, newContact]);
      toast.success(`${newContact.name} has been added to contacts.`);
    }
  };

  deleteContact = id => {
    const { contacts, setContacts } = this.props;
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts } = this.props;
    const { filter } = this.state;

    return (
      <DivContainerSection className="test">
        <DivContainerPhonebook>
          <ContactForm addContact={this.addContact} />

          <StyledH2>Contacts Two</StyledH2>
          <Filter filter={filter} setFilter={this.handleFilterChange} />
          <ContactList
            contacts={contacts}
            filter={filter}
            deleteContact={this.deleteContact}
          />
        </DivContainerPhonebook>
      </DivContainerSection>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.contacts !== this.props.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    }
  }
}
