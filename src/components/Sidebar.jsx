import React from 'react';

const Sidebar = () => {

  return (
    <aside class="flex flex-col sticky top-0 z-40  bg-gray-800 border border-gray-950 w-64 h-screen justify-start items-start text-white">
      <div class="p-4 font-TrajanProBold">
        <h1 class="text-xl ">
          BIENVENIDO SHERWOODIANO
        </h1>
        <nav class="text-xs">
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="block py-2 px-4  rounded"
              >
                <span class="mr-2">+</span> REGISTRARSE
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4  rounded"
              >
                <span class="mr-2">+</span> SOCIAL - HABLA CON OTROS JUGADORES
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4  rounded"
              >
                <span class="mr-2">-</span> LIBRO DE HISTORIA
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4  rounded"
              >
                <span class="mr-2">›</span> CREAR ARCHIVO
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4  rounded"
              >
                <span class="mr-2">›</span> REDES SOCIALES
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4  rounded"
              >
                <span class="mr-2">+</span> PVP
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4  rounded"
              >
                <span class="mr-2">+</span> GUERRA DE CLANES
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4  rounded"
              >
                <span class="mr-2">+</span> MISIONES
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4  rounded"
              >
                <span class="mr-2">+</span> SUGERENCIAS
              </a>
            </li>
          </ul>
        </nav>

        <div class="mt-8">
          <button
            class="font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:shadow-outline text-yellow-200">
            DESCARGAS AQUÍ
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;