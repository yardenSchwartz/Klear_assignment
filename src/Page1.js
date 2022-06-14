import './App.css';
import React, { useState } from 'react';

function Page1(props) {
  console.log('Page1');

  function handleChange(event) {
    const input = event.target;
    const value = input.value;
    props.updateName(value);
  }

  return (
    <div className='App'>
      <p>Welcome!</p>
      <p>How should we call you?</p>
      <div>
        <input
          type='text'
          id='lname'
          placeholder='Name'
          onChange={handleChange}
          value={props.name}
        />
      </div>
    </div>
  );
}

export default Page1;
