import '../../App.css';
import React, { useState } from 'react';
import { addToBrands } from '../../redux/brands';
import { useSelector, useDispatch } from 'react-redux';

function Brands() {
  console.log('Page3');
  const [currentBrand, setCurrentBrand] = useState('');
  const { brandsList } = useSelector((state) => state.brands);
  const dispatch = useDispatch();

  function handleChange(event) {
    setCurrentBrand(event.target.value);
  }

  function handleOnClick(event) {
    event.preventDefault();
    dispatch(addToBrands(currentBrand));
    setCurrentBrand('');
  }

  return (
    <div className='App'>
      <h1>One last thing</h1>
      <p>Have you collaborated with brands in the past?</p>
      <div>
        <input
          type='text'
          id='lBrandName'
          placeholder='Enter Brand Name'
          onChange={handleChange}
          value={currentBrand}
        />
        <button disabled={currentBrand === ''} onClick={handleOnClick}>
          Add
        </button>
      </div>
      <div>
        {brandsList.length > 0 && brandsList.map((x, i) => <p key={i}>@{x}</p>)}
      </div>
    </div>
  );
}

export default Brands;
