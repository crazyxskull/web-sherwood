import React, { useState, useMemo } from 'react'; // Importa useState y useMemo
import ringsData from './RingData';    // Renombrado para claridad
import weaponsData from './WeaponData'; // Renombrado para claridad

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
        <div className="flex flex-col w-full justify-center px-4 md:px-8"> {/* Añadido padding */}
            <h1 className="text-5xl font-Deutsch text-center mb-6 text-textSherwood text-shadow">Items</h1>

            {/* Sección de Botones de Filtro */}
            <div className="flex justify-center space-x-4 mb-8">
                <button
                    onClick={() => handleFilterChange('all')}
                    className={`px-4 py-2 rounded font-EnchantedLand transition-colors ${
                        filter === 'all'
                            ? 'bg-redSherwood text-white'
                            : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                >
                    Todo
                </button>
                <button
                    onClick={() => handleFilterChange('ring')}
                    className={`px-4 py-2 rounded font-EnchantedLand transition-colors ${
                        filter === 'ring'
                            ? 'bg-redSherwood text-white'
                            : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                >
                    Anillos
                </button>
                <button
                    onClick={() => handleFilterChange('weapon')}
                    className={`px-4 py-2 rounded font-EnchantedLand transition-colors ${
                        filter === 'weapon'
                            ? 'bg-redSherwood text-white'
                            : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                >
                    Armas
                </button>
            </div>

            {/* Grid para mostrar los items filtrados */}
            {/* Ajusta grid-cols-* según necesites para diferentes tamaños de pantalla */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2"> {/* Responsive grid */}
                {filteredItems.map(item => (
                    // La key debe ser única para cada item en la lista renderizada
                    <div key={item.id} className="flex flex-col h-auto w-full items-center p-2 hover:scale-105 shadow-2xs shadow-black  rounded-lg  bg-gray-950/80">

                        <div className="flex items-center justify-center h-26"> {/* Contenedor con altura fija para imagen */}
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
                            <h2 className="font-TrajanProBold text-white text-sm">{item.title}</h2>
                            {/* La descripción puede ser opcional o más corta */}
                            <p className="text-neutral-500 font-sans text-xs mt-1">{item.description}</p>
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