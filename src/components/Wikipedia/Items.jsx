import React, { useState, useMemo, Suspense } from 'react';
import ringsData from './RingData';
import weaponsData from './WeaponData';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import GladiusModel from '../../models/Armas/GladiusModel';
import ButtonRed from '../buttons/buttonRed';
import ButtonBrown from '../buttons/buttonbrown';

const allItems = [...ringsData, ...weaponsData];

// Componente con rotación constante
const RotatingModel = ({ children }) => {
    const ref = React.useRef();
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.01; // Velocidad de rotación
        }
    });
    return <group ref={ref}>{children}</group>;
};

const Items = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [filter, setFilter] = useState('all');
    const [bgIndex, setBgIndex] = useState(0);

    const bgColors = ['bg-neutral-900', 'bg-red-900', 'bg-blue-900', 'bg-green-900'];

    const handleItemClick = (item) => {
        setSelectedItem(prev => prev?.id === item.id ? null : item);
        setBgIndex(0); // reset background when selecting new item
    };

    const renderModelComponent = (item) => {
        if (!item) return null;

        switch (item.id) {
            case 'gladius':
                return <GladiusModel scale={1.5} />;
            default:
                return <GladiusModel scale={1.5} />;
        }
    };

    const filteredItems = useMemo(() => {
        if (filter === 'all') {
            return allItems;
        }
        return allItems.filter(item => item.type === filter);
    }, [filter]);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const handleNextBg = () => {
        setBgIndex((prev) => (prev + 1) % bgColors.length);
    };

    const handlePrevBg = () => {
        setBgIndex((prev) => (prev - 1 + bgColors.length) % bgColors.length);
    };

    return (
        <div className="flex flex-col bg-gray-900 w-full py-4 md:px-8 min-h-screen">
            <h1 className="text-5xl font-Deutsch text-center mb-6 text-textSherwood text-shadow">Items</h1>

            {/* Botones de Filtro */}
            <div className="flex justify-center space-x-4 mb-8">
                {['all', 'ring', 'weapon'].map((type) => (
                    <button
                        key={type}
                        onClick={() => handleFilterChange(type)}
                        className={`px-4 py-2 rounded font-EnchantedLand transition-colors ${filter === type
                            ? 'bg-redSherwood text-white'
                            : 'bg-gray-700 text-white hover:bg-gray-600'
                            }`}
                    >
                        {type === 'all' ? 'Todo' : type === 'ring' ? 'Anillos' : 'Armas'}
                    </button>
                ))}
            </div>

            {/* Grid principal */}
            <div className="flex flex-col-2 gap-4">
                {/* Panel de detalles */}
                <div className="w-2/4 bg-black/90  rounded-lg shadow-lg font-TrajanProBold text-white relative">
                    <div className="flex justify-between items-center bg-gradient-to-b border-1  border-amber-200
                     from-neutral-950 to-black rounded-t-lg px-4 py-2">
                        <span className="text-2xl text-textSherwood font-QuadrataOst ">Item Info</span>
                        <div onClick={() => setSelectedItem(null)}><ButtonRed text="X" /></div>
                    </div>
                    {/* Modelo 3D */}
                    <div className="flex w-full justify-center items-center border-1  border-amber-200 h-150">
                        {selectedItem && (
                            <div className="w-full h-[500px] items-center justify-center relative">
                                <div className="text-start p-4 flex flex-col justify-start items-start">
                                    <span className="text-green-400 text-sm">{selectedItem.type?.toUpperCase()}</span>
                                    <h2 className="text-xl text-yellow-200">{selectedItem.title}</h2>
                                    <p className="text-sm text-gray-300 font-serif">{selectedItem.description}</p>
                                </div>
                                <div className="flex justify-center items-center w-full h-full absolute top-0 left-0">
                                    <Canvas camera={{ fov: 50, position: [0, 2, 6] }}>
                                        <Suspense fallback={null}>
                                            <ambientLight intensity={0.2} />
                                            <directionalLight position={[5, 10, 7]} intensity={1.0} castShadow />
                                            <Stage environment="city" intensity={0.6} shadows={false}>
                                                <RotatingModel>
                                                    {renderModelComponent(selectedItem)}
                                                </RotatingModel>
                                            </Stage>
                                        </Suspense>
                                        <OrbitControls enableZoom={true} />
                                    </Canvas>
                                </div>
                                <div className="flex flex-row justify-between items-center w-2/4 h-9 bg-neutral-900/80 rounded-xl absolute bottom-1 left-1/2 transform -translate-x-1/2">
                                    <div onClick={handlePrevBg}><ButtonRed text="<" /></div>
                                    <div onClick={handleNextBg}><ButtonRed text=">" /></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Grid de ítems */}
                <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-2 p-4 bg-gray-950/90 rounded-lg ">
                    {filteredItems.map(item => {
                        const isSelected = selectedItem?.id === item.id;
                        const bgColor = isSelected ? bgColors[bgIndex] : 'bg-neutral-800';

                        return (
                            <div key={item.id} className="flex flex-col h-auto w-full items-center rounded-lg">
                                <div className="flex items-center justify-center ">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            onClick={() => handleItemClick(item)}
                                            className={`h-14 w-14 object-contain hover:scale-105 hover:inset-shadow-sm hover:inset-shadow-amber-200 
                                            ${bgColor} ring-2 ring-neutral-950 shadow-2xl shadow-black`}
                                            alt={item.title}
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                        />
                                    ) : (
                                        <div className="h-12 w-12 bg-gray-700 flex items-center justify-center text-xs text-gray-400">?</div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                    {filteredItems.length === 0 && (
                        <p className="col-span-full text-center text-neutral-400 mt-4">
                            No hay items que mostrar para este filtro.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Items;
