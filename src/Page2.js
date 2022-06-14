import './App.css';
import React, { useState } from 'react';

const expertiseList = [
  { value: 'LifeStyle', label: 'LifeStyle' },
  { value: 'Beauty', label: 'Beauty' },
  { value: 'Food', label: 'Food' },
];

function Page2(props) {
  console.log('Page2');
  const [selectedList, setSelectedList] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedList((prev) => [...prev, value]);
    } else {
      setSelectedList((prev) => prev.filter((x) => x !== value));
    }
  };

  function isChecked(e) {
    console.log(e.value);
    if (selectedList.includes(e.value)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className='App'>
      <h1>Hi {props.name} !</h1>
      <p>what are your expertise?</p>
      <div
        className='experiseCB'
        style={{ paddingTop: '20px', paddingBottom: '10px' }}
      >
        {expertiseList.map((x, i) => (
          <label key={i}>
            <input
              type='checkbox'
              name='lang'
              value={x.value}
              onChange={handleChange}
              checkd={isChecked}
            />{' '}
            {x.label}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Page2;
