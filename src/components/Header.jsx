// src/components/Home.jsx
import React from 'react';
import LogoSherwood from '../assets/SherwoodLogo.webp';
import UserLogo from '../assets/usuario-logo.png'
import { Link } from 'react-router-dom';
import '../App.css'; // Importa tu archivo CSS principal
console.log("este es un print desde el app.jsx")

function Header() {
    return (
        <div>
            <div class="grid grid-cols-6 gap-4 justify-between sticky top-0 z-40 h-18 
                        items-center gap-x-4 = bg-gray-800
                px-2 sm:px-4 shadow-sm transition-all">
                <div class="mb-6 md:mb-0 ">
                    <Link to="/" className="flex items-center relative w-full h-full py-0">

                        <img src={LogoSherwood} class="h-8 w-auto my-4" alt="Logo" />
                        <h1 className="text-2xl font-QuadrataOst tracking-tight text-white">Sherwood Dungeon</h1>
                    </Link>
                </div>
                <div class="col-span-4 col-2 text-teal-700 font-Quadrata text xl">
                    <h2>CONTENIDO</h2>
                </div>
                <div class="flex flex-row justify-start items-center gap-4">
                    <img class="h-10 w-auto my-4 " alt="Logo" src={UserLogo}  />
                    <h2 class="h-10 w-3/4 bg-black border-2 border-amber-100">LOGIN</h2>
                </div>
            </div>
        </div>
    );
}
export default Header;