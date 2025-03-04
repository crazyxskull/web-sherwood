import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Paginas
import Home from './pages/Home';

// import Home from './components/Home';
import './App.css'

function App() {
  console.log("este es un print desde el app.jsx")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
