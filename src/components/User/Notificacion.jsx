import React from 'react'
import iconoEmail from '../../assets/icons/email.webp';
import iconoDiscord from '../../assets/icons/discord.webp'

const Notificaciones = () => {
  return (
    <section>
      <div className="w-full p-6 bg-gray-900/15 ">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-white">Notificaciones</h5>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 ">
            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="shrink-0">
                  <img className="w-10 h-auto rounded-full p-1 bg-indigo-700" src={iconoDiscord} />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-white truncate ">
                    Correo
                  </p>
                  <p className="text-sm text-gray-500 truncate ">
                    jenihacks@dungeon.com
                  </p>
                </div>
                <div className="inline-flex items-center gap-2">
                  <label htmlFor="switch-component-on" className="text-slate-600 text-sm cursor-pointer">Off</label>
                  <div className="relative inline-block w-11 h-5">
                    <input id="switch-component-on" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />
                    <label htmlFor="switch-component-on" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
                    </label>
                  </div>
                  <label htmlFor="switch-component-on" className="text-slate-600 text-sm cursor-pointer">On</label>
                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center ">
                <div className="shrink-0">
                  <img className="w-10 h-auto rounded-full" src={iconoEmail} />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-white truncate">
                    Telefono
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    wasap o discord nose xd
                  </p>
                </div>
                <div className="inline-flex items-center gap-2">
                  <label htmlFor="switch2-component-on" className="text-slate-600 text-sm cursor-pointer">Off</label>
                  <div className="relative inline-block w-11 h-5">
                    <input id="switch2-component-on" type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />
                    <label htmlFor="switch2-component-on" className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
                    </label>
                  </div>
                  <label htmlFor="switch2-component-on" className="text-slate-600 text-sm cursor-pointer">On</label>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Notificaciones
