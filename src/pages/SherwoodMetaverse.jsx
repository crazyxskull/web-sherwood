import React from 'react'
import ChatRoom from '../components/chat/chatroom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ladymarianImage from '../assets/ladymarian.png';

const SherwoodMetaverse = () => {
    return (
        <div
            className="flex flex-col min-h-screen w-full bg-fixed"
            style={{ backgroundImage: `url(${ladymarianImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex w-full">
                <div className="w-58"> {/* Ancho fijo para el Sidebar. Ajusta según necesidad */}
                    <Sidebar />
                </div>
                <div className="flex flex-col flex-grow">
                    <Header />
                    <div class="flex justify-end items-end bg-white/20 ">
                        <ChatRoom />
                    </div>

                    <Footer />
                </div>
            </div>
        </div>

    )
}

export default SherwoodMetaverse