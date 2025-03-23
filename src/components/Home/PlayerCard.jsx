// src/components/Home.jsx
import React from 'react';
import DarkbloodArmorSell from '../../assets/DarkbloodArmorSell.png'
import CharacterSkull from '../../assets/CharacterSkull.png'
import UserLogo from '../../assets/usuario-logo.png'

function PlayerCard() {
    return (
        <div class="flex flex-row w-full bg-neutral-950/90 rounded-lg ">
            <div class="h-auto sm:w-40 w-1/4 " >
                <img src={UserLogo} class="h-full" />
            </div>
            <div class="grid grid-cols-2 col-span-2 w-full mx-2 font-QuadrataOst">
                <h2 class="col-span-2 text-slate-300 text-md mt-2">Crazy-Skull</h2>
                <p class="col-span-2 text-slate-500  text-sm">El mas genial</p>
                <div class=" col-span-1 col-start-2 text-xl flex justify-end items-end">
                    <p class="text-amber-200 font-PerrygothicRegular">☆☆☆☆☆☆</p>
                </div>
            </div>
            {/* <div class="text-gray-200 font-TrajanProBold text-lg mb-2 p-4">
                <h2>Username</h2>
                <p class="text-gray-300 font-TrajanProReg text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>

            </div>
            <div class="flex justify-end items-center">
                <img class="w-10 h-10 rounded-full mr-4" alt="Logo" src={UserLogo} />
                <div class="text-xl">
                    <p class="text-amber-200 font-PerrygothicRegular">☆☆☆☆☆☆</p>
                </div>
            </div> */}
        </div>

    );
}
export default PlayerCard;