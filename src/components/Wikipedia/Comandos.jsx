import React from 'react';

const Comandos = () => {
    return (
        <div className="lg:p-2 lg:w-4/5 w-full mx-auto text-white font-Quadrata border-dungeon bg-fixed bg-neutral-950/90">
            <div class="p-6">
                <h1 className="text-5xl font-PerrygothicRegular text-center text-textSherwood mb-6">Comandos</h1>
                <p className=" mb-4">
                    Los comandos son acciones que para ejecutarlas deben escribirse previamente con una barra, sirven para activar varias de las funciones del juego. A continuación enunciaremos cuales son y para que sirven:
                </p>

                <section className="mb-6">
                    <h2 className="text-2xl font-QuadrataOst mb-2 text-textSherwood">Sumario</h2>
                    <ul className="list-disc list-inside ">
                        <li>/ Teleport + Num</li>
                        <li>/ Level + Num</li>
                        <li>/ Join + Num</li>
                        <li>/ Who</li>
                        <li>/ F</li>
                        <li>/ Fps</li>
                        <li>/ Help</li>
                        <li>/ Camera</li>
                        <li>/ Logout</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-QuadrataOst mb-2 text-textSherwood">/ Teleport + Num</h2>
                    <p className=" mb-2">
                        Este comando le permite teletransportarse a una isla que desee en el juego. Estos alternativamente se pueden escribir en el formato /teleport o /TELEPORT. Ej:
                    </p>
                    <ul className="list-disc list-inside ">
                        <li>/teleport0 te envía al Dungeon.</li>
                        <li>/teleport1 te envía a Sherwood Castle</li>
                        <li>/teleport2 te envía a Haunted Palm</li>
                        <li>/teleport3 te envía a Frost Bite</li>
                        <li>/teleport4 te envía a Lost Lagoon</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-QuadrataOst mb-2 text-textSherwood">/ Level + Num</h2>
                    <p className=" mb-2">
                        Este comando sirve para ir al Dungeon. Utilice /level+Num donde Num representa el nivel del Dungeon deseado. Los jugadores sólo se pueden teletransportar a un nivel máximo, igual o ligeramente superior, al actual nivel de experiencia del jugador.
                    </p>
                    <p className="">
                        Tenga en cuenta que con el comando /level0 se teletransporta al jugador de vuelta al Teleport1.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-QuadrataOst mb-2 text-textSherwood">/ Join + Num</h2>
                    <p className="">
                        El comando /join le permite unirse a las diferentes salas de chat en cualquiera de las islas. Hay un total de 300 salas de chat en cada isla. Por ejemplo, si desea ir a la sala 51 de la isla en la que te encuentras escribirías /join51.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-QuadrataOst mb-2 text-textSherwood">/ Who</h2>
                    <p className="">
                        Escribiendo este comando mostrará una lista de los jugadores en la sala de chat actual. Esta es una buena manera de ver si un amigo está en tu actual sala de chat sin tener que buscarlo por toda la isla. Además te nombra tu lugar de ubicación: Server, Teleport y Join.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-QuadrataOst mb-2 text-textSherwood">/ F</h2>
                    <p className="">
                        Este comando te permite hablar por privado con todos los jugadores que tengas en tu Friend List (Lista de Amigos). Para utilizarlo solo basta con escribir /f por delante del texto y saldrá en azul lo que escribes y solo lo podrán ver todos los de tu Friend List.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-QuadrataOst mb-2 text-textSherwood">/ Fps</h2>
                    <p className="">
                        Este comando te permite ver los fps que tenes en el momento.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-QuadrataOst mb-2 text-textSherwood">/ Help</h2>
                    <p className="">
                        Este comando abre la pantalla de ayuda. La pantalla de ayuda también se puede ver haciendo clic en la Castle Guard o en el pequeño signo de interrogación con el círculo en la esquina superior izquierda de la pantalla, donde se encuentran las barras de colores (No funciona en Sherwood Alpha).
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-QuadrataOst mb-2 text-textSherwood">/ Camera</h2>
                    <p className=" mb-2">
                        Con este comando puedes ver la isla completa en la que te encuentras. Además puedes acercar, alejar, mover para los costados y girar la cámara. Para ello debe hacer lo siguiente:
                    </p>
                    <ul className="list-disc list-inside ">
                        <li>Haga clic y arrastre el mouse para cambiar el ángulo de visión.</li>
                        <li>Haz clic derecho y arrastre el mouse para mover la cámara hacia los lados.</li>
                        <li>Mantenga apretados los botones derecho e izquierdo del mouse y arrastre para acercar y alejar la imagen.</li>
                        <li>Presione la barra espaciadora para salir del modo de cámara.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-QuadrataOst mb-2 text-textSherwood">/ Logout</h2>
                    <p className="">
                        Este comando es para salir del juego, además de esta forma a los jugadores que tengas agregados en el Friend List (Lista de Amigos) se les notifica que has cerrado el juego.
                    </p>
                </section>
            </div>

        </div>
    );
};

export default Comandos;