import React, { useState } from 'react';
import ButtonRed from '../buttons/buttonRed';
import ButtonBrown from '../buttons/buttonbrown';

const AgregarClan = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <button onClick={() => setOpenModal(true)}>
                <ButtonBrown text="Crear clan" />
            </button>

            {openModal && (
                <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 font-TrajanProBold">
                    <div className="relative mx-auto w-full max-w-xl rounded-2xl bg-slate-900 shadow-2xl">
                        <button
                            onClick={() => setOpenModal(false)}
                            className="absolute top-2 right-2 w-10 h-10 rounded-full bg-gradient-to-br bg-redSherwood-700 
        shadow-2xl shadow-black-950 border-2 border-[#d9b76f] text-white text-xl  
        flex items-center justify-center hover:bg-red-900 transition"
                        >
                            X
                        </button>

                        <div className="flex justify-between items-center p-6 border-b border-slate-300">
                            <h3 className="text-2xl text-textSherwood">Crear nuevo clan</h3>
                        </div>


                        <form className="p-6 space-y-5 text-sm text-slate-100">
                            <div className="grid grid-cols-3 items-center gap-4">
                                <label>Nombre del clan</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    className="col-span-2 bg-black/90 border border-textSherwood/90 rounded-md p-2.5"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-3 items-center gap-4">
                                <label>Abreviación</label>
                                <input
                                    type="text"
                                    name="abreviacion"
                                    className="col-span-2 bg-black/90 border border-textSherwood/90 rounded-md p-2.5"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-3 items-center gap-4">
                                <label>Color del clan</label>
                                <input
                                    type="color"
                                    name="color"
                                    defaultValue="#000000"
                                    className="w-20 h-20 rounded-md"
                                />
                            </div>

                            <div className="grid grid-cols-3 items-center gap-4">
                                <label>Escudo</label>
                                <input
                                    type="file"
                                    name="escudo"
                                    accept="image/*"
                                    className="col-span-2 bg-black/90 border border-textSherwood/90 rounded-md p-2.5"
                                />
                            </div>

                            <div className="grid grid-cols-3 items-center gap-4">
                                <label>Líder asignado</label>
                                <input
                                    type="text"
                                    name="lider"
                                    className="col-span-2 bg-black/90 border border-textSherwood/90 rounded-md p-2.5"
                                    required
                                />
                            </div>

                            <div className="flex justify-between pt-4">
                                <ButtonRed text="Cancelar" onClick={() => setOpenModal(false)} />
                                <ButtonRed text="Agregar" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AgregarClan;
