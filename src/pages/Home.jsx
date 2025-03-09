import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ButtonRed from '../components/buttons/buttonRed';
import PlayerCard from '../components/Home/PlayerCard';
import ladymarianImage from '../assets/ladymarian.png';


function Home() {
    return (
        <div
            class="flex flex-col justify-center w-full bg-fixed items-center"
            style={{ backgroundImage: `url(${ladymarianImage})` }}  // Aquí usamos la imagen importada
        >
            <div class="flex flex-row-2">
                <Sidebar class="" />
                <div>
                    <Header />
                    <div class="flex flex-col m-6">
                        <h1 class="flex text-3xl font-TrajanProBold text-cyan-50">Bienvenido Sherwoodiano!</h1>
                        <div class="grid grid-cols-2 mt-4">
                            <div class="flex  mr-4">
                                <PlayerCard />
                            </div>
                            <div class=" gap-4 rounded-lg text-white">
                                <ul >
                                    <li>Sales</li>
                                    <li>Marketing</li>
                                    <li>SEO</li>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ut, impedit sint animi optio maxime id. Excepturi vel numquam nostrum, obcaecati reprehenderit unde, a expedita praesentium est natus harum adipisci!</p>
                                    {/* <!-- ... --> */}
                                </ul>
                            </div>

                        </div>
                        <div className="flex items-center justify-center h-full mt-6  text-4xl font-extrabold">
                            <Link to="/Play" className="flex items-center justify-center relative w-full h-full py-0">
                                <ButtonRed text="Jugar Sherwood!" />
                            </Link>
                        </div>

                    </div>
                    <div class="flex flex-col-2">
                        <h2>Categories</h2>
                        <ul class="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
                            <li>Sales</li>
                            <li>Marketing</li>
                            <li>SEO</li>
                            {/* <!-- ... --> */}
                        </ul>
                        <iframe class="aspect-video ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
                    </div>
                    <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                        <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
                        <div>
                            <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
                            <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
                        </div>
                    </div>
                    <div class="flex flex-col-2">
                        <div class="bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
                            <div>
                                <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                                    <svg class="h-6 w-6 stroke-white">
                                        {/* <!-- ... --> */}
                                    </svg>
                                </span>
                            </div>
                            <h3 class="text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
                            <p class=" text-gray-400 mt-2 text-sm ">
                                The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                            </p>
                        </div>
                        <div class="bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
                            <div>
                                <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                                    <svg class="h-6 w-6 stroke-white">
                                        {/* <!-- ... --> */}
                                    </svg>
                                </span>
                            </div>
                            <h3 class="text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
                            <p class=" text-gray-400 mt-2 text-sm ">
                                The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                            </p>
                        </div>
                    </div>
                    <div>
                        <label
                            class="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 ..."
                        >
                            {/* <svg fill="currentColor">
    
</svg> */}
                            Google Pay
                            <input type="radio" class="checked:border-indigo-500 ..." />
                        </label>
                    </div>

                    <Footer />
                </div>

            </div>
        </div>
    );
}
export default Home;