import React, { useState } from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ButtonRed from '../components/buttons/buttonRed';
import ladymarianImage from '../assets/ladymarian.png';
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
            className="flex flex-col min-h-screen w-full bg-fixed"
            style={{ backgroundImage: `url(${ladymarianImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex w-full">
                <div className="w-58"> {/* Ancho fijo para el Sidebar. Ajusta según necesidad */}
                    <Sidebar />
                </div>
                <div className="flex flex-col flex-grow">
                    <Header />
                    <div class="w-full min-h-screen p-2 bg-neutral-950/60">
                        <div class="relative right-0">
                            <ul class="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-medieval border-gold font-TrajanProBold" data-tabs="tabs" role="list">
                                <li class="z-30 flex-auto text-center ">
                                    <a class="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-black bg-inherit"
                                        id="historia-tab" role="tab"
                                        onClick={() => handleTabClick('historia-tab')}
                                        aria-selected={activeTab === 'historia-tab'}
                                        aria-controls="historia">
                                        Historia de sherwood
                                    </a>
                                </li>
                                <li class="z-30 flex-auto text-center">
                                    <a class="z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-sm transition-all ease-in-out border-0 rounded-lg cursor-pointer text-black bg-inherit"
                                        id="teleports-tab"
                                        role="tab"
                                        onClick={() => handleTabClick('teleports-tab')}
                                        aria-selected={activeTab === 'teleports-tab'}
                                        aria-controls="teleports">
                                        Teleport y Misiones
                                    </a>
                                </li>
                                <li class="z-30 flex-auto text-center">
                                    <a class="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-black bg-inherit"
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
                            <div class={` ${activeTab === 'teleports-tab' ? '' : 'hidden'}`} id="teleports-tab" role="tabpanel">
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