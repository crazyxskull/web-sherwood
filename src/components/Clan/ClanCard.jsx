import { useState } from 'react';
import ClanData from './ClanData'
import ClanInfoModal from './ClanInfoModal'

const ClanCard = ({onCardClick }) => {
    // const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            <div class="grid grid-cols-2 gap-2 w-full ">
                {ClanData.map(clan => (
                    <div key={clan.id}  onClick={() => onCardClick(clan)}
                        className="flex flex-row w-full bg-neutral-950 border-2 border-neutral-900 ring-2
                     ring-neutral-950  rounded-t-lg transition-all duration-150 hover:brightness-150 hover:inset-shadow-sm hover:inset-shadow-amber-200 ">
                        <div className="h-auto sm:w-40 w-1/4 " >
                            <img src={clan.image} class="sm:h-full md:h-20 rounded-lg" alt={clan.title} />
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