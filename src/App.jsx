import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Paginas
import HomePage from './pages/HomePage';
import Play from './pages/Play';
import AuthPage from './pages/AuthPage';
import Profile from './pages/Profile'
import Registro from './components/Registro';
// import Home from './components/Home';
import './App.css'

function App() {
  console.log("este es un print desde el app.jsx")
  return (
    <BrowserRouter basename="/web-sherwood/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AuthPage" element={<AuthPage />} />
        <Route path="/Profile" element={<Profile />} />
        {/* <Route path="/Registro" element={<Registro />} /> */}
        <Route path="/Play" element={<Play/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;