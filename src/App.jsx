import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Paginas
import HomePage from './pages/HomePage';
// import Login from './pages/Login';
import Play from './pages/Play';
import AuthPage from './pages/AuthPage';
import Profile from './pages/Profile';
import SherwoodMetaverse from './pages/SherwoodMetaverse';
import Clanes from './pages/Clanes';
import Tutorial from './pages/Tutorial';
import Descargas from './pages/Descargas';
import Jugadores from './pages/Jugadores';
import Sugerencias from './pages/Sugerencias';
// import Registro from './components/Registro';

import './App.css'

function App() {
  console.log("este es un print desde el app.jsx")
  return (
    <BrowserRouter basename="/web-sherwood/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        <Route path="/AuthPage" element={<AuthPage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/SherwoodMetaverse" element={<SherwoodMetaverse />} />
        <Route path="/Clanes" element={<Clanes />} />
        <Route path="/Tutorial" element={<Tutorial />} />
        <Route path="/Descargas" element={<Descargas />} />
        <Route path="/Jugadores" element={<Jugadores />} />
        <Route path="/Sugerencias" element={<Sugerencias />} />
        {/* <Route path="/Registro" element={<Registro />} /> */}
        <Route path="/Play" element={<Play/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;