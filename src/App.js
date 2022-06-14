import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Switch from './Switch';

function App() {
  console.log('App');
  const [page, setPage] = useState(0);
  const [name, setName] = useState('');
  const [nextPage, setNextPage] = useState(0);

  const allPages = {
    1: Page1,
    2: Page2,
  };

  function NextBtn() {
    let currentPage = parseInt(page);
    let nextPage = currentPage + 1;
    // setNextPage(nextPage);
    setPage(nextPage);
    console.log('page num is:' + nextPage);
  }

  function PrevBtn() {
    let currentPage = parseInt(page);
    let prevPage = currentPage - 1;
    let pageName = 'Page' + prevPage;
    const pageComp = allPages[pageName];
    setPage(prevPage);
  }

  function pullName() {}

  useEffect(() => {
    console.log('useEffect - App');
    setPage(1);
  }, []);

  return (
    <div className='App'>
      <Switch page={page} />
      <div className='div-first-page'>
        {page > 1 && <button onClick={PrevBtn}>Prev</button>}
        <p>{page}/3</p>
        <button onClick={NextBtn}>Next</button>
      </div>
    </div>
  );
}

export default App;
