import { useState } from 'react';
import ButtonRed from '../buttons/buttonRed';
import imageList from './data/ProfileImage';
import ButtonBrown from '../buttons/buttonbrown';

let initialCounters = [0]; // Ejemplo: solo 1 tipo por ahora

export const CrearPlayer = () => {
    const [openModal, setOpenModal] = useState(false);
    const [counters, setCounters] = useState(initialCounters);
    const [selectedColor, setSelectedColor] = useState('#000000');
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % imageList.length
        );
    };
    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + imageList.length) % imageList.length
        );
    };

    return (
        <div>
            <button onClick={() => setOpenModal(true)}>
                <ButtonRed text="Agregar nuevo Jugador" />
            </button>

            {openModal && (
                <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 font-TrajanProBold">
                    <div className="relative mx-auto w-full max-w-xl rounded-lg border-1 border-textSherwood bg-neutral-950 shadow-2xl">
                        <button
                            onClick={() => setOpenModal(false)}
                            className="absolute top-2 right-2 flex items-center justify-center"
                        >
                            <ButtonRed text="X" />
                        </button>

                        <div className="flex justify-between items-center bg-gray-900 p-6 border-b border-slate-300">
                            <h3 className="text-2xl text-textSherwood">Crear nuevo Jugador</h3>
                        </div>

                        <form className="p-6 space-y-5 text-sm text-slate-100">
                            <div className="grid grid-cols-3 items-center gap-4">
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    className="col-span-2 bg-black/90 border border-textSherwood/90 rounded-md p-2.5"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-3 items-center gap-4">
                                <label>Descripcion</label>
                                <input
                                    type="text"
                                    name="descripcion"
                                    className="col-span-2 bg-black/90 border border-textSherwood/90 rounded-md p-2.5"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-3 items-center gap-4">
                                <label>Color</label>
                                <input
                                    type="color"
                                    name="color"
                                    value={selectedColor}
                                    onChange={(e) => setSelectedColor(e.target.value)}
                                    className="w-20 h-20 rounded-md"
                                />

                            </div>

                            {/* Imagen con flecha para cambiar */}
                            <div className="grid grid-cols-3 items-center gap-4">
                                <label>Personaje</label>
                                <div className="col-span-2 flex items-center gap-4"  >
                                    <button
                                        type="button"
                                        onClick={handlePrevImage}
                                        className=" text-black px-3 py-1 rounded"
                                    >
                                        <ButtonRed text="⮜" />
                                    </button>
                                    <img
                                        src={imageList[currentImageIndex].image}
                                        alt={imageList[currentImageIndex].name}
                                        className={`h-24 rounded-md border border-white`}style={{ backgroundColor: selectedColor }}
                                    />
                                    <button
                                        type="button"
                                        onClick={handleNextImage}
                                        className=" text-black px-3 py-1 rounded"
                                    >
                                        <ButtonRed text="➤" />
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 items-center gap-4">
                                <label>Clan</label>
                                <input
                                    type="text"
                                    name="clan"
                                    className="col-span-2 bg-black/90 border border-textSherwood/90 rounded-md p-2.5"
                                    required
                                />
                            </div>

                            <div className="flex justify-between pt-4">
                                <button onClick={() => setOpenModal(false)} type="button">
                                    <ButtonRed text="Cancelar" />
                                </button>
                                <ButtonRed text="Agregar" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
