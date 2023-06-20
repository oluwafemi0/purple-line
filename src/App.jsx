import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Page from './components/Page/Page';
import Home from './components/Page/Home'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Page />} />
        <Route path='/dash' element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
