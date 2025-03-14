import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ladymarianImage from '../assets/ladymarian.png';
import clanSH from '../assets/clanes/SH_Logo.png';
import clanDM from '../assets/clanes/logoDM.webp'

const Clanes = () => {
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
                    <div className="flex flex-col m-4 justify-start items-center border-piedra bg-gray-950 ">
                        {/* <h1 className="mb-4 py-4 text-4xl
                            bg-redSherwood hover:bg-redSherwood-500 text-white font-QuadrataOst px-4 border-b-4
                            hover:border-redSherwood-hov rounded border-redSherwood-800 transition duration-150 hover:scale-105">CLANES</h1> */}
                        <h1 class="flex font-bold text-2xl text-redSherwood-700">CLANES</h1>
                        <p className="flex font-medium text-gray-300 px-4 text-center">
                            Un clan es una agrupación de personas con fines comunes para formar una entidad (normalmente militar) para defender terreno, ideales, etc. Los clanes siempre llevan iniciales para identificarse
                        </p>
                    </div>
                    <div class="grid grid-cols-2 lg:grid-cols-1 m-4 w-2/4 gap-6">
                        <div class="border-gold flex flex-row bg-medieval">
                            <img class="flex h-20 w-auto" src={clanSH} />
                            <h2 class="text-white text-center font-TrajanProBold">SH</h2>
                            <p className="flex font-medium  px-4 text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero distinctio modi deleniti et sunt quaerat enim? Est explicabo voluptatum quo quia cum iure officia incidunt? Recusandae doloremque expedita accusantium numquam.
                            </p>
                        </div>
                        <div class="border-gold flex flex-row bg-medieval">
                            <img class="flex h-20 w-auto" src={clanDM} />
                            <h2 class="text-white text-center font-TrajanProBold">DM</h2>
                            <p className="flex font-medium  px-4 text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero distinctio modi deleniti et sunt quaerat enim? Est explicabo voluptatum quo quia cum iure officia incidunt? Recusandae doloremque expedita accusantium numquam.
                            </p>
                        </div>
                        <div class="border-gold flex flex-row bg-medieval">
                            <h2 class="text-white text-center font-TrajanProBold">Default</h2>
                            <p className="flex font-medium  px-4 text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero distinctio modi deleniti et sunt quaerat enim? Est explicabo voluptatum quo quia cum iure officia incidunt? Recusandae doloremque expedita accusantium numquam.
                            </p>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Clanes