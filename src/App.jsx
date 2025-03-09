import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Paginas
import Home from './pages/Home';
import Play from './pages/Play';
import AuthPage from './pages/AuthPage';
import Registro from './components/Registro';
// import Home from './components/Home';
import './App.css'

function App() {
  console.log("este es un print desde el app.jsx")
  return (
    <BrowserRouter basename="/web-sherwood">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AuthPage" element={<AuthPage />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Play" element={<Play/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;