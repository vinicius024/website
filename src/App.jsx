import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';


function App() {

  return (
    <Router>
      <Routes>
          <Route element={<Home/>} path="/" exact/>
          <Route element={<Sobre/>} path="/Sobre" exact/>
          <Route element={<Projetos/>} path="/Projetos"/>
          <Route element={<Contato/>} path="/Contato"/>
      </Routes>
    </Router>
  )
}

export default App
