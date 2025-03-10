import React from 'react';

const Sidebar = () => {

  const ListItem = ({ text }) => {
    return (
      <div>
        <li className="flex flex-col relative hover:bg-gradient-to-b 
                   from-redSherwood from-75% to-blackSherwood hover:from-redSherwood
                     rounded-lg 
                     cursor-pointer ">
          <a href="#" class="block py-2 px-4  rounded">
            <span class="mr-2">+</span> {text}
          </a>
        </li> 
        <hr class="w-42 h-px my-2 border-0 mx-auto bg-gray-700" />
      </div>
    );
  };

  return (
    <aside class=" flex-col sticky top-0 z-40 bg-gray-800 
      w-64 h-screen justify-start items-start text-white hidden sm:flex">
      <div class="p-4 font-TrajanProBold">
        <h1 class="text-xl ">
          BIENVENIDO SHERWOODIANO
        </h1>
        <hr class="w-50 h-px my-4 border-0 mx-auto bg-gray-300 mb-6" />
        <nav class="text-xs">
          <ul class="space-y-2">
            <ListItem text={"REGISTRARSE"} />
            <ListItem text={"SOCIAL - HABLA CON OTROS JUGADORES"} />
            <ListItem text={"LIBRO DE HISTORIA"} />
            <ListItem text={"CREAR ARCHIVO"} />
            <ListItem text={"REDES SOCIALES"} />
            <ListItem text={"PVP"} />
            <ListItem text={"GUERRA DE CLANES"} />
            <ListItem text={"MISIONES"} />
            <ListItem text={"SUGERENCIAS"} />
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