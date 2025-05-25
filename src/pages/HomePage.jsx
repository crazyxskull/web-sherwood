import React from 'react';
// import Header from '../components/layout/Header';
// import Sidebar from '../components/layout/Sidebar';
// import Footer from '../components/layout/Footer';
// import { Link } from 'react-router-dom';
// import ButtonRed from '../components/buttons/buttonRed';
// import PlayerCard from '../components/Home/PlayerCard';
import ladymarianImage from '../assets/ladymarian.png';
// import fondo from '../assets/Ia/fondoMolino.png';
// import fondoCastle from '../assets/Ia/SherwoodCastle.png'
// import fondoCrazy from '../assets/Ia/crazyvsDragon.png'
// import sherwoodAlpha from '../assets/SherwoodVersion/sherwoodAlpha.png';
// import fondo2 from '../assets/fondoMedieval.jpg'
import Home from '../components/Home/Home';
import Play from './Play';

function HomePage() {
    return (
        <div
            className="flex flex-col min-h-screen w-auto bg-fixed bg-neutral-950"
            style={{ backgroundImage: `url(${ladymarianImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <Home />
        </div>
    );
}
export default HomePage;