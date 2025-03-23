import React, { useState } from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ButtonRed from '../components/buttons/buttonRed';
import ladymarianImage from '../assets/ladymarian.png';
import fondoMedieval from '../assets/ia/fondoDN.png';
import Misiones from '../components/Wikipedia/Misiones'
import Historia from '../components/Wikipedia/Historia';
import Carrusel from '../components/Carrusel';
import Comandos from '../components/Wikipedia/Comandos';
console.log("este es un print desde la pagina de tutoriales ")

const Wiki = () => {
    const [activeTab, setActiveTab] = useState('historia-tab');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <div
            className="flex flex-col min-h-screen w-full bg-fixed "
            style={{ backgroundImage: `url(${fondoMedieval})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex w-full bg-gray-950/60">
                <div className="w-58"> {/* Ancho fijo para el Sidebar. Ajusta según necesidad */}
                    <Sidebar />
                </div>
                <div className="flex flex-col flex-grow">
                    <Header />
                    <div class="w-full min-h-screen">
                        <div class="relative right-0">
                            <ul class="relative flex items-center justify-center  
                                        flex-wrap px-1.5 py-1.5 list-none bg-neutral-950/80 font-TrajanProBold text-shadow border-b-brown" data-tabs="tabs" role="list">
                                <li class="z-30 flex-auto text-center ">
                                    <a class="hover:text-gray-500 z-30 w-full px-0 py-2 text-lg mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-white"
                                        id="historia-tab" role="tab"
                                        onClick={() => handleTabClick('historia-tab')}
                                        aria-selected={activeTab === 'historia-tab'}
                                        aria-controls="historia">
                                        Historia de sherwood
                                    </a>
                                </li>
                                <li class="z-30 flex-auto text-center">
                                    <a class="hover:text-gray-500 z-30 w-full px-0 py-2 mb-0 text-lg transition-all ease-in-out border-0 rounded-lg cursor-pointer text-white"
                                        id="teleports-tab"
                                        role="tab"
                                        onClick={() => handleTabClick('teleports-tab')}
                                        aria-selected={activeTab === 'teleports-tab'}
                                        aria-controls="teleports">
                                        Teleport y Misiones
                                    </a>
                                </li>
                                <li class="z-30 flex-auto text-center">
                                    <a class="hover:text-gray-500 z-30 w-full px-0 py-2 text-lg mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-white"
                                        id="Comandos-tab"
                                        role="tab"
                                        onClick={() => handleTabClick('Comandos-tab')}
                                        aria-selected={activeTab === 'Comandos-tab'}
                                        aria-controls="Comandos">
                                        Comandos
                                    </a>
                                </li>
                            </ul>
                            <div data-tab-content="" class="p-5">
                                <div class={` ${activeTab === 'historia-tab' ? '' : 'hidden'}`} id="historia-tab" role="tabpanel" >

                                    <Historia />
                                    {/* <iframe
                                        id="inlineFrameExample"
                                        title="Inline Frame Example"
                                        class="flex h-auto w-full"
                                        src="https://sherwooddungeon.fandom.com/es/wiki/Sherwood_(Historia)">
                                    </iframe> */}
                                </div>
                                {/* <img src={ladymarian3} class="h-auto w-full my-4 border-gold" alt="Logo" /> */}
                            </div>
                            <div class={`p-4 ${activeTab === 'teleports-tab' ? '' : 'hidden'}`} id="teleports-tab" role="tabpanel">
                                <Misiones />
                            </div>
                            <div class={` ${activeTab === 'Comandos-tab' ? '' : 'hidden'}`} id="Comandos-tab" role="tabpanel">
                            <Comandos/>

                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div >
    )
}

export default Wiki