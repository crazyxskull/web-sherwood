// src/components/Home.jsx
import React from 'react';
import DarkbloodArmorSell from '../../assets/DarkbloodArmorSell.png'
import CharacterSkull from '../../assets/CharacterSkull.png'
import UserLogo from '../../assets/usuario-logo.png'

function PlayerCard() {
    return (
        <div class="flex w-full max-w-full bg-gray-950 rounded-lg border-dungeon">

            <div class="p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                    <p class="text-sm text-gray-600 flex items-center">
                        <svg class="fill-current text-white w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Solo usuarios Registrados
                    </p>
                    <div class="text-gray-200 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                    <p class="text-gray-300 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div class="flex items-center">
                    <img class="w-10 h-10 rounded-full mr-4" alt="Logo" src={UserLogo} />
                    <div class="text-sm">
                        <p class="text-gray-100 leading-none">Jonathan Reinink</p>
                        <p class="text-gray-200">Aug 18</p>
                    </div>
                </div>
                
            </div>
            <div class="h-48 flex-none bg-cover rounded-t text-center overflow-hidden" >
                <img src={CharacterSkull} class="h-full my-4" alt="DarkbloodArmorSell" />
            </div>
        </div>
    );
}
export default PlayerCard;