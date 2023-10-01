import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleDeleteClick = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            style={{
              margin: '9px',
              backgroundColor: '#2874A6',
              color: '#fff',
              padding: '5px 8px',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
            }}
            onClick={() => handleDeleteClick(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
