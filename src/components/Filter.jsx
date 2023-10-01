import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/contactSlice';

function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      Filter by name:
      <input type="text" value={filter} onChange={handleFilterChange} />
    </label>
  );
}

export default Filter;
