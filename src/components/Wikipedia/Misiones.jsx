import React from 'react';
import misionesData from './MisionData';  // Importa el array de datos

const Misiones = () => {
    return (
        <div >
            <div className="flex flex-col  bg-gray-700">
                <div class="flex flex-col justify-start items-center border-piedra bg-gray-950/80">
                    <h1 class="flex font-PerrygothicRegular text-shadow text-4xl text-textSherwood">Teleports</h1>
                    <p className="flex mt-4 font-medium font-QuadrataOst text-gray-300 px-4 text-center">
                       Los teleports son puntos de acceso que permiten a los jugadores moverse rápidamente entre diferentes áreas del mapa. Estos teleports son esenciales para la exploración y la estrategia en el juego, facilitando el desplazamiento entre misiones y eventos importantes.
                    </p>
                </div>
                <div className=" h-auto w-full p-6 rounded-lg flex justify-end items-center">
                    <button type="button"
                        className="text-white h-full bg-gray-800 hover:bg-gray-950 font-bold rounded-lg text-md px-5 py-2.5 m-2">
                        ---</button>
                    <button type="button"
                        className="text-white h-full bg-gray-800 hover:bg-gray-950 font-bold rounded-lg text-md px-5 py-2.5 m-2">
                        Filtrar</button>
                </div>
                <div class="grid grid-cols-2 gap-4 p-4">
                    {misionesData.map(mision => (  // Itera sobre el array de datos
                        <div key={mision.id} className="grid grid-cols-3 h-auto w-full my-4 bg-neutral-950 inset-ring-2 ring-neutral-950
                         rounded-lg hover:brightness-130 hover:inset-shadow-sm hover:inset-shadow-amber-200">
                            <div className="flex items-center justify-center ">
                                <img src={mision.image} className="flex h-auto w-full col-span-1 " alt={mision.title} />
                            </div>
                            <div className="col-span-2 h-auto  p-2">
                                <span className="text-redSherwood font-TrajanProBold text-sm">Sherwood alpha 2.6</span>
                                <h2 className="font-TrajanProBold text-white text-xl my-2 hover:brightness-60">{mision.title}</h2>
                                <p className="text-gray-500 font-sans my-4 text-lg">{mision.description}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}

export default Misiones;