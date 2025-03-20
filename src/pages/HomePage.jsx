import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ButtonRed from '../components/buttons/buttonRed';
import PlayerCard from '../components/Home/PlayerCard';
import ladymarianImage from '../assets/ladymarian.png';
import fondo from '../assets/Ia/fondoMolino.png';
import sherwoodAlpha from '../assets/SherwoodVersion/sherwoodAlpha.png';
import Home from '../components/Home';
import Play from './Play';

function HomePage() {
    return (
        <div
            className="flex flex-col min-h-2/4 w-auto bg-fixed bg-neutral-950"
            // style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex w-full">
                <div className="w-58"> {/* Ancho fijo para el Sidebar. Ajusta según necesidad */}
                    <Sidebar />
                </div>
                <div className="flex flex-col flex-grow">
                    <Header />
                    <Home />
                    <Footer />
                </div>
            </div>
        </div>
    );
}
export default HomePage;