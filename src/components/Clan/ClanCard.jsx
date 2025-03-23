import React from 'react'
import ClanData from './ClanData'

const ClanCard = () => {
    return (
        <div>
            <div class="grid grid-cols-2 gap-2 w-full ">
                {ClanData.map(clan => (
                    <div key={clan.id} class="flex flex-row w-full bg-neutral-950/90  rounded-lg transition-all duration-150 hover:brightness-150 ">
                        <div class="h-30 sm:w-40 w-1/4 " >
                            <img src={clan.image} class="h-full rounded-lg" alt={clan.title} />
                        </div>
                        <div class="grid grid-cols-2 col-span-2 w-full mx-2 font-QuadrataOst">
                            <h2 class="col-span-2 text-slate-300 text-md mt-2">{clan.title}</h2>
                            <p class="col-span-2 text-slate-500  text-sm">{clan.description}</p>
                            <div class=" col-span-1 col-start-2 text-xl flex justify-end items-end">
                                <p class="text-amber-200 font-PerrygothicRegular">☆☆☆☆☆☆</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ClanCard