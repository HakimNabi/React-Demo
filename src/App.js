
import './App.css';
import React from 'react';


import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>

    </>
  );
}

export default App;
