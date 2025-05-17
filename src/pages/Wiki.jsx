import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import ButtonRed from '../components/buttons/buttonRed';
import ladymarianImage from '../assets/ladymarian.png';
import fondoMedieval from '../assets/ia/fondoDN.png';
import fondoCastle from '../assets/ia/SherwoodCastle.png';
import fondoWar from '../assets/ia/WarSherwood.png';
import fondoCaverna from '../assets/ia/Caverna.jpg';
import Misiones from '../components/Wikipedia/Misiones';
import Historia from '../components/Wikipedia/Historia';
import Carrusel from '../components/Carrusel';
import Comandos from '../components/Wikipedia/Comandos';
import Items from '../components/Wikipedia/Items';
import Adicional from '../components/Wikipedia/Adicional';

console.log("este es un print desde la pagina de tutoriales ");

const Wiki = () => {
    const [activeTab, setActiveTab] = useState('historia-tab');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div
            className="flex flex-col min-h-screen w-full bg-fixed "
            style={{ backgroundImage: `url(${ladymarianImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="w-full min-h-screen">
                <div className="relative ">
                    <ul
                        className="relative flex items-center justify-center list-none 
                        bg-gray-900 border-b border-gray-400 text-shadow font-Quadrata text-lg "
                        data-tabs="tabs"
                        role="list"
                    >
                        <li className="z-30 flex-auto text-center transition-all duration-300 hover:scale-105 hover:bg-gray-300/40 cursor-pointer"
                            onClick={() => handleTabClick('historia-tab')}>
                            <a
                                className={`z-30 w-full text-white ${activeTab === 'historia-tab' ? 'active' : ''}`}
                                id="historia-tab"
                                role="tab"

                                aria-selected={activeTab === 'historia-tab'}
                                aria-controls="historia"
                            >
                                Historia
                            </a>
                        </li>
                        <li className="z-30 flex-auto text-center transition-all duration-300 hover:text-xl hover:bg-gray-300/40 cursor-pointer"
                            onClick={() => handleTabClick('teleports-tab')}>
                            <a
                                className={`z-30 w-full text-white ${activeTab === 'teleports-tab' ? 'active' : ''}`}
                                id="teleports-tab"
                                role="tab"

                                aria-selected={activeTab === 'teleports-tab'}
                                aria-controls="teleports"
                            >
                                Teleports
                            </a>
                        </li>
                        <li className="z-30 flex-auto text-center transition-all duration-300 hover:text-xl hover:bg-gray-300/40 cursor-pointer"
                            onClick={() => handleTabClick('items-tab')}>
                            <a
                                className={`z-30 w-full text-white ${activeTab === 'items-tab' ? 'active' : ''}`}
                                id="items-tab"
                                role="tab"

                                aria-selected={activeTab === 'items-tab'}
                                aria-controls="items"
                            >
                                Items
                            </a>
                        </li>
                        <li className="z-30 flex-auto text-center transition-all duration-300 hover:text-xl hover:bg-gray-300/40 cursor-pointer"
                            onClick={() => handleTabClick('npcs-tab')}>
                            <a
                                className={`z-30 w-full text-white ${activeTab === 'npcs-tab' ? 'active' : ''}`}
                                id="npcs-tab"
                                role="tab"

                                aria-selected={activeTab === 'npcs-tab'}
                                aria-controls="npcs"
                            >
                                NPCs
                            </a>
                        </li>
                        <li className="z-30 flex-auto text-center transition-all duration-300 hover:text-xl hover:bg-gray-300/40 cursor-pointer"
                            onClick={() => handleTabClick('mobs-tab')}>
                            <a
                                className={`z-30 w-full text-white ${activeTab === 'mobs-tab' ? 'active' : ''}`}
                                id="mobs-tab"
                                role="tab"

                                aria-selected={activeTab === 'mobs-tab'}
                                aria-controls="mobs"
                            >
                                Mobs
                            </a>
                        </li>
                        <li className="z-30 flex-auto text-center transition-all duration-300 hover:text-xl hover:bg-gray-300/40 cursor-pointer"
                            onClick={() => handleTabClick('comandos-tab')}>
                            <a
                                className={`z-30 w-full text-white ${activeTab === 'comandos-tab' ? 'active' : ''}`}
                                id="comandos-tab"
                                role="tab"

                                aria-selected={activeTab === 'comandos-tab'}
                                aria-controls="comandos"
                            >
                                Comandos
                            </a>
                        </li>
                        <li className="z-30 flex-auto text-center transition-all duration-300 hover:text-xl hover:bg-gray-300/40 cursor-pointer"
                            onClick={() => handleTabClick('adicional-tab')}>
                            <a
                                className={`z-30 w-full text-white ${activeTab === 'adicional-tab' ? 'active' : ''}`}
                                id="adicional-tab"
                                role="tab"

                                aria-selected={activeTab === 'adicional-tab'}
                                aria-controls="adicional"
                            >
                                Adicional
                            </a>
                        </li>
                    </ul>

                    <div data-tab-content="" className="mx-auto">
                        <div className={`flex w-3/4 mt-6 mx-auto border-dungeon justify-center items-center rounded-lg bg-gray-950/80 bg-fixed 
                            ${activeTab === 'historia-tab' ? '' : 'hidden'}`} id="historia-tab" role="tabpanel">
                            <Historia />
                            {/* <iframe
                                id="inlineFrameExample"
                                title="Inline Frame Example"
                                className="flex h-auto w-full"
                                src="https://sherwooddungeon.fandom.com/es/wiki/Sherwood_(Historia)"
                            /> */}
                        </div>
                        <div className={`bg-fixed min-h-screen ${activeTab === 'teleports-tab' ? '' : 'hidden'}`} id="teleports-tab" role="tabpanel">

                            <Misiones />
                        </div>
                        <div className={`${activeTab === 'items-tab' ? '' : 'hidden'}`} id="items-tab" role="tabpanel"
                            style={{ backgroundImage: `url(${fondoWar})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <Items />
                            {/* <p className="text-white">Contenido de Items aquí...</p> */}
                        </div>
                        <div className={`p-4 ${activeTab === 'npcs-tab' ? '' : 'hidden'}`} id="npcs-tab" role="tabpanel">
                            {/* Contenido para NPCs */}
                            <p className="text-white">Contenido de NPCs aquí...</p>
                        </div>
                        <div className={`p-4 ${activeTab === 'mobs-tab' ? '' : 'hidden'}`} id="mobs-tab" role="tabpanel">
                            {/* Contenido para Mobs */}
                            <p className="text-white">Contenido de Mobs aquí...</p>
                        </div>
                        <div className={`p-4 w-full bg-fixed min-h-screen ${activeTab === 'comandos-tab' ? '' : 'hidden'}`} id="comandos-tab" role="tabpanel"
                            style={{ backgroundImage: `url(${fondoCaverna})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <Comandos />
                        </div>
                        <div className={`${activeTab === 'adicional-tab' ? '' : 'hidden'}`} id="adicional-tab" role="tabpanel">
                            <Adicional />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Wiki;