//ContactForm.jsx
import React, { useState } from 'react';
import { FormStyleContainer } from './Styles/FormStyles';
import { InputStyle } from './Styles/InputStyle';
import { ButtonAdd } from './Styles/ButtonStyles';
import { LabelStyle } from './Styles/LabelStyle';
import { StyledH1 } from './Styles/TitleStyles';


const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    nameValid: false,
    numberValid: false,
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();
    const isValid = trimmedValue.length >= (name === 'name' ? 3 : 4);

    setFormData(prevState => ({
      ...prevState,
      [name]: trimmedValue,
      [`${name}Valid`]: isValid,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number, nameValid, numberValid } = formData;

    if (nameValid && numberValid) {
      const newContact = {
        id: Math.random().toString(36).substr(2, 9),
        name: name,
        number: number,
      };

      addContact(newContact);
      setFormData({
        name: '',
        number: '',
        nameValid: false,
        numberValid: false,
      });
    }
  };

  return (
    <>
      <StyledH1>Phonebook</StyledH1>
      <FormStyleContainer onSubmit={handleSubmit}>
        <LabelStyle htmlFor="name">Name</LabelStyle>
        <InputStyle
          type="text"
          name="name"
          placeholder="Monkey D'Luffy"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="El nombre puede contener solo letras, apóstrofe, guión y espacios. Por ejemplo Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={formData.name}
          onChange={handleInputChange}
          // value={name}
          // onChange={handleNameChange}
        />

        <LabelStyle htmlFor="number">Number</LabelStyle>
        <InputStyle
          type="tel"
          name="number"
          placeholder="+57 123 456 4565"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Número no válido. El número de teléfono debe ser dígitos y puede contener espacios, guiones, paréntesis y puede comenzar con +."
          required
          value={formData.number}
          onChange={handleInputChange}
          disabled={!formData.nameValid}
          // value={number}
          // onChange={handleNumberChange}
          // disabled={!nameValid}
        />

        <ButtonAdd type="submit" disabled={!formData.numberValid}>
          {/* <ButtonAdd type="submit" disabled={!numberValid}> */}
          Add Contact
        </ButtonAdd>
      </FormStyleContainer>
    </>
  );
};

export default ContactForm;
