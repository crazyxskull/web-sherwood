import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ButtonRed from '../components/buttons/buttonRed';
import PlayerCard from '../components/Home/PlayerCard';
import fondo from '../assets/Ia/fondoSW.png';
import sherwoodAlpha from '../assets/SherwoodVersion/sherwoodAlpha.png';

function Home() {
    return (
        <div>
            {/* Contenedor que crece y empuja el footer hacia abajo */}
            <div className="flex flex-col  w-full justify-start items-start">
                <div class="flex border-gotico">
                    <img src={fondo} />
                </div>

                <button className="mb-4 py-4 text-4xl
         bg-redSherwood hover:bg-redSherwood-500 text-white font-QuadrataOst px-4 border-b-4
         hover:border-redSherwood-hov rounded border-redSherwood-800 transition duration-150 hover:scale-105">
                    Vamos a Jugar!!
                </button>

                <p className="flex font-medium text-white px-4 text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea pariatur neque quos culpa alias temporibus aspernatur, natus, quia fugit at, fugiat obcaecati. Quaerat alias, voluptatem modi ducimus sed aut non?
                </p>
            </div>
        </div>
    );
}
export default Home;