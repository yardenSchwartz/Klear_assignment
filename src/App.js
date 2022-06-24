import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './redux/store';
import './App.css';
import { nextPage, prevPage } from './redux/page';
import Welcome from './components/pages/Welcome';
import Experties from './components/pages/Experties';
import Brands from './components/pages/Brands';

const ArrayListOfPages = [Welcome, Experties, Brands];

const App = () => {
  const { page } = useSelector((state) => state.page);
  const { name } = useSelector((state) => state.name);

  const dispatch = useDispatch();

  const RenderPage = () => {
    const component = ArrayListOfPages[page - 1];
    return React.createElement(component);
  };

  return (
    <Provider store={store}>
      {RenderPage()}
      <div className='div-button'>
        {page > 1 && <button onClick={() => dispatch(prevPage())}>Prev</button>}
        <h4>
          {page}/{ArrayListOfPages.length}
        </h4>
        {page === ArrayListOfPages.length ? (
          <button>Finish </button>
        ) : (
          <button disabled={name === ''} onClick={() => dispatch(nextPage())}>
            Next
          </button>
        )}
      </div>
    </Provider>
  );
};

export default App;
