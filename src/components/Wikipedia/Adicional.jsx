import React from 'react'

const Adicional = () => {
    return (
        <div className="p-6 bg-gray-950/70 text-white rounded-2xl shadow-lg space-y-6 min-h-screen">
            <h2 className="text-4xl font-Deutsch text-center text-textSherwood">Guía Rápida para Jugar Sherwood Dungeon</h2>
            <div className="grid grid-cols-2">
                <div className="col-span-1 space-y-3">
                    <h3 className="text-xl font-QuadrataOst text-green-400">🔫 Para participar en guerras:</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Instala <strong>Adobe Shockwave Player</strong>:</li>
                        <ul className="list-disc list-inside pl-5">
                            <li><a className="text-blue-400 underline" href="https://adobe-shockwave-player.uptodown.com/windows/descargar" target="_blank">Descarga desde Uptodown</a></li>
                            <li><a className="text-blue-400 underline" href="https://drive.google.com/drive/folders/1Jn1Be1kqCGditPkKgFtlaxUdOhUMvSS2?usp=drive_link" target="_blank">Enlace de Google Drive</a></li>
                        </ul>
                        <li>Instala <strong>Sherwood Browser</strong> desde el mismo enlace de Google Drive.</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-QuadrataOst text-red-400">⚔️ Para hacer PvP:</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Instala el <strong>launcher oficial</strong>:</li>
                        <ul className="list-disc list-inside pl-5">
                            <li><a className="text-blue-400 underline" href="https://www.sherwooddungeon.com/" target="_blank">Descarga desde la página oficial</a></li>
                            <li>También puedes usar el archivo <strong>SherwoodInstall.msi</strong>.</li>
                        </ul>
                        <li>Abre el juego y sigue estos pasos:</li>
                        <ul className="list-disc list-inside pl-5">
                            <li>Haz clic en "Play as Guest"</li>
                            <li>Selecciona "Sherwood Classic"</li>
                            <li>Haz clic en "OK"</li>
                        </ul>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-QuadrataOst text-yellow-300">🚪 Para ingresar a joins llenos:</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Descarga y configura el <strong>Autotyper</strong> desde el mismo enlace de Google Drive.</li>
                        <li>Coloca el número del join deseado.</li>
                        <li>Ajusta la velocidad (recomendado: 100 ms o menos).</li>
                        <li>Haz clic en "Iniciar" y recuerda detenerlo cuando entres.</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-QuadrataOst text-blue-300">🛠️ Solución de errores:</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Corrige problemas con Shockwave Player:</li>
                        <a className="text-blue-400 underline" href="https://www.youtube.com/watch?v=ViR9Z4Hzt54" target="_blank">
                            Video tutorial (YouTube)
                        </a>
                        <li>Bug del teleport secreto (PvP):</li>
                        <a className="text-blue-400 underline" href="https://www.youtube.com/watch?v=d_9iMryrHGQ" target="_blank">
                            Ver video
                        </a>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-QuadrataOst text-pink-300">🎮 Otros recursos útiles:</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>
                            <a className="text-blue-400 underline" href="https://youtu.be/dFH7beM6_GA?si=Wbvu1v-jkW2EpLtp" target="_blank">
                                Cómo ir al teleport secreto (otro método)
                            </a>
                        </li>
                        <li>
                            <a className="text-blue-400 underline" href="https://www.youtube.com/watch?v=5TFFdFoGeyc" target="_blank">
                                Solución FPS con tarjeta NVIDIA
                            </a>
                        </li>
                        <li>
                            <a className="text-blue-400 underline" href="https://www.youtube.com/watch?v=zHs7ljKZsG0" target="_blank">
                                Cómo limitar FPS con RivaTuner
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Adicional
