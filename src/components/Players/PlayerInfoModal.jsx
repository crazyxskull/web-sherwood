import { useState } from 'react';
import ButtonRed from '../buttons/buttonRed';

function PlayerInfoModal({ player, openModal, handleClose }) {
    // const [openModal, setOpenModal] = useState(openModal);
    if (!openModal || !player) return null;
    return (
        <div>
            {openModal && (
                <div className="fixed inset-0 z-50 grid place-items-center justify-center bg-black/60 font-TrajanProBold">
                    <div className="flex flex-col sm:w-full md:w-[700px] h-auto border-2 rounded-lg border-textSherwood bg-neutral-900">
                        <div className="justify-between items-center border-b p-2 border-amber-200 flex bg-gray-900 " >
                            <h1 className="font-TrajanProBold text-amber-50">Información</h1>
                            <button onClick={handleClose}>
                                <ButtonRed text="X" />
                            </button>
                        </div>

                        <div className="flex flex-col items-start justify-center p-4">
                            <h2 className="text-amber-50 font-QuadrataOst"> {player.title}</h2>
                            {/* <p className="text-amber-200 font-QuadrataOst">Abreviación: {player.abbreviation || 'N/A'}</p> */}
                            <div class="h-30 sm:w-40 w-1/4 " >
                                <img src={player.image} class="h-full" alt={player.title} />
                            </div>
                            <div className="mt-4">
                                <h2 className="text-amber-50 font-QuadrataOst">Descripción</h2>
                                <p className="text-amber-200 font-Quadrata">{player.description}</p>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-amber-50 font-QuadrataOst">Armas</h2>
                                {/* <p className="text-amber-200 font-Quadrata">Lista de miembros del player</p> */}
                            </div>
                            <div className="mt-4">
                                <h2 className="text-amber-50 font-QuadrataOst">Clan</h2>
                                {/* <p className="text-amber-200 font-Quadrata">Lista de miembros del player</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PlayerInfoModal;