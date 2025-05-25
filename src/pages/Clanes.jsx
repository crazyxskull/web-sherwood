import { useState } from 'react';
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ladymarianImage from '../assets/ladymarian.png';
import fondoMedieval from '../assets/fondoMedieval.jpg';
import fondoWar from '../assets/Ia/WarSherwood.png';
import clanSH from '../assets/clanes/SH_Logo.png';
import clanDM from '../assets/clanes/logoDM.webp'
import { FaSearch } from 'react-icons/fa';
import ClanCard from '../components/Clan/ClanCard';
import ButtonBrown from '../components/buttons/buttonbrown';
import AgregarClan from '../components/Clan/AgregarClan';
import ClanInfoModal from '../components/Clan/ClanInfoModal';

const Clanes = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedClan, setSelectedClan] = useState(null);

    const handleCardClick = (clan) => {
        setSelectedClan(clan);
        setOpenModal(true);
    };

    return (
        <div
            className="flex flex-col min-h-screen w-full bg-fixed bg-gray-700 bg-cover bg-center"
        // style={{ backgroundImage: `url(${fondoWar})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex flex-col ">
                <div class="flex flex-col justify-start items-center border-piedra  bg-gray-950/80 bg-fixed ">
                    {/* <h1 className="mb-4 py-4 text-4xl
                            bg-redSherwood hover:bg-redSherwood-500 text-white font-QuadrataOst px-4 border-b-4
                            hover:border-redSherwood-hov rounded border-redSherwood-800 transition duration-150 hover:scale-105">CLANES</h1> */}
                    <h1 class="flex font-PerrygothicRegular text-shadow text-4xl text-amber-200">Clanes</h1>
                    <p className="flex mt-4 font-medium font-QuadrataOst text-gray-300 px-4 text-center">
                        Un clan es una agrupación de personas con fines comunes para formar una entidad (normalmente militar) para defender terreno, ideales, etc. Los clanes siempre llevan iniciales para identificarse
                    </p>
                </div>

                <div class=" flex w-full min-w-[200px] justify-between p-6">
                    <div>
                        {/* <ClanInfoModal /> */}
                        <AgregarClan />
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
                    <ClanCard onCardClick={handleCardClick} />

                </div>
                {openModal && (
                    <ClanInfoModal
                        clan={selectedClan}
                        openModal={openModal}
                        handleClose={() => setOpenModal(false)}
                    />
                )}
            </div>
        </div>
    )
}

export default Clanes