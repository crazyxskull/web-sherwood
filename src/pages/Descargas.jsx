import React from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';
import ladymarianImage from '../assets/ladymarian.png';

function Descargas() {
    const descargas = [
        { name: 'Cheat Engine', url: 'https://www.cheatengine.org/', description: 'Herramienta para modificar juegos.' },
        { name: 'Shockwave Player', url: 'https://www.adobe.com/shockwave/download/', description: 'Plugin para contenido multimedia interactivo (legado).' },
        { name: 'DatePicker', url: '#', description: 'Librería JavaScript para seleccionar fechas (ejemplo).' }, // Reemplazar con URL real
        { name: 'Google Chrome', url: 'https://www.google.com/chrome/', description: 'Navegador web rápido y seguro.' },
        { name: 'Mozilla Firefox', url: 'https://www.mozilla.org/firefox/', description: 'Navegador web con enfoque en la privacidad.' },
        { name: '7-Zip', url: 'https://www.7-zip.org/', description: 'Compresor/descompresor de archivos gratuito.' },
        { name: 'Notepad++', url: 'https://notepad-plus-plus.org/', description: 'Editor de texto para programadores.' },
        { name: 'Visual Studio Code', url: 'https://code.visualstudio.com/', description: 'Editor de código popular con muchas extensiones.' },
    ];

    return (
        <div
            className="flex flex-col justify-center items-center min-h-screen w-full bg-fixed"
            style={{ backgroundImage: `url(${ladymarianImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >

            <div className="flex w-2/5 h-3/4 flex-col border-sherwood  bg-amber-50 rounded-lg shadow-xl my-12">
                <div className="text-gray-900 font-TrajanProBold p-4">
                    <h2 className="text-2xl mb-4 text-center">Descargas Esenciales</h2>
                    <ul className="list-none">
                        {descargas.map((descarga, index) => (
                            <li key={index} className="py-2 border-b border-gray-300 last:border-b-0">
                                <a
                                    href={descarga.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 font-semibold"
                                >
                                    {descarga.name}
                                </a>
                                <p className="text-gray-700 text-sm">{descarga.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Descargas;