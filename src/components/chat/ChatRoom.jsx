import React, { useState, useEffect } from 'react'
import { FaArrowRight, FaSearch } from "react-icons/fa";


const ChatRoom = () => {
    const [message, setMessage] = useState('');
    const [nickname, setNickname] = useState('');
    const [userType, setUserType] = useState(''); //valor por defecto
    const [chatMessage, setChatMessage] = useState([]) // aca se pone un array para los mensajes


    const sendMessage = () => {
        if (message.trim() !== '' & nickname.trim() !== '') {  //aca se valida si es que esta el mensaje y nombre para poder funcionar
            // if (message.trim() !== '') {
            const newMessage = {
                nickname: nickname,
                text: message,
                type: userType,
                timestamp: Date.now(), // Agregamos un timestamp que nos dara la data del mensaje
            };
            setChatMessage([...chatMessage, newMessage]); // se agrega al array
            setMessage('') //se deja el input vacio (limpio)
        } else{
            alert("Debe incluir un nombre de usuario, no sea down..")
        }
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    // Nueva función para manejar el evento onKeyDown
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Evita que se inserte una nueva línea en el input
            sendMessage();
        }
    };

    const handleNicknameChange = (e) => { //estas constantes se encargan de recibir los parametros utilizando el e.taget.value y enviandolo al set
        setNickname(e.target.value);
    }
    const handleUsertypeChange = (e) => {
        setUserType(e.target.value);
    }

    const getMessageColor = (type) => {
        switch (type) {
            case 'admin':
                return 'text-red-500';
            case 'player':
                return 'text-white';
            case 'friend':
                return 'text-sky-500';
            default:
                return 'text-yellow-500';

        }

    };
    useEffect(() => { //elimina los mensajes luego de 8 segundos
        const timer = setTimeout(() => {
            if (chatMessage.length > 0) {
                setChatMessage([]); // Elimina TODOS los mensajes
            }
        }, 8000); // 8 segundos

        // Limpieza del timer al desmontar el componente o al cambiar chatMessages
        return () => clearTimeout(timer);
    }, [chatMessage]);


    // console.log(getMessageColor('player'))
    return (
        <div class="flex flex-col w-full " >
            <div class="grid grid-cols-2 gap-4 w-2/4  rounded-lg  p-4">
                <div class=" flex flex-row w-full grid-cols-2">
                    <input class="flex w-1/4 pl-2 pr-2 bg-emerald-400/60 text-white  focus:outline-none
                    "placeholder='Nickname..' value={nickname} onChange={handleNicknameChange} />
                </div>
                <form class="flex w-full justify-start items-start">
                    <label for="underline_select" class="sr-only">Tipo jugador</label>
                    <select id="underline_select" class="block pl-2 py-2.5 px-0 w-full text-sm text-black
                     bg-white border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        value={userType}
                        onChange={handleUsertypeChange}>
                        <option selected>Choose a User</option>
                        <option value="admin">Aministrador</option>
                        <option value="player">Jugador</option>
                        <option value="friend">Amigo</option>
                        <option value="guest">Invitado</option>
                    </select>
                </form>
            </div>
            <nav className="flex flex-col-reverse h-48 overflow-y-hidden hover:overflow-y-auto p-2 bg-black-900/20 mx-4 rounded-lg ">
                <div className="flex flex-col ">
                    {chatMessage.map((msg, index) => (
                        <div key={index} className="mb-1">
                            <span className={`font-bold text-sm ${getMessageColor(msg.type)}`}>
                                {msg.nickname}:{' '}
                            </span>
                            <span className={`font-bold text-sm ${getMessageColor(msg.type)}`}>
                                {msg.text}
                            </span>
                        </div>
                    ))}
                </div>
            </nav>
            <div class="flex w-full justify-start items-end rounded-lg  p-4">
                <div class=" flex flex-row w-full grid-cols-2">
                    <input class="flex w-full py-2 pl-2 pr-2 text-white border-2
                    border-bgSherwod/10 transition duration-300 ease 
                    focus:outline-none focus:border-bgSherwod focus:border-1 focus:bg-black/60 rounded-md mr-2
                    "placeholder='Click to type..'
                        value={message} //el valor del texto ingresado en el input se asignara al message 
                        onChange={handleMessageChange} //activa el manejador de cambios
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={sendMessage} //agrega la funcion al boton para enviar el mensaje
                        class="flex h-12 w-12 justify-center items-center
                     text-white bg-gray-800 rounded-lg  transition hover:bg-slate-700">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ChatRoom