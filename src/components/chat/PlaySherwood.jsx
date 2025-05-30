import React from 'react'
// import Header from '../Header';
// import Footer from '../Footer';
import { Link } from 'react-router-dom';
import ButtonRed from '../buttons/buttonRed';
import ladymarianImage from '../../assets/ladymarian.png';
import warsherwood from '../../assets/SherwoodVersion/warsherwood.png';
import sherwoodAlpha from '../../assets/SherwoodVersion/sherwoodAlpha.png';
import ieTAB from '../../assets/icons/ieTAB.png';
import ActiveX_logo from '../../assets/icons/ActiveX_logo.png';
// import Sidebar from '../Sidebar';
import ButtonBrown from '../buttons/buttonbrown';
// import sherwoodBrowser from '../assets/browsers/SherwoodBrowser.Ink'
console.log("este es un print desde el app.jsx");

const PlaySherwood = () => {
    return (
        <div>
            {/* Contenedor que crece y empuja el footer hacia abajo */}
            <div className="flex flex-col flex-grow m-6 justify-center items-center">
                <iframe class="aspect-video h-98 w-auto  border-dungeon "
                    src="https://www.youtube.com/embed/GiV4vz8tZhw">
                </iframe>
                {/* <button className="mb-4 py-4 text-4xl
         bg-redSherwood hover:bg-redSherwood-500 text-white font-QuadrataOst px-4 border-b-4
         hover:border-redSherwood-hov rounded border-redSherwood-800 transition duration-150 hover:scale-105">
                    Vamos a Jugar!!
                </button> */}

                <p className="flex font-medium text-white px-4 text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea pariatur neque quos culpa alias temporibus aspernatur, natus, quia fugit at, fugiat obcaecati. Quaerat alias, voluptatem modi ducimus sed aut non?
                </p>
            </div>
            <div className="grid grid-cols-10 gap-x-4 my-34 justify-center items-start bg-gray-950 border-brown h-72 w-full pt-4">

                <div className="col-span-2 col-start-3 text-white text-center justify-center">
                    <h2 class="font-Quadrata">Sherwood Alpha version 3.004</h2>
                    <Link to="https://www.sherwooddungeon.com/SherwoodInstall/SherwoodInstall.msi">
                        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            DOWNLOAD!
                        </button>
                    </Link>
                    <p>Sherwood dungeon Version shocwave o browser es uno de los mas antiguos que siguen vigentes hoy en dia, para jugar desde la web necesitaras instalar el siguiente Plugin ie TAB</p>
                </div>
                <div className="col-span-2 text-white text-center">
                    <h2 class="font-Quadrata">Sherwood Dungeon 2.6 Flash version</h2>
                    {/* <div class="flex flex-row  justify-center">
                <img class="w-12 h-auto rounded-full bg-black-900" src={ieTAB} />
                <img class="w-12 h-auto rounded-lg bg-white" src={ActiveX_logo} />
            </div> */}
                    <Link to="https://www.sherwooddungeon.com/SherwoodInstall/SherwoodInstall.msi">
                        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            DOWNLOAD!
                        </button>
                    </Link>
                    <p>
                        Para ejecuar la version de shocwave tanto de navegador web como del browser necesitaras instalar shocwave 12 para hacerlo funcionar </p>
                </div>
                <div className="col-span-2  text-white text-center ">
                    <h2 class="font-Quadrata">Sherwood Dungeon 2.6 Shocwave version</h2>
                    <a href="https://www.sherwooddungeon.com/sherwooddungeon.htm">
                        <button>Ir al sitio</button>
                    </a>
                    <Link to="https://www.sherwooddungeon.com/sherwooddungeon.htm">
                        <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-2 px-4 border-b-4 border-emerald-700 hover:border-emerald-500 rounded">
                            PLAY!
                        </button>
                    </Link>
                    <button href="../assets/browsers/SherwoodBrowser.exe" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        DOWNLOAD!
                    </button>
                    <div class="flex flex-row  justify-center">
                        <img class="w-12 h-auto rounded-full bg-black-900" src={ieTAB} />
                        <img class="w-12 h-auto rounded-lg bg-white" src={ActiveX_logo} />
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea pariatur neque quos culpa alias temporibus aspernatur,
                    </p>
                </div>

            </div>
            <div class="flex items-center">
                {/* <!-- Contenedor pequeño que aloja el iframe --> */}
                {/* <div class="h-3/4 w-auto">
            <iframe src="https://www.sherwooddungeon.com/play.html" width="500" height="500"></iframe>
            <iframe src="https://www.maidmarian.com" width="600" height="400"></iframe>
            <video src="videos/SherwoodMobileTrailer.mp4" type="video/mp4">
            </video>
        </div> */}
            </div>
            {/* Contenedor que crece y empuja el footer hacia abajo */}
            <div className="flex flex-col flex-grow m-6 justify-center items-center">

            </div>
            {/* Contenedor que crece y empuja el footer hacia abajo */}
            <div className="flex flex-col flex-grow m-6 justify-center items-center">

            </div>
        </div>
    )
}

export default PlaySherwood