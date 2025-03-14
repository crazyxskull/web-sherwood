import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {

  const ListItem = ({ text,link }) => {
    return (
      <div>
        <li className="flex flex-col relative hover:bg-gradient-to-b 
                   from-redSherwood from-75% to-blackSherwood hover:from-redSherwood
                     rounded-lg 
                     cursor-pointer ">
            <Link to={link} className="block py-2 px-4  rounded">
              <span class="mr-2">+</span> {text}
            </Link>
        </li>
        <hr class="w-42 h-px my-2 border-0 mx-auto bg-gray-700" />
      </div>
    );
  };

  return (
    <aside class=" flex-col sticky top-0 z-40 bg-gray-800 
      w-58 p-4 h-screen justify-start items-start text-white hidden sm:flex">
      <div class="font-TrajanProBold">
        <h1 class="text-xl">
          BIENVENIDO SHERWOODIANO
        </h1>
        <hr class="w-50 h-px my-4 border-0 mx-auto bg-gray-300 mb-6 " />
        <nav class="text-xs ">
          <ul class="space-y-2">
          <ListItem link={"/Play"} text={"PLAY SHERWOOD!"} />
            <ListItem link={"/"} text={"INICIO"} />
            <ListItem link={"/Profile"} text={"MI PERFIL"} />
            <ListItem link={"/SherwoodMetaverse"} text={"CHAT SHERWOOD"} />
            <ListItem link={"/#"} text={"LIBRO DE HISTORIA"} />
            <ListItem link={"/Clanes"} text={"CLANES"} />
            <ListItem link={"/#"} text={"REDES SOCIALES"} />
            <ListItem link={"/#"} text={"PVP"} />
            <ListItem link={"/#"} text={"GUERRA DE CLANES"} />
            <ListItem link={"/#"} text={"MISIONES"} />
            <ListItem link={"/#"} text={"SUGERENCIAS"} />
          </ul>
        </nav>
        <div class="mt-8">
          <button
            class="font-QuadrataOst py-2 px-4 rounded  focus:outline-none focus:shadow-outline 
            bg-gradient-to-bl shadow-black shadow-2xl border-4  border-white transition duration-100
             hover:scale-105 text-amber-200 hover:text-white">
            DESCARGAS AQUÍ
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;