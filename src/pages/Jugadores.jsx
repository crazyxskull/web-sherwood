import React from 'react'
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import ButtonRed from '../components/buttons/buttonRed';
import PlayerCard from '../components/Home/PlayerCard';
import ladymarianImage from '../assets/ladymarian2.png';
import fondoWar from '../assets/Ia/WarSherwood.png';
import fondoMedieval from '../assets/fondoMedieval.jpg';
import sherwoodAlpha from '../assets/SherwoodVersion/sherwoodAlpha.png';
import Home from '../components/Home/Home';
import UserCard from '../components/User/UserCard';
import { FaSearch } from 'react-icons/fa';

const Jugadores = () => {
    return (
        <div
            className="flex flex-col min-h-screen w-full bg-fixed"
            style={{ backgroundImage: `url(${fondoWar})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="">
                <div class="flex flex-col justify-start items-center border-piedra bg-neutral-950/80">
                    <h1 class="flex font-PerrygothicRegular text-shadow text-4xl text-textSherwood">Jugadores</h1>
                </div>

                <div class=" flex w-full min-w-[200px] justify-between p-4">
                    <div className="flex space-x-4 items-center justify-end">
                        <select
                            className="flex items-center gap-2 rounded-lg py-2 bg-white px-6 text-xs font-TrajanProBold font-semibold  "
                        // onChange={(e) => setTipoUsuario(e.target.value)}
                        >
                            <option value="">Tipo de Usuario</option>
                            <option value="admin">Administrador</option>
                            <option value="editor">Editor</option>
                            <option value="visualizador">Visualizador</option>
                        </select>

                        <div className="sm:flex relative hidden">
                            {/* <BuscarUsuario className="w-full md:max-w-xs" searchTerm={searchTerm} onSearchChange={setSearchTerm} /> */}
                        </div>
                    </div>
                    <div class="relative flex items-center  bg-white text-gray-900 text-sm rounded-2xl">
                        <input
                            class="w-full  pr-3 pl-3 py-2  transition duration-300 ease focus:outline-none focus:border-slate-300"
                            placeholder="Busqueda....." />
                        <button
                            class="rounded-2xl  ml-2  p-2.5 text-sm text-slate-700 transition hover:bg-slate-300"
                            type="button">
                            <FaSearch class="h-5 w-auto" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="w-full grid grid-cols-2 p-6 gap-6">
                <PlayerCard />
            </div>
        </div>
    )
}

export default Jugadores