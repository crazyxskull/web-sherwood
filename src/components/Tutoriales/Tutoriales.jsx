import React, { useState } from 'react'
import browser from '../../assets/SherwoodVersion/war.png'
import ladymarian3 from '../../assets/ladymarian3.png'
import UserCard from '../User/UserCard';
import PlayerCard from '../Home/PlayerCard';
const Tutoriales = () => {
    const [activeTab, setActiveTab] = useState('trucos-tab');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div class="w-full min-h-screen p-2 bg-slate-900/90">
            <div class="relative right-0">
                <ul class="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-medieval border-gold font-TrajanProBold" data-tabs="tabs" role="list">
                    <li class="z-30 flex-auto text-center ">
                        <a class="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-black bg-inherit"
                            id="trucos-tab" role="tab"
                            onClick={() => handleTabClick('trucos-tab')}
                            aria-selected={activeTab === 'trucos-tab'}
                            aria-controls="trucos">
                            Trucos
                        </a>
                    </li>
                    <li class="z-30 flex-auto text-center">
                        <a class="z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-sm transition-all ease-in-out border-0 rounded-lg cursor-pointer text-black bg-inherit"
                            id="manual-tab"
                            role="tab"
                            onClick={() => handleTabClick('manual-tab')}
                            aria-selected={activeTab === 'manual-tab'}
                            aria-controls="manual">
                            Manual Browser
                        </a>
                    </li>
                    <li class="z-30 flex-auto text-center">
                        <a class="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-black bg-inherit"
                            id="curiosidades-tab"
                            role="tab"
                            onClick={() => handleTabClick('curiosidades-tab')}
                            aria-selected={activeTab === 'curiosidades-tab'}
                            aria-controls="curiosidades">
                            Curiosidades
                        </a>
                    </li>
                </ul>
                <div data-tab-content="" class="p-5">
                    <div class={` ${activeTab === 'trucos-tab' ? '' : 'hidden'}`} id="trucos-tab" role="tabpanel" >
                        <p class="text-slate-400 font-light">
                            En sherwood dungoen existen una serie de trucos que te facilitaran algunas cosas y te haran disfrutar mas del juego, estos son los siguientes:
                            <br />
                            <span>-Hack de pets</span>
                            <br />
                            <span>-Hack de Armas</span>
                            <br />
                            <span>-Hack de Clonar cuenta</span>
                            <br />
                            <span>-Hack de 'conquistar morras'</span>
                            <br />
                            <span>-Hack de putelquelee</span>

                        </p>
                        <img src={ladymarian3} class="h-auto w-full my-4 border-gold" alt="Logo" />
                    </div>
                    <div class={` ${activeTab === 'manual-tab' ? '' : 'hidden'}`} id="manual-tab" role="tabpanel">
                        <p class="text-slate-400 font-light">
                            The reading of all good books is like a conversation with the
                            finest minds of past centuries.
                            <img src={browser} class="h-auto w-2/4 my-4 border-sherwood" alt="Logo" />
                            <img src={browser} class="h-auto w-2/4 my-4 border-piedra" alt="Logo" />
                        </p>
                    </div>
                    <div class={` ${activeTab === 'curiosidades-tab' ? '' : 'hidden'}`} id="curiosidades-tab" role="tabpanel">
                        <p class="grid grid-cols-2 text-slate-400 font-light gap-4">
                            <div class=" col-span-2 ">
                                Curiosamente podemos ver que en sherwood corren muchos chismesitos y aca los colocare :v
                                A villain lo cuerneo anto, giova usa hack, colmi es furro, tyr es simp, jen es hombre, y crazu huele a limon
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, labore repudiandae. Necessitatibus vero ratione, eum omnis laudantium, cupiditate odio velit ducimus ad, autem pariatur rerum laborum sapiente laboriosam nisi aliquid?
                            </div>

                            <br />
                            <div class=" col-span-1 col-start-1">
                                <PlayerCard />
                            </div>
                            <div class=" col-span-1 ">
                                <img src={browser} class="h-auto w-full  border-piedra" alt="Logo" />
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tutoriales