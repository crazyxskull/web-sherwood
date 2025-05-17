import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight, AiOutlineDownload, AiFillHome, AiFillBook, AiOutlineUser, AiOutlineTeam, AiOutlineMessage, AiFillStar } from "react-icons/ai";
import { FiMenu } from 'react-icons/fi'; // Feather Icons

import ButtonRed from '../buttons/buttonRed';
import ButtonBrown from '../buttons/buttonbrown';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);


  // const ListItem = ({ text, link, icon: Icon }) => {
  //   return (
  //     <div>
  //       <li className="flex flex-col hover:bg-gray-900/70 rounded-lg cursor-pointer transition-all duration-150 hover:text-sm">
  //         <Link to={link} className="flex items-center py-2 rounded gap-2">
  //           {Icon && <Icon className="text-lg" />}
  //           {text}
  //         </Link>
  //       </li>
  //       <hr className="w-42 h-px my-2 border-0 mx-auto bg-gray-700" />
  //     </div>
  //   );
  // };

  const menuItems = [
    { link: "/", text: "INICIO", icon: AiFillHome },
    { link: "/Wiki", text: "WIKI", icon: AiFillBook },
    { link: "/SherwoodMetaverse", text: "CHAT SHERWOOD", icon: AiOutlineMessage },
    { link: "/Profile", text: "MI PERFIL", icon: AiOutlineUser },
    { link: "/Clanes", text: "CLANES", icon: AiOutlineTeam },
    { link: "/Jugadores", text: "JUGADORES", icon: AiFillStar },
    { link: "/Sugerencias", text: "SUGERENCIAS", icon: AiOutlineMessage },
  ];
  return (
    <aside class={`flex-col sticky top-0 z-40 min-h-screen text-white hidden sm:flex bg-gray-800 
      ${isOpen ? "w-58" : " w-20"} duration-300 relative`}>
      <div class="flex items-center justify-center w-full mt-4">
        <FiMenu class={`text-gray-300 w-full hover:scale-115 hover:text-white duration-200 cursor-pointer 
          ${!isOpen && "rotate-180"}`} 
          onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div class={`font-QuadrataOst p-4 justify-start items-start ${isOpen ? "w-auto" : "hidden"}`}>
        <h1 class="text-xl font-QuadrataOst  text-textSherwood ">
          BIENVENIDO SHERWOODIANO
        </h1>
        <hr class="w-50 h-px my-4 bg-gray-300 mb-6 " />
        <nav class="text-xs ">
          <ul class="">
            {menuItems.map(({ link, text, icon: Icon }) => (
              <li key={link} className="flex flex-col cursor-pointer transition-all duration-150 hover:text-sm">
                <Link to={link} className={`flex items-center rounded-lg  hover:bg-redSherwood gap-3 px-3 py-2 justify-start`}>
                  {Icon && <Icon className="text-lg" />}
                  {text}
                </Link>
                <hr className="w-42 h-px my-2 border-0 mx-auto bg-gray-700" />
              </li>
            ))}
          </ul>
        </nav>
        <div class="mt-8 justify-start items-end flex">
          <Link to="/Descargas">
            {/* <Button text="DESCARGAS"/> */}
            <ButtonBrown text="DESCARGAS" />

          </Link>
        </div>
      </div>
      <div class={`font-QuadrataOst w-full ${isOpen ? "hidden" : ""}`}>
        <hr class="w-full  my-4 border-0 bg-gray-500 mb-6 " />
        <nav>
          <ul class="">
            {menuItems.map(({ link, icon: Icon }) => (
              <li key={link} className="flex flex-col w-full hover:bg-gray-900/70">
                <Link to={link} className={`flex cursor-pointer items-center rounded-lg my-2 py-4 justify-center`}>
                  {Icon && <Icon className="text-xl" />}
                  {/* {text} */}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div class="flex mt-8 justify-center items-end">
          <Link to="/Descargas">
            <button
              class="py-2 px-4 rounded transition duration-100
             hover:scale-105 text-white hover:bg-redSherwood">
              <AiOutlineDownload className="inline-block text-lg" />
            </button>
          </Link>
        </div>
      </div>
      {/* <ButtonRed class="flex justify-end items-end " text="Cerrar Session"/> */}
    </aside>
  );
};

export default Sidebar;