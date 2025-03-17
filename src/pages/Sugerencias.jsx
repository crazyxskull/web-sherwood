import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ButtonRed from '../components/buttons/buttonRed';
import PlayerCard from '../components/Home/PlayerCard';
import ladymarianImage from '../assets/ladymarian.png';
import sherwoodAlpha from '../assets/SherwoodVersion/sherwoodAlpha.png';
import Home from '../components/Home';
import Play from './Play';

const Sugerencias = () => {
    return (
        <div
            className="flex flex-col min-h-screen w-full bg-fixed"
            style={{ backgroundImage: `url(${ladymarianImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex w-full">
                <div className="w-58"> {/* Ancho fijo para el Sidebar. Ajusta según necesidad */}
                    <Sidebar />
                </div>
                <div className="flex flex-col flex-grow  items-center">
                    <Header />
                    <div className="flex w-2/5 h-3/4 flex-col border-sherwood bg-amber-50 rounded-lg shadow-xl my-12">
                        <div className="text-gray-900 font-TrajanProBold p-4">
                            <h2 className="text-xl mb-4 text-center">Alguna sugerencia para mi humilde pagina? xd</h2>
                            <input/>
                            <ul className="list-none">
                                <li
                                    // key={index}
                                    className="py-2 border-b border-gray-300 last:border-b-0">
                                    <a
                                        // href={descarga.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 font-semibold"
                                    >
                                        caca
                                    </a>
                                    <p className="text-gray-700 text-sm">popo</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>

    )
}

export default Sugerencias