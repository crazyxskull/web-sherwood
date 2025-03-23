import React from 'react'
import ChatRoom from '../components/chat/chatroom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ladymarianImage from '../assets/ladymarian.png';
import fondoMedieval from '../assets/fondoMedieval.jpg';
import User3D from '../components/User/User3D'

const SherwoodMetaverse = () => {
    return (
        <div
            className="flex flex-col min-h-screen w-full bg-fixed"
            style={{ backgroundImage: `url(${fondoMedieval})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex w-full ">
                <div className="w-58"> {/* Ancho fijo para el Sidebar. Ajusta según necesidad */}
                    <Sidebar />
                </div>
                <div className="flex flex-col flex-grow">
                    <Header />
                    <div class="flex flex-col">
                        <div class="flex flex-col  min-h-screen w-auto bg-neutral-950/20 justify-center items-center">
                            <User3D />
                            <div class="flex w-full justify-end items-end ">
                                <ChatRoom />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>

    )
}

export default SherwoodMetaverse