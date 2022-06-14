import './App.css';
import React, { useState } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

function Switch(props) {
  console.log('Switch');
  const [name, setName] = useState('');

  function updateName(data) {
    setName(data);
  }

  return (
    <div className='Switch'>
      {(() => {
        switch (props.page) {
          case 1:
            return <Page1 name={name} updateName={updateName} />;
          case 2:
            return <Page2 name={name} />;
          case 3:
            return <Page3 name={name} />;
          default:
            return <Page1 name={name} updateName={updateName} />;
        }
      })()}
    </div>
  );
}

export default Switch;
