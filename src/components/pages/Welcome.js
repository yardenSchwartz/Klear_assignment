import '../../App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from '../../redux/name';

function Welcome() {
  console.log('Page1');
  const { name } = useSelector((state) => state.name);
  const dispatch = useDispatch();

  function handleChange(event) {
    const input = event.target;
    const value = input.value;
    dispatch(setName(value));
  }

  return (
    <div className='App'>
      <p>Welcome!</p>
      <p>How should we call you?</p>
      <input
        type='text'
        id='lname'
        placeholder='Name'
        onChange={handleChange}
        value={name}
      />
    </div>
  );
}

export default Welcome;
