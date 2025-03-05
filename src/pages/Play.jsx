// src/components/Play.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ButtonRed from '../components/buttons/buttonRed';
console.log("este es un print desde el app.jsx")

function Play() {
    return (
        <div  class="bg-sky-700">
            <Header />
            <div class="flex flex-col m-6 justify-center items-center">
                <div class="flex ">
                    <h1 class="mb-4 text-4xl font-xtra leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Vamos a Jugar!!</h1>
                </div>
                <div class="flex flex-row justify-center gap-4 items-center">
                    <button class="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-2 px-4 border-b-4 border-emerald-700 hover:border-emerald-500 rounded">
                        PLAY!
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        DOWNLOAD!
                    </button>
                    <ButtonRed text="Players" />
                    
                </div>
                <p class="flex font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea pariatur neque quos culpa alias temporibus aspernatur, natus, quia fugit at, fugiat obcaecati. Quaerat alias, voluptatem modi ducimus sed aut non?</p>
            </div>
            <Footer />
        </div>
    );
}
export default Play;