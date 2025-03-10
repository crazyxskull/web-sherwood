// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ButtonRed from '../components/buttons/buttonRed';
import PlayerCard from '../components/Home/PlayerCard';
import ladymarianImage from '../assets/ladymarian.png';
import SherwoodDungeonLogo from '../assets/921_UI_element_SWLogo.png';
import FondoMaidmarian from '../assets/FondoMaidmarian.png'
import ButtonBrown from '../components/buttons/buttonbrown';
import Login from '../components/Login';
import Registro from '../components/Registro';
import videoloading from '../assets/video/videoloading.mp4';


function AuthPage() {

    const [isLogin, setIsLogin] = useState(true); // Estado DENTRO del componente

    const toggleForm = () => {
        setIsLogin(!isLogin); // Cambia el estado al hacer clic en el botón
    };


    return (
        <div
            className="flex flex-col justify-center w-full bg-fixed bg-cover bg-no-repeat items-center h-screen"
            style={{ backgroundImage: `url(${ladymarianImage})` }}  // Aquí usamos la imagen importada
        >
            
            {/* <video class="flex absolute bg-video"src={videoloading} autoPlay loop muted/> */}
            <div className="flex flex-col border-sherwood bg-radial from-amber-50 from-10% to-bgSherwod w-auto min-w-2/5 relative" >
                {isLogin ? <Login /> : <Registro />}  {/* Renderizado condicional */}
                <hr class="w-64 h-px my-4 border-0 mx-auto bg-gray-300" />
                <button onClick={toggleForm} className="px-3 font-Quadrata text-amber-950 hover:text-Brown-500 ">
                    {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
                </button>
            </div>
        </div>
    );
}
export default AuthPage;