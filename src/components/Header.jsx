// src/components/Home.jsx
import React from 'react';
import LogoSherwood from '../assets/SherwoodLogo.webp';
import UserLogo from '../assets/usuario-logo.png'
import { Link } from 'react-router-dom';
import '../App.css'; // Importa tu archivo CSS principal
import ButtonRed from './buttons/buttonRed';
console.log("este es un print desde el app.jsx")

function Header() {
    return (
        <div class="flex flex-col w-full">
            <div class="grid grid-cols-8 gap-4 justify-between sticky top-0 z-40 h-18 border-brown
                        items-center gap-x-4 = bg-gray-950
                px-2 sm:px-4 shadow-sm transition-all w-full">
                <div class="mb-6 md:mb-0 col-span-2">
                    <Link to="/" className="flex items-center relative w-full h-full py-0">

                        {/* <img src={LogoSherwood} class="h-8 w-auto my-4" alt="Logo" /> */}
                        <h1 className="text-3xl font-QuadrataOst tracking-tight text-white">Sherwood Dungeon</h1>
                    </Link>
                </div>
                <div class="col-span-4 col-2 text-white font-Quadrata text xl">
                    <h2>CONTENIDO</h2>
                </div>
                <div class="flex flex-row justify-start items-center col-span-2 gap-4">
                    <div className="flex items-center h-full">
                        <Link to="/AuthPage" className="flex items-center relative w-full h-full py-0 mx-auto">
                            <div class="flex items-center font-QuadrataOst">
                                <img class="w-10 h-10 rounded-full mr-4" alt="Logo" src={UserLogo} />
                                <div class="text-sm mr-4">
                                    <p class="text-gray-100 leading-none">Jonathan Reinink</p>
                                    <p class="text-gray-200">Aug 18</p>
                                </div>
                                <ButtonRed text="Iniciar Sesion" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex bg-gray-500 w-full border-brown">
                <ul className="flex text-sm font-QuadrataOst text-center  text-gray-400 shadow-sm sm:flex w-full">
                    
                    <li className="flex-1 focus-within:z-10">
                        <a href="#" className="inline-block w-full p-2 border-r border-gray-700 hover:text-gray-100 hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:text-white dark:hover:bg-gray-600" aria-current="page">Profile</a>
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
            </div>


        </div>
    );
}
export default Header;