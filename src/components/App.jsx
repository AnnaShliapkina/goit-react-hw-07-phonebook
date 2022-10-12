// import React, { useState, useRef, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { SectionRender } from './Section/Section';
import { useSelector } from 'react-redux';
import { selectedContacts } from 'redux/contactSlice';

export const App = () => {
  const contacts = useSelector(selectedContacts);

  return (
    <SectionRender>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />

      {contacts.length > 0 ? (
        <>
          <ContactList />
        </>
      ) : (
        <p>Contact list is empty</p>
      )}
    </SectionRender>
  );
};
