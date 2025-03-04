// src/components/Home.jsx
import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
console.log("este es un print desde el app.jsx")

function Home() {
    return (
        <div >

            <Header />
            <div class="flex flex-col-2">
                <h1>Bienvenido al HOME!</h1>
                <div className="bg-sky-600">
                    <h2>Mi pagina de presentacion</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quaerat commodi perspiciatis magnam repellat, at non perferendis dignissimos voluptatem autem molestias. Ex, illum? Numquam at quam facilis nam, quod excepturi?</p>

                </div>
                <table>
                    <tr>
                        <th>NOMBRE</th>
                        <th>Descripcion</th>
                    </tr>
                    <tr>
                        <td>Samuel</td>
                        <td>nose que poner xddd</td>
                    </tr>
                    <tr>
                        <td>Samuel</td>
                        <td>nose que poner xddd</td>
                    </tr>
                </table>
            </div>
            <div class="flex flex-col-2">
                <h2>Categories</h2>
                <ul class="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
                    <li>Sales</li>
                    <li>Marketing</li>
                    <li>SEO</li>
                    {/* <!-- ... --> */}
                </ul>
                <iframe class="aspect-video ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
            </div>
            <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
                <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
                <div>
                    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
                    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
                </div>
            </div>
            <div class="flex flex-col-2">
                <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
                    <div>
                        <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                            <svg
                                class="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                {/* <!-- ... --> */}
                            </svg>
                        </span>
                    </div>
                    <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
                    <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    </p>
                </div>
                <div class="bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
                    <div>
                        <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                            <svg class="h-6 w-6 stroke-white">
                                {/* <!-- ... --> */}
                            </svg>
                        </span>
                    </div>
                    <h3 class="text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
                    <p class=" text-gray-400 mt-2 text-sm ">
                        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                    </p>
                </div>
            </div>
            <div>
                <label
                    class="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 ..."
                >
                    {/* <svg fill="currentColor">
                        
                    </svg> */}
                    Google Pay
                    <input type="radio" class="checked:border-indigo-500 ..." />
                </label>

            </div>
            <Footer/>
        </div>
    );
}
export default Home;