import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Paginas
import Home from './pages/Home';
import Play from './pages/Play'
// import Home from './components/Home';
import './App.css'
import './pages/Play'

function App() {
  console.log("este es un print desde el app.jsx")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Play" element={<Play/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
