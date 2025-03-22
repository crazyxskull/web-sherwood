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
import fondo2 from '../assets/fondoMedieval.jpg'
import Home from '../components/Home';
import Play from './Play';

function HomePage() {
    return (
        <div
            className="flex flex-col min-h-screen w-auto bg-fixed bg-neutral-950"
            // style={{ backgroundImage: `url(${fondo2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex w-full">
                <div className="w-58"> {/* Ancho fijo para el Sidebar. Ajusta según necesidad */}
                    <Sidebar />
                </div>
                <div className="flex flex-col flex-grow">
                    <Header class="z-50"/>
                    <Home />
                    <Footer class="z-50"/>
                </div>
            </div>
        </div>
    );
}
export default HomePage;