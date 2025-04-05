import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';
import ladymarianImage from '../assets/ladymarian.png';
import fulanitoGif from '../assets/cosmeFulanito.gif'; // Importa tu GIF

const Sugerencias = () => {
    const [suggestion, setSuggestion] = useState('');
    const [submittedSuggestions, setSubmittedSuggestions] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (suggestion.trim() !== '') {
            setSubmittedSuggestions([...submittedSuggestions, suggestion]);
            setSuggestion('');
        }
    };

    const handleChange = (e) => {
        setSuggestion(e.target.value);
    };

    return (
        <div
            className="flex justify-center items-center flex-col min-h-screen w-full bg-fixed"
            style={{ backgroundImage: `url(${ladymarianImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex w-full sm:w-2/5 h-auto flex-col border-sherwood bg-amber-50 rounded-lg shadow-xl my-12">
                <div className="text-gray-900 p-4">
                    <h2 className="text-xl mb-4 text-center font-TrajanProBold">Lo molesto con una sugerencilla para mi paginilla porfavor?</h2>
                    {/* GIF antes del formulario */}
                    <img src={fulanitoGif} alt="Suggestion GIF" className="mx-auto mb-4 rounded-md" />

                    <form onSubmit={handleSubmit} className="mb-4">
                        <textarea
                            id="suggestion"
                            name="suggestion"
                            value={suggestion}
                            onChange={handleChange}
                            rows="4"
                            className="text-sm shadow appearance-none border rounded w-full py-2 px-3 bg-white font-TrajanProBold text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Escribe tu sugerencia aquí..."
                        />
                        <button
                            type="submit"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
                        >
                            Enviar Sugerencia
                        </button>
                    </form>

                    {submittedSuggestions.length > 0 && (
                        <div>
                            <h3 className="text-lg mb-2">Sugerencias enviadas:</h3>
                            <ul className="list-disc list-inside text-sm font-medium">
                                {submittedSuggestions.map((s, index) => (
                                    <li key={index} className="py-2 border-b border-gray-300 last:border-b-0 text-gray-700">
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sugerencias;