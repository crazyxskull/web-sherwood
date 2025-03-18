import React from 'react';
import misionesData from './MisionData';  // Importa el array de datos

const Misiones = () => {
    return (
        <div>
            <div className="h-auto w-full justify-center items-center">
                <div className="h-auto w-full bg-neutral-900 hover:brightness-120 rounded-lg flex justify-end items-center">
                    <button type="button"
                        className="text-white h-full bg-neutral-800 hover:bg-neutral-900 font-bold rounded-lg text-md px-5 py-2.5 m-2">
                        ---</button>
                    <button type="button"
                        className="text-white h-full bg-neutral-800 hover:bg-neutral-900 font-bold rounded-lg text-md px-5 py-2.5 m-2">
                        Filtrar</button>
                </div>
                <div class="grid grid-cols-1 gap-4">
                {misionesData.map(mision => (  // Itera sobre el array de datos
                    <div key={mision.id} className="grid grid-cols-3 h-auto w-full my-4 bg-neutral-900 hover:brightness-120">
                        <div className="flex items-center justify-center ">
                            <img src={mision.image} className="flex max-h-60 w-full col-span-1 " alt={mision.title} />
                        </div>
                        <div className="col-span-2 h-auto  p-4">
                            <span className="text-redSherwood font-TrajanProBold text-sm">Sherwood alpha 2.6</span>
                            <h2 className="font-TrajanProBold text-white text-xl my-2 hover:brightness-60">{mision.title}</h2>
                            <p className="text-neutral-500 font-sans my-4 text-lg">{mision.description}</p>
                        </div>
                    </div>
                ))}
                </div>


            </div>
        </div>
    );
}

export default Misiones;