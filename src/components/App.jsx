import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

function App() {
  return (
    <div>
      <h1 style={{ color: '#2874A6' }}>Phonebook</h1>
      <ContactForm />

      <h2 style={{ color: '#2874A6' }}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
