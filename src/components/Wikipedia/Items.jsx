import React, { useState, useMemo, Suspense } from 'react'; // <-- Añade Suspense aquí
import ringsData from './RingData';    // Renombrado para claridad
import weaponsData from './WeaponData'; // Renombrado para claridad

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei'; // Stage ayuda con iluminación y centrado
import GladiusModel from '../../models/Armas/GladiusModel'; // Importa tu nuevo componente

// Combina los datos UNA SOLA VEZ fuera del componente o con useMemo
// Asegúrate que cada item tenga la propiedad 'type' como se indicó antes
const allItems = [...ringsData, ...weaponsData];

const Items = () => {
    // Estado para guardar el filtro actual ('all', 'ring', 'weapon')
    const [filter, setFilter] = useState('all'); // Inicia mostrando todo

    // Filtra los items basándose en el estado 'filter'
    // useMemo evita recalcular esto en cada render si allItems o filter no cambian
    const filteredItems = useMemo(() => {
        if (filter === 'all') {
            return allItems; // Muestra todo
        }
        return allItems.filter(item => item.type === filter); // Filtra por tipo
    }, [filter]); // La dependencia es el estado 'filter'

    // Función para manejar el clic en los botones de filtro
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <div className="flex flex-col bg-gray-900 w-full py-4 md:px-8 min-h-screen"> {/* Añadido padding */}
            <h1 className="text-5xl font-Deutsch text-center mb-6 text-textSherwood text-shadow">Items</h1>
            <div style={{ height: '400px', width: '100%', background: '#020202' }}> {/* Fondo un poco más claro */}
                <Canvas camera={{ fov: 50, position: [0, 2, 6] }}> {/* Cámara un poco más atrás y FOV ajustado */}

                    <Suspense fallback={null}>
                        {/* --- ILUMINACIÓN MANUAL --- */}
                        {/* Luz ambiental básica para que nada esté completamente negro */}
                        <ambientLight intensity={0.2} />
                        {/* Luz direccional para dar forma y reflejos */}
                        <directionalLight
                            position={[5, 10, 7]} // Posición de la luz (viene desde arriba-derecha-adelante)
                            intensity={1.0}      // Intensidad
                            castShadow           // Opcional: para que arroje sombras
                        />

                        {/* --- EL MODELO --- */}
                        <GladiusModel
                            scale={1.5} // Mantenemos la escala
                            position={[0, -0.5, 0]} // Bajamos un poco el modelo por si el pivote está raro
                            rotation={[0, Math.PI / 4, 0]}
                        />
                        <axesHelper args={[3]} />
                        {/* Un helper de grid en el suelo */}
                        <gridHelper args={[10, 10]} />
                        <Stage environment="city" intensity={0.6} shadows={false}>
                            <GladiusModel
                                scale={1.5}
                                rotation={[0, Math.PI / 4, 0]}
                            />
                        </Stage>
                    </Suspense>
                    <OrbitControls enableZoom={true} />
                </Canvas>
            </div>
            {/* Sección de Botones de Filtro */}
            <div className="flex justify-center space-x-4 mb-8">
                <button
                    onClick={() => handleFilterChange('all')}
                    className={`px-4 py-2 rounded font-EnchantedLand transition-colors ${filter === 'all'
                        ? 'bg-redSherwood text-white'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                        }`}
                >
                    Todo
                </button>
                <button
                    onClick={() => handleFilterChange('ring')}
                    className={`px-4 py-2 rounded font-EnchantedLand transition-colors ${filter === 'ring'
                        ? 'bg-redSherwood text-white'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                        }`}
                >
                    Anillos
                </button>
                <button
                    onClick={() => handleFilterChange('weapon')}
                    className={`px-4 py-2 rounded font-EnchantedLand transition-colors ${filter === 'weapon'
                        ? 'bg-redSherwood text-white'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                        }`}
                >
                    Armas
                </button>
            </div>

            {/* Grid para mostrar los items filtrados */}
            {/* Ajusta grid-cols-* según necesites para diferentes tamaños de pantalla */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-2 p-4"> {/* Responsive grid */}
                {filteredItems.map(item => (
                    // La key debe ser única para cada item en la lista renderizada
                    <div key={item.id} className="flex flex-col h-auto w-full items-center p-2 hover:scale-105 shadow-2xs shadow-black  rounded-lg  bg-gray-950/80">

                        <div className="flex items-center justify-center h-20"> {/* Contenedor con altura fija para imagen */}
                            {item.image ? (
                                <img
                                    src={item.image}
                                    className="h-14 w-14 object-contain hover:scale-105" // object-contain es útil
                                    alt={item.title}
                                    onError={(e) => { e.target.style.display = 'none'; }} // Oculta si hay error
                                />
                            ) : (
                                <div className="h-12 w-12 bg-gray-700 flex items-center justify-center text-xs text-gray-400">?</div> // Placeholder
                            )}
                        </div>

                        <div className="flex flex-col justify-center items-center text-center mt-2">
                            <h2 className="font-TrajanProBold text-white text-xs">{item.title}</h2>
                            {/* La descripción puede ser opcional o más corta */}
                            <p className="text-neutral-500 font-serif text-xs mt-1">{item.description}</p>
                        </div>
                    </div>
                ))}
                {/* Mensaje si no hay items que coincidan con el filtro */}
                {filteredItems.length === 0 && (
                    <p className="col-span-full text-center text-neutral-400 mt-4">
                        No hay items que mostrar para este filtro.
                    </p>
                )}
            </div>
        </div>
    );
}

export default Items;