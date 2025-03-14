// src/components/Home.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { TfiCalendar } from 'react-icons/tfi'
import 'react-datepicker/dist/react-datepicker.css'; //esto es muy importante al momento de importar los calendarios
import { Link, useNavigate } from 'react-router-dom';
import ButtonRed from '../components/buttons/buttonRed';
import PlayerCard from '../components/Home/PlayerCard';
import ladymarianImage from '../assets/ladymarian.png';
import SherwoodDungeonLogo from '../assets/921_UI_element_SWLogo.png';
import ButtonBrown from './buttons/buttonbrown';



function Registro({ onRegister }) {
    const navigate = useNavigate();
    const [selectedDate, setDate] = useState(null);
    const [formData, setFormData] = useState({
        date: null,
        nickname: '',
        email: '',
        password: '',
        confirmpassword: '',
    });

    const handleDateChange = (date) => {
        setDate(date);
        // Formatear la fecha si es necesario antes de guardarla en formData
        setFormData({ ...formData, date: date });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        onRegister(formData); // Paso los datos del formulario el array
        // setIsLogin(true); // Update the state in the parent component
        // navigate('/Login'); 
        // guardar datos de usuario en el localstorage mientras tanto
        localStorage.setItem('registeredUser', JSON.stringify(formData));
        alert("Usuario creado exitosamente!")
    };

    return (
        <section>
            <div className="flex items-center">
                <Link to="/" className="flex items-center relative w-full py-0 transition hover:scale-105 ">
                    <img src={SherwoodDungeonLogo} class="h-auto w-auto absolute top-[-150px] left-1/2 -translate-x-1/2 z-10" alt="Logo" />
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div className="w-full rounded-lg p-0">
                    <div className="p-6 space-y-4">
                        <h1 className="text-2xl font-TrajanProBold leading-tight tracking-tight text-redSherwood-hov mb-6">
                            Create Account
                        </h1>
                        <form className="flex-col space-y-2 font-TrajanProBold text-sm" onSubmit={handleSubmit}>
                            <div className="flex items-center"> {/* Align label and datepicker vertically */}
                                <label htmlFor="birthdate" className="block w-3/5 mb-2 text-md font-TrajanProBold text-gray-900 ">Date of Birth</label>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange} // Usar la función de cambio de fecha
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                    dateFormat="MMMM d, yyyy"
                                    placeholderText="Select a date"
                                />
                            </div>
                            <div class="flex items-center">
                                <label htmlFor="name" className="block w-2/5 mb-2 text-md font-TrajanProBold text-gray-900 ">Character Name</label>
                                <input type="name" name="nickname" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="Mondongo" required="" onChange={handleChange} value={formData.nickname} />
                            </div>
                            <div class="flex items-center">
                                <label htmlFor="email" className="block w-2/5 mb-2 text-md font-TrajanProBold text-gray-900 ">Email Address</label>
                                <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="name@company.com" required="" onChange={handleChange} value={formData.email} />
                            </div>
                            <div class="flex items-center">
                                <label htmlFor="password" className="block w-2/5 mb-2 text-md font-TrajanProBold text-gray-900 ">Password</label>
                                <input type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required="" onChange={handleChange} value={formData.password} />
                            </div>
                            <div class="flex items-center">
                                <label htmlFor="confirm-password" className="block w-2/5 mb-2 text-md font-TrajanProBold text-gray-900 ">Confirm password</label>
                                <input type="password" name="confirmpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required="" onChange={handleChange} value={formData.confirmpassword} />
                            </div>
                            <div class="flex items-center justify-between mt-6">
                                <ButtonBrown text="< Cancel" />
                                <div class="flex">
                                    <ButtonBrown text="Create >" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Registro;