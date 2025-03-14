// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // el useNavigate es para la redireccion una vez se validen los datos
import ButtonRed from './buttons/buttonRed';
import ladymarianImage from '../assets/ladymarian.png';
import SherwoodDungeonLogo from '../assets/921_UI_element_SWLogo.png';
import FondoMaidmarian from '../assets/FondoMaidmarian.png'
import ButtonBrown from './buttons/buttonbrown';

function Login({ registeredUsers }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        // Revisar si hay datos de usuario en el localstorage
        const storedUser = localStorage.getItem('registeredUser');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setEmail(parsedUser.email || '');
            setPassword(parsedUser.password || '');
        }
    }, []);

    // console.log("console", email, password)
    // const validation = (e) => { // Recibe el objeto evento
    //     e.preventDefault(); // Previene el comportamiento predeterminado de envío del formulario
    //     console.log("se ejecuta el validation", email, password);
    //     const user = registeredUsers.find(user => user.email === email && user.password === password);
    //     // if (email === 'crazy@gmail.com' && password === '123') {
    //     // La información del login ya no es necesaria, se puede eliminar
    //     // navigate('/'); // Redirecciona programáticamente al home
    //     if (user) {
    //         alert("Ingreso exitoso!", user)
    //         navigate('/');
    //     } else {
    //         alert('Credenciales inválidas');
    //     }
    // };
    const validation = (e) => {
        e.preventDefault();

        // Create a temporary array to hold users
        const allUsers = [];

        // Get user from localStorage
        const storedUser = localStorage.getItem('registeredUser');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            allUsers.push(parsedUser); // Agrega el usuario del localStorage al array
        }

        // Add registered users to the array
        if (registeredUsers && registeredUsers.length > 0) {
            allUsers.push(...registeredUsers);
        }
        // Validate against ALL users
        const user = allUsers.find(user => user.email === email && user.password === password);

        if (user) {
            alert("Ingreso exitoso!", user)
            navigate('/');
        } else {
            alert('Credenciales inválidas');
        }
    };

    const handleSetEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSetPasswordChange = (e) => {
        setPassword(e.target.value);
    };


    return (
        <section>
            {/* <div class="bg-[url('/assets/FondoMaidmarian.png')] bg-cover bg-no-repeat bg-center h-64 w-full"></div> */}
            <div className="flex items-center">
                <Link to="/" className="flex items-center relative w-full py-0 transition hover:scale-105 ">
                    <img src={SherwoodDungeonLogo} class="h-auto w-auto absolute top-[-150px] left-1/2 -translate-x-1/2 z-10" alt="Logo" />
                </Link>
            </div>
            <div className="flex flex-col relative items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div className="w-full p-0">
                    <div className="p-6 space-y-4">
                        {/* <img src={FondoMaidmarian} class="h-auto w-full" /> */}
                        <h1 className="text-2xl font-TrajanProBold leading-tight tracking-tight text-redSherwood-hov mb-6">
                            Iniciar Sesion
                        </h1>
                        <form className="flex flex-col space-y-2 font-TrajanProBold text-sm" onSubmit={validation}>
                            <div class="flex items-center">
                                <label htmlFor="email" className="block mb-2 text-md w-2/5 text-gray-900 ">Account Name</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border shadow  border-gray-300 
                                        text-gray-900 rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="name@company.com" required=""
                                    value={email}
                                    onChange={handleSetEmailChange} />
                            </div>
                            <div class="flex items-center">
                                <label htmlFor="password" className="w-2/5 block mb-2 text-md text-gray-900 ">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required="" value={password}
                                    onChange={handleSetPasswordChange} />
                            </div>
                            <div class="flex justify-end mt-6">
                                <div class="flex items-center text-right text-redSherwood text-sm mr-4">
                                    <span>Olvidaste tu contrasena?</span>
                                </div>

                                <div class="flex items-center">
                                    <ButtonBrown text="LOGIN" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </section >
    );
}
export default Login;