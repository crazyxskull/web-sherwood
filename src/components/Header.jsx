// src/components/Home.jsx
import React from 'react';
import LogoSherwood from '../assets/SherwoodLogo.webp';
import UserLogo from '../assets/usuario-logo.png'
import SwLogo from '../assets/SwLogo.png'
import { Link } from 'react-router-dom';
import { FaFacebookMessenger, FaEnvelope, FaSearch, FaTools } from "react-icons/fa";
import '../App.css'; // Importa tu archivo CSS principal
import ButtonRed from './buttons/buttonRed';
console.log("este es un print desde el app.jsx")

function Header() {
    return (
        <header class="flex flex-col w-full font-QuadrataOst ">
            <div class="grid grid-cols-8 gap-4 justify-between sticky top-0 z-40 h-18 
                        items-center gap-x-4 bg-gray-800 
                px-2 sm:px-4 shadow-sm transition-all w-full ">
                <div class="mb-6 md:mb-0 col-span-2">
                    <Link to="/" className="flex items-center relative w-full h-full py-0">

                        {/* <img src={LogoSherwood} class="h-8 w-auto my-4" alt="Logo" /> */}
                        <h1 className="text-2xl tracking-tight text-white">Sherwood Dungeon</h1>
                    </Link>
                </div>
                <div class="col-span-2  text-white font-Quadrata text xl">
                    <h2>CONTENIDO</h2>
                </div>
                <div class="flex col-span-2 text-white h-12 w-auto gap-4 justify-start items-center">
                    <div class="w-full max-w-sm min-w-[200px]">
                        <div class="relative flex items-center  bg-white/15 text-gray-300 text-sm rounded-2xl  
                               ">
                            <input
                                class="w-full  pr-3 pl-3 py-2  transition duration-300 ease focus:outline-none focus:border-slate-300"
                                placeholder="Busqueda....." />
                            <button
                                class="rounded-2xl  ml-2  p-2.5 text-sm text-white transition hover:bg-slate-700"
                                type="button">
                                <FaSearch class="h-5 w-auto" />
                            </button>
                        </div>
                    </div>
                    <div class="flex col-span-1 text-white gap-6 justify-end items-center mr-2 ">
                        <button class="rounded-md bg-slate-800 p-2.5 text-sm text-white transition hover:bg-slate-700"
                            type="button">
                            <FaEnvelope class="h-5 w-auto " />
                        </button>
                        <button class="rounded-md bg-slate-800 p-2.5 text-sm text-white transition hover:bg-slate-700"
                            type="button">
                            <FaTools class="h-5 w-auto" />
                        </button>
                    </div>
                </div>
                <div class="flex flex-row col-span-1 col-6 gap-4">
                    <div className="flex h-full col-span-1">
                        <Link to="/Profile" className="flex justify-center items-center relative w-full h-full mx-auto col-span-1 col-7">
                            <div class="flex flex-row items-center">
                                <img class="w-12 h-auto rounded-full mr-4 bg-neutral-950" alt="Logo" src={SwLogo} />
                                <div class="flex flex-col text-sm items-start">
                                    <p class="text-gray-100 leading-none">Jonathan Reinink </p>
                                    <p class="text-gray-200">Aug 18</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <Link to="/AuthPage" className="flex justify-center items-center relative w-full h-full mx-auto col-span-1 col-7">
                    <div>
                        <ButtonRed text="Iniciar Sesion" />
                    </div>
                </Link>
            </div>
            {/* <div className="flex bg-gray-500 w-full ">
                <ul className="flex text-sm font-QuadrataOst text-center  text-gray-400 shadow-sm sm:flex w-full">
                    <li className="flex-1 focus-within:z-10">
                        <Link to="/Profile" className="flex justify-center items-center relative w-full h-full mx-auto col-span-1 col-7">
                            <h2 class="inline-block w-full p-2 border-r border-gray-700 hover:text-gray-100 hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                                Profile
                            </h2>
                        </Link>
                    </li>
                    <li className="flex-1 focus-within:z-10">
                        <a href="#" className="inline-block w-full p-2 border-r border-gray-700 hover:text-gray-100 hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:text-white dark:hover:bg-gray-600">Dashboard</a>
                    </li>
                    <li className="flex-1 focus-within:z-10">
                        <a href="#" className="inline-block w-full p-2 border-r border-gray-700 hover:text-gray-100 hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:text-white dark:hover:bg-gray-600">Settings</a>
                    </li>
                    <li className="flex-1 focus-within:z-10">
                        <a href="#" className="inline-block w-full p-2 border-s-0 border-gray-700 rounded-e-lg hover:text-gray-100 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:text-white dark:hover:bg-gray-600">Invoice</a>
                    </li>
                </ul>
            </div> */}


        </header>
    );
}
export default Header;