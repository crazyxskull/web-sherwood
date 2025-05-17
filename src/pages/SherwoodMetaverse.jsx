import React from 'react'
import ChatRoom from '../components/chat/chatroom'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ladymarianImage from '../assets/ladymarian.png';
import fondoMedieval from '../assets/fondoMedieval.jpg';
import User3D from '../components/User/User3D'
import fondo from '../assets/fondoMedieval.jpg';
import character from '../assets/paladinWoman.png';
import ButtonRed from '../components/buttons/buttonRed'
import PlaySherwood from '../components/chat/PlaySherwood'

const SherwoodMetaverse = () => {
    return (
        <div
            className="flex flex-col min-h-screen w-full bg-fixed bg-gray-950"
        // style={{ backgroundImage: `url(${fondoMedieval})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >

            <div class="flex flex-col">
                <div class="flex flex-col  min-h-screen w-auto bg-neutral-950/20 justify-center items-center">
                    <div className="relative w-full h-[600px]">
                        <img src={fondo} className="absolute inset-0 w-full h-full object-cover brightness-50" />
                        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                            {/* <img src={character} className="hidden md:block absolute left-10 bottom-0 h-96 transition-transform hover:scale-105" /> */}
                            <h1 className="font-Deutsch text-5xl md:text-7xl text-textSherwood drop-shadow-md">Sherwood Dungeon</h1>
                            <h2 className="font-Deutsch text-5xl md:text-2xl text-redSherwood drop-shadow-md">CRAZY VERSION</h2>
                            <p className="mt-4 max-w-3xl text-white">
                                Una nueva version de sherwood dungeon adaptada a entornos web para recordar los viejos tiempos, siendo una copia
                                barata del sherwood creada por un gran fan que se dedica a subir contenido a YouTube.
                                PD: Tyr puto
                            </p>
                            <div className="mt-6">
                                <ButtonRed text="JUGAR SHERWOOD" />
                            </div>
                        </div>
                    </div>
                    {/* <User3D /> */}
                    <div class="flex w-full justify-end items-end ">
                        <ChatRoom />
                    </div>
                </div>
                <div className="mt-20">
                    <PlaySherwood />
                </div>
            </div>
        </div>

    )
}

export default SherwoodMetaverse