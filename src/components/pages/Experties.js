import '../../App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsChecked } from '../../redux/expertises';

function Experties() {
  console.log('Page2');
  const { expertiesList } = useSelector((state) => state.experties);
  const { name } = useSelector((state) => state.name);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setIsChecked(e.target.value));
  };

  return (
    <div className='App'>
      <h1>Hi {name} !</h1>
      <p>what are your expertise?</p>
      <div
        className='experiseCB'
        style={{ paddingTop: '20px', paddingBottom: '10px' }}
      >
        {expertiesList && expertiesList.map((x, i) => console.log(x))}
        {expertiesList.map((x, i) => (
          <label key={i}>
            <input
              type='checkbox'
              name='lang'
              value={x.value}
              onChange={handleChange}
              checked={x.checked}
            />{' '}
            {x.value}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Experties;
