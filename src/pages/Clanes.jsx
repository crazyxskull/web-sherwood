import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ladymarianImage from '../assets/ladymarian.png';
import fondoMedieval from '../assets/fondoMedieval.jpg';
import clanSH from '../assets/clanes/SH_Logo.png';
import clanDM from '../assets/clanes/logoDM.webp'
import { FaSearch } from 'react-icons/fa';
import ClanCard from '../components/Clan/ClanCard';
import ButtonBrown from '../components/buttons/buttonbrown';

const Clanes = () => {
    return (
        <div
            className="flex flex-col min-h-screen w-full bg-fixed "
            style={{ backgroundImage: `url(${fondoMedieval})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex w-full bg-gray-950/20">
                <div className="w-58"> {/* Ancho fijo para el Sidebar. Ajusta según necesidad */}
                    <Sidebar />
                </div>
                <div className="flex flex-col flex-grow">
                    <Header />
                    <div className="flex flex-col ">
                        <div class="flex flex-col justify-start items-center border-piedra  bg-neutral-950/80 ">
                            {/* <h1 className="mb-4 py-4 text-4xl
                            bg-redSherwood hover:bg-redSherwood-500 text-white font-QuadrataOst px-4 border-b-4
                            hover:border-redSherwood-hov rounded border-redSherwood-800 transition duration-150 hover:scale-105">CLANES</h1> */}
                            <h1 class="flex font-PerrygothicRegular text-shadow text-4xl text-textSherwood">Clanes</h1>
                            <p className="flex font-medium text-gray-300 px-4 text-center">
                                Un clan es una agrupación de personas con fines comunes para formar una entidad (normalmente militar) para defender terreno, ideales, etc. Los clanes siempre llevan iniciales para identificarse
                            </p>
                        </div>

                        <div class=" flex w-full min-w-[200px] justify-between p-6">
                            <div>
                                <ButtonBrown text="Crear Clan" />
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
                        <div class="grid grid-cols-1 w-full p-2  ">
                            <ClanCard />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Clanes