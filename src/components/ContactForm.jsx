import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactSlice';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const nameExists = contacts.some(contact => contact.name === name);

    if (nameExists) {
      alert(
        'El nombre ya existe en la lista de contactos. Por favor, elige otro nombre.'
      );
    } else {
      dispatch(addContact({ id: generateUniqueId(), name, number }));
      setName('');
      setNumber('');
    }
  };

  const generateUniqueId = () => {
    return Date.now().toString();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </label>
      <br />
      <label>
        Number:
        <input
          style={{ margin: '9px' }}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button
        type="submit"
        style={{
          margin: '9px',
          backgroundColor: '#2874A6',
          color: '#fff',
          padding: '5px 8px',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
        }}
      >
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
