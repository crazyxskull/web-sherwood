import React from 'react';

import ladymarianImage from '../assets/ladymarian.png';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Home from '../components/Home/Home';
import UserCard from '../components/User/UserCard';
import Notificaciones from '../components/User/Notificacion';

import { createRoot } from 'react-dom/client';
import User3D from '../components/User/User3D';
import UserStat from '../components/User/UserStat';

createRoot(document.getElementById('root')).render(<User3D />)

const Profile = () => {
    return (
        <div
            className="flex flex-col min-h-screen w-full bg-fixed"
            style={{ backgroundImage: `url(${ladymarianImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div class="flex grid-cols-3 gap-4 p-6">
                <div class=" flex flex-col col-span-1 min-h-screen w-1/4 bg-gray-800 border-piedra">
                    <h1 class="text-white font-TrajanProBold">Tu personaje Chaval!</h1>
                    {/* <User3D class="bg-amber-50 flex " /> */}
                    <div class="flex h-auto ">
                        <UserStat />
                    </div>

                </div>
                <div class="col-span-1">
                    <UserCard />
                </div>
                <div class="flex justify-end">
                    <Notificaciones />
                </div>

            </div>
        </div>
    )
}

export default Profile