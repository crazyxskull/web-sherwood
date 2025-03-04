// src/components/Home.jsx
import React from 'react';

console.log("este es un print desde el app.jsx")

function Header() {
    return (
        <div>
            <div class="grid grid-cols-6 gap-4 justify-between sticky top-0 z-40 h-16 items-center gap-x-4 border-b border-gray-200 bg-sky-800 
                px-2 sm:px-4 shadow-sm transition-all">
                <div class="col-span-1 col-6 bg-gray-300">
                    LOGO
                </div>
                <div class="col-span-4 col-2 bg-gray-300">
                    CONTENIDO
                </div>
                <div class="col-span-1 col-1 bg-gray-300">
                    LOGIN
                </div>

            </div>
        </div>
    );
}
export default Header;