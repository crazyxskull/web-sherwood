import React from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ButtonRed from '../components/buttons/buttonRed';
import PlayerCard from '../components/Home/PlayerCard';
import ladymarianImage from '../assets/ladymarian2.png';
import sherwoodAlpha from '../assets/SherwoodVersion/sherwoodAlpha.png';
import Home from '../components/Home';
import UserCard from '../components/User/UserCard';
import { FaSearch } from 'react-icons/fa';

const Jugadores = () => {
    return (
        <div
            className="flex flex-col min-h-screen w-full bg-fixed"
            style={{ backgroundImage: `url(${ladymarianImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex w-full">
                <div className="w-58"> {/* Ancho fijo para el Sidebar. Ajusta según necesidad */}
                    <Sidebar />
                </div>
                <div className="flex flex-col flex-grow">
                    <Header />
                    <div className="flex flex-col ">
                        <div class="flex flex-col justify-start items-center border-piedra bg-neutral-950">
                            <h1 class="flex font-bold text-2xl font-TrajanProBold text-redSherwood-700">JUGADORES</h1>
                        </div>

                        <div class=" flex w-full min-w-[200px] justify-between">
                            <div className="flex space-x-4 items-center justify-end">
                                <select
                                    className="flex items-center gap-2 rounded-lg py-2 bg-neutral-900 px-6 text-xs font-TrajanProBold font-semibold text-white "
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
                            <div class="flex items-center gap-2 rounded-lg py-1 bg-neutral-900 px-6 text-xs font-TrajanProBold font-semibold text-white">
                                <input
                                    class="w-full  pr-3 pl-3 py-1  transition duration-300 ease focus:outline-none focus:border-slate-300"
                                    placeholder="Busqueda....." />
                                <button
                                    class="rounded-2xl  ml-2  p-2.5 text-sm text-white transition hover:bg-slate-700"
                                    type="button">
                                    <FaSearch class="h-5 w-auto" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 p-6 gap-6">
                    <UserCard />
                        {/* <PlayerCard />
                       
                        <PlayerCard />
                        <UserCard />
                        <PlayerCard />
                        <PlayerCard /> */}
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Jugadores