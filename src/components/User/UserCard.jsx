import React from 'react'
import DarthProfile from '../../assets/profile/darth-rana.jpg';
import { createRoot } from 'react-dom/client';
import User3D from './User3D';
// import GladiusModel from '../../models/Armas/GladiusModel';
// import User3D from './User3D';

// createRoot(document.getElementById('root')).render(<User3D />)

const UserCard = () => {
    return (
        <article class="grid grid-cols ">
            <div class="w-full bg-amber-50 border-sherwood">
                <div class="grid grid-cols-2 items-start ">
                    <div class="flex flex-col mr-2">
                        {/* <h5 class="mb-1 text-xl font-QuadrataOst text-white">Crazy-Skull</h5> */}
                        <span class="text-sm font-TrajanProBold text-redSherwood-900 flex flex-row my-2">Nickname:
                            <p class="font-QuadrataOst ml-2 text-sm text-redSherwood">DarthZannah</p>
                        </span>
                        <span class="text-sm font-TrajanProBold text-redSherwood-900 flex flex-row my-2">Email:
                            <p class="font-QuadrataOst ml-2 text-sm text-redSherwood">DarthZannah@dungeon.com</p>
                        </span>
                        <span class="text-sm font-TrajanProBold text-redSherwood-900 flex flex-row my-2">
                            afiliacion:
                            <p class="font-QuadrataOst ml-2 text-sm text-redSherwood">Clan sith(SH)</p>
                        </span>
                    </div>
                    <div class="flex justify-end items-start">
                        <img class="w-40 h-auto rounded-lg mr-2 bg-black-900 border-2 border-redSherwood" src={DarthProfile} />
                    </div>
                    <div class="flex col-span-2">
                        <span class="flex flex-row text-sm font-TrajanProBold text-redSherwood-900 my-2">Datos de jugador:
                            <p class="font-QuadrataOst ml-2 text-sm text-redSherwood">Clanes GE,DM,OCT,IS,HK,BK</p>
                        </span>
                    </div>
                    <div class="flex col-span-2">
                        <span class="flex flex-row text-sm font-TrajanProBold text-redSherwood-900 my-2">Estadisticas:
                            <p class="font-QuadrataOst ml-2 text-sm text-redSherwood">w 23- l1- d3 FBHS: Liga hispana 2021<br />
                                sl Liga Hispana 2022 
                                Liga sherwood pvp 2024 winner</p>
                        </span>
                    </div>
                </div>
            </div>
            <div class=" flex">
                <User3D class="bg-amber-50 flex "/>
            </div>
        </article>
    )
}

export default UserCard