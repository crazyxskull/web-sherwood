// src/components/Home.jsx
import React from 'react';
// import DarkbloodArmorSell from '../../assets/DarkbloodArmorSell.png'
// import CharacterSkull from '../../assets/CharacterSkull.png'
import playerList from './PlayerData';

function PlayerCard({onCardClick}) {
    return (
        <div>
            <div class="grid grid-cols-2 gap-4 w-full ">
            {playerList.map((player) => (
                <div key={player.id} onClick={() => onCardClick(player)}
                className="flex flex-row w-full bg-neutral-950 border-2 border-neutral-900 ring-2
                     ring-neutral-950  rounded-t-lg transition-all duration-150 hover:brightness-150 hover:inset-shadow-sm hover:inset-shadow-amber-200 ">
                    <div className="h-auto sm:w-40 w-1/4 " >
                        <img src={player.image} className="h-15 w-auto" />
                    </div>
                    <div className=" w-full mx-2 font-QuadrataOst">
                        <h2 className=" text-slate-300 text-md mt-2">{player.name}</h2>
                        <p className=" text-slate-500  text-sm">{player.description}</p>
                        <div className=" text-xl flex justify-end items-end">
                            <p className="text-amber-200 font-PerrygothicRegular">☆☆☆☆☆☆</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
export default PlayerCard;