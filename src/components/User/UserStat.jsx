import React from 'react'

const UserStat = () => {
    return (
        <div class="bg-gray-900 rounded-lg border-amber-100 border-1">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:max-w-none pb-4">
                    <div class="text-center space-y-4">
                        <h2 class="text-lg font-bold tracking-tight text-white sm:text-4xl mt-4">Stats</h2>
                        <p class="text-sm leading-8 text-gray-300">We can help you grow your audience and your business, no matter the
                            size.
                        </p>
                    </div>
                    <dl class="mt-2 grid grid-cols-2 gap-0.5 overflow-hidden rounded-2xl text-center ">
                        <div class="flex flex-col bg-white/5 p-4">
                            <dt class="text-sm font-semibold leading-6 text-gray-300">15</dt>
                            <dd class="order-first text-xl font-semibold tracking-tight text-white">PVP</dd>
                        </div>
                        <div class="flex flex-col bg-white/5 p-4">
                            <dt class="text-sm font-semibold leading-6 text-gray-300">mancos</dt>
                            <dd class="order-first text-xl font-semibold tracking-tight text-white">CLAN</dd>
                        </div>
                        <div class="flex flex-col bg-white/5 p-4">
                            <dt class="text-sm font-semibold leading-6 text-gray-300">infinito</dt>
                            <dd class="order-first text-xl font-semibold tracking-tight text-white">Estupides</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default UserStat