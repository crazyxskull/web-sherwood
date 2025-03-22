import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ButtonRed from '../components/buttons/buttonRed';
import PlayerCard from '../components/Home/PlayerCard';
import fondo from '../assets/fondoMedieval.jpg';
import character from '../assets/paladinWoman.png';
import sherwoodAlpha from '../assets/SherwoodVersion/sherwoodAlpha.png';

function Home() {
    return (
        <div>
            {/* Contenedor que crece y empuja el footer hacia abajo */}
            <div className="flex flex-col">
                <div class="static w-full ">
                    {/* <img class="flex w-full h-150  brightness-70" src={fondo} /> */}
                    <div class="relative flex overflow-hidden ">
                        <img class="flex w-full h-130 object-cover bg-fixed" src={fondo} />
                        <div class="absolute text-white font-TrajanProBold grid grid-cols-4 grid-rows-3 object-cover">
                            <img class="absolute col-span-1 mt-30  hidden md:flex " src={character} />
                            <div class="col-span-4 row-span-3 my-12 md:col-span-4 md:col-start-2 flex flex-col justify-center items-center">
                                <h1 class="col-span-4 xl:col-span-3 md:col-span-3 md:col-start-2 mx-5 
                                text-center font-Deutsch text-textSherwood
                                xl:text-8xl text-5xl sm:text-7xl text-shadow" >Sherwood Dungeon</h1>
                                <p className="font-medium text-white text-center my-6">
                                    Embárcate en una épica aventura en un mundo de fantasía medieval. Enfréntate a desafiantes enemigos,
                                    explora misteriosas mazmorras y forja alianzas con valientes héroes. Con gráficos cautivadores
                                    y un sistema de juego inmersivo, "Sherwood Dungeon" te transportará a un reino lleno de magia y peligro. ¡Únete a la lucha y descubre tu destino!
                                </p>
                                <div class="col-span-3 items-center justify-center flex my-6">
                                    <ButtonRed text="JUGAR SHERWOOD" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="z-50 border-brown">
                    {/* <button className="mb-4 py-4 text-4xl w-1/4
         bg-redSherwood hover:bg-redSherwood-500 text-white font-QuadrataOst px-4 border-b-4
         hover:border-redSherwood-hov rounded border-redSherwood-800 transition duration-150 hover:scale-105">
                        
                    </button> */}

                    {/* <p className="flex font-medium text-white px-4 text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea pariatur neque quos culpa alias temporibus aspernatur, natus, quia fugit at, fugiat obcaecati. Quaerat alias, voluptatem modi ducimus sed aut non?
                    </p> */}
                </div>
                <div class=" grid grid-cols-4 gap-4 m-6">
                    <div class="bg-bgSherwod border-piedra col-span-3">
                        <div>
                            {/* <PlayerCard/> */}
                            <p className="flex font-medium text-slate-900 text-center">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea pariatur neque quos culpa alias temporibus aspernatur, natus, quia fugit at, fugiat obcaecati. Quaerat alias, voluptatem modi ducimus sed aut non?
                            </p>
                        </div>
                    </div>
                    <div class="bg-bgSherwod border-piedra col-span-1">
                        <p className="flex font-medium text-slate-900 text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea pariatur neque quos culpa alias temporibus aspernatur, natus, quia fugit at, fugiat obcaecati. Quaerat alias, voluptatem modi ducimus sed aut non?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;