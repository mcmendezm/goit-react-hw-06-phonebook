import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/contactSlice';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

function App() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    dispatch(addContact({ id: generateUniqueId(), name, number }));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const generateUniqueId = () => {
    return Date.now().toString();
  };

  return (
    <div>
      <h1 style={{ color: '#2874A6' }}>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />

      <h2 style={{ color: '#2874A6' }}>Contacts</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList onDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default App;
