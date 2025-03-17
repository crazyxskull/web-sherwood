import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ButtonRed from '../components/buttons/buttonRed';
import PlayerCard from '../components/Home/PlayerCard';
import ladymarianImage from '../assets/ladymarian.png';
import sherwoodAlpha from '../assets/SherwoodVersion/sherwoodAlpha.png';

function Home() {
    return (
        <div class="flex flex-col m-6 ">
            <h1 class="flex text-3xl font-TrajanProBold text-cyan-50">Descripcion de la Pagina</h1>
            <div class="grid grid-cols-2 mt-4">
                <div id="gallery" class="relative w-full border-dungeon" data-carousel="slide">
                    <div class="relative h-56 overflow-hidden rounded-lg md:h-96 ">
                        {/* <!-- Item 1 --> */}
                        <div class="duration-700 ease-in-out" data-carousel-item="active">
                            <img src={sherwoodAlpha} class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                        </div>
                        {/* <!-- Item 2 --> */}
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src={ladymarianImage} class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                        </div>
                    </div>
                    {/* <!-- Slider controls --> */}
                    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>
                <div class="text-white rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
                    {/* <div>
                        <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                        <h1 class="flex text-3xl font-TrajanProBold text-cyan-50">Descripcion de la Pagina</h1>
                            <svg class="h-6 w-6 stroke-white">
                                
                            </svg>
                        </span>
                    </div> */}
                    <h3 class="text-white mt-5 text-base font-medium tracking-tight ">Sherwood Dungeon</h3>
                    <p class=" text-gray-400 mt-2 text-sm ">
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, non voluptatum odit autem facilis nobis quos eius tempora dicta architecto officiis enim facere quia dolorum. Obcaecati fuga iure dolore totam.
                    </p>
                </div>

            </div>
            <div class="flex flex-col m-4 justify-start items-center border-piedra bg-gray-950 ">
                <h1 className="mb-4 py-4 text-4xl
                                                bg-redSherwood hover:bg-redSherwood-500 text-white font-QuadrataOst px-4 border-b-4
                                                hover:border-redSherwood-hov rounded border-redSherwood-800 transition duration-150 hover:scale-105">SHERWOOD</h1>
                <p className="flex font-medium text-gray-300 px-4 text-center">
                    Un clan es una agrupación de personas con fines comunes para formar una entidad (normalmente militar) para defender terreno, ideales, etc. Los clanes siempre llevan iniciales para identificarse
                </p>
            </div>
            <div className="flex items-center justify-center h-full mt-6  text-lg font-QuadrataOst">
                <Link to="/Play" className="flex items-center justify-center relative w-full h-full py-0">
                    <ButtonRed text="JUGAR SHERWOOD!" />
                </Link>
            </div>
            <div class="flex my-8 mr-4">
                <PlayerCard />
            </div>

        </div>
    );
}
export default Home;