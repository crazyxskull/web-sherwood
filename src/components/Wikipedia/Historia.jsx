import React from 'react';
import Carrusel from '../Carrusel';
//forest image
import forest1 from '../../assets/Wiki/SherwoodForest1.webp';
import forest2 from '../../assets/Wiki/SherwoodForest2.webp';
import forest3 from '../../assets/Wiki/SherwoodForest3.webp';
import forest4 from '../../assets/Wiki/SherwoodForest4.webp';
import forest5 from '../../assets/Wiki/SherwoodForest5.webp';
import forest6 from '../../assets/Wiki/SherwoodForest6.webp';
//Dungeon images
import dungeon1 from '../../assets/Wiki/Dungeon1.webp';
import dungeon2 from '../../assets/Wiki/Dungeon2.webp';
import dungeon3 from '../../assets/Wiki/Dungeon3.webp';

const Historia = () => {
    const imagesForest = [forest1, forest2, forest3, forest4, forest5, forest6];
    const imagesDungeon = [dungeon1, dungeon2, dungeon3];
    return (
        <div className="lg:p-2 lg:w-4/5 w-full mx-auto justify-center flex flex-col  text-white font-Quadrata">
            <h1 className="text-5xl font-Deutsch text-center mb-12 pt-4 text-white text-shadow">Historia de Sherwood Dungeon</h1>

            <section className="mb-6 font-sans">
                <h2 className="text-xl font-TrajanProBold text-orange-300 text-shadow">Orígenes de Sherwood Dungeon</h2>
                <p class="text-gray-200 my-4">
                    Sherwood Dungeon comenzó como una creación de pasatiempos de Gene Endrody,
                    pero a lo largo de los años llego a convertirse en un juego que ha ganado un millón de visitantes mensuales
                    y un culto similar. Por eso haremos un breve repaso de como fueron sus inicios y como fue evolucionando para llegar a ser el juego que conocemos hoy en día.
                </p>
            </section>

            <section className="mb-6 font-sans">
                <h2 className="text-xl font-TrajanProBold text-orange-300 text-shadow">Sherwood Forest / Sherwood Temples</h2>
                <p class="text-gray-200 my-4">
                    Sherwood Forest era un MMORPG y el predecesor del Sherwood Dungeon, creado por Gene Endrody, el fundador de Maid Marian. Esta fue la primera versión del Sherwood, y se empezó a jugar apróximadamente por el año 2002, originalmente fue conocido como Sherwood Temples (Templos del Sherwood).
                    <br />
                    El Sherwood Forest consistió en una isla con 4 templos. Cada templo tenía una piedra en el techo con un color de los 4 que se podía seleccionar para el personaje: negro, rojo, azul y verde. El único personaje disponible para jugar que era el Dark Knight (Caballero Oscuro, también conocido como el orejón). Era la primera versión de lo que hoy conocemos como la Isle of Ancients.
                    <br />
                    El jugador empezaba con una Dagger (Espada Corta) y un Shield (Escudo Triangular) y se podía obtener otras armas a través de cofres escondidos por toda la isla, que contenían un Buckler (Escudo Redondo), Mace (Masa), Battleaxe (Hacha) y la Longsword (Espada Larga).</p>
                <div class="grid grid-cols-1 gap-4 w-auto my-6 justify-center">
                    <div class="flex items-center justify-center">
                        <iframe class=" aspect-video rounded-lg border-gold h-80 w-auto"
                            src="https://www.youtube.com/embed/qPqF33Slsxc">
                        </iframe>
                    </div>
                    <div class=" text-white">
                        <Carrusel images={imagesForest} />
                    </div>
                </div>
            </section>

            <section className="mb-6 font-sans">
                <h2 className="text-xl font-TrajanProBold text-orange-300 text-shadow">Sherwood Classic / Sherwood Castle</h2>
                <p class="text-gray-200 my-4">
                    Luego salio el Sherwood Classic también conocido como Sherwood Castle que es el Sherwood Castle actual sin el Dungeon (Mazmorra) y obviamente sin la Taberna ni el Molino y mucho menos el Barco. Todavía había un solo personaje para elegir. Los jugadores no podían bloquear ni recargar vida, solo se podía pegar. Se hacían guerras por equipos y pasado un tiempo se contaban los puntos que había conseguido cada equipo. Era una mezcla entre el Teleport 1 y el Teleport 8.
                    <br />
                    Lo que se destaca de estas versiones anteriores es que la modalidad del juego era diferente, si bien no se podía bloquear, los golpes dependían de como presionaras la tecla Ctrl, si la presionabas sin soltar pegaba constantemente, en cambio, si presionabas y soltabas enseguida la tecla, el personaje no completaba el golpe, sino que volvía el brazo y se quedaba parado (como un amague sin bloquear). Además de esto, en los joins podían entrar hasta 50 personas a la ves, había joins con letras (Por ejemplo: /Join G) y salas secretas. También había una serie de "Combos" que se hacían con las teclas Ctrl y Alt.
                    <br />
                    El Sherwood Classic dejo de actualizarse desde la versión 1.91f, solo se puede jugar desde Internet Explorel en el siguiente enlace: Sherwood Classic
                </p>
                <div class="grid grid-cols-1 gap-4 w-auto my-6 justify-center">
                    <div class="flex items-center justify-center">
                        <iframe class=" aspect-video rounded-lg border-gold  h-80 w-auto"
                            src="https://www.youtube.com/embed/bF4x2zzI8Wg">
                        </iframe>
                    </div>
                    <div class=" text-white">
                        {/* <Carrusel images={imagesDungeon}/> */}
                    </div>
                </div>
                <a href="https://sherwooddungeon.fandom.com/es/wiki/Sherwood_(Historia)" className="text-blue-500 hover:underline">Ver más sobre Sherwood Classic</a>
            </section>

            <section className="mb-6 font-sans">
                <h2 className="text-xl font-TrajanProBold text-orange-300 text-shadow">Sherwood Dungeon / Sherwood Alpha</h2>
                <p class="text-gray-200 my-4">
                    Se lanzo el Sherwood Dungeon mas o menos a fines del 2005 y comienzos del 2006. Este juego fue bastante criticado por varios de los jugadores de ese entonces, los cuales siguieron jugando al Sherwood Classic hasta que se dejo de actualizar y cambiaron el enlace del juego.


                </p>
                <div class="grid grid-cols-1 gap-4 w-auto my-6 justify-center">
                    {/* <div class="flex items-center justify-center">
                        <iframe class=" aspect-video rounded-lg border-gold  h-80 w-auto"
                            src="https://www.youtube.com/embed/bF4x2zzI8Wg">
                        </iframe>
                    </div> */}
                    <div class=" text-white">
                        <Carrusel images={imagesDungeon} />
                    </div>
                </div>
                <p class="text-gray-200 my-4">
                    En esta versión ya no se contaban los puntos de los equipos y se agrego la opción del bloqueo (Ctrl+Shift). Además, por primera vez, se añadieron nuevos personajes para seleccionar: Guerrero (hombre sin casco), Valyria (mujer) y el Esqueleto, también se agregaron una variedad de cascos para el Dark Knight: Dark Knight (Caballero Oscuro), Paladín, Roman Soldier (Soldado Romano), Gladiator (Gladiador), Barbarian (Bárbaro). El aspecto visual mejoro un poco respecto a lo que era el Sherwood Classic. Se añadió el Dungeon y nuevas islas como Haunted Palm, Frost Bite y Lost Lagoon. Aparecieron nuevos Items como los Talismanes. Para diferenciar los antiguos anillos de los talismanes se agrego una barra de magia (barra azul) por debajo de la de salud (barra roja) y un nuevo comando: TAB para activar el talismán, el cual hace daño directo a tu oponente.
                </p>
            </section>

            <section className="mb-6 font-sans">
                <h2 className="text-xl font-TrajanProBold text-orange-300 text-shadow">Actualizaciones y Evolución</h2>
                <p class="text-gray-200 my-4">
                    A mediados del 2007 Gene Endrody decidió que era momento para mejorar las texturas de los personajes, los monstruos y del juego en general, fue así como, a finales de ese año, presento el nuevo aspecto de los personajes sumando uno nuevo: el Vikingo. Por otra parte, se agregaron nuevas islas y monstruos.

                    El juego se fue actualizando hasta lo que conocemos hoy en día, se añadió un último personaje: la Ranger, se agregaron nuevas misiones, nuevos monstruos, mascotas y aliados, entre otras cosas. De todas, la actualización más importante, seria la de los power moves, la cual cambio la modalidad de los PvP agregando nuevos ataques y una barra verde que es la que indica cuando podes lanzar un nuevo ataque. Esto también afecto en gran parte a las guerras entre clanes.
                </p>
            </section>

            <section className="mb-6 font-sans">
                <h2 className="text-xl font-TrajanProBold text-orange-300 text-shadow">Sherwood Alpha</h2>
                <p class="text-gray-200 my-4">
                    Finalmente salio la versión del Sherwood Alpha, la cual era una versión en desarrollo del Sherwood. Su propósito era permitir a los jugadores probar el Sherwood en el nuevo Adobe Flash Player con efectos visuales mejorados. Desde que se completaron las pruebas, el Sherwood Alpha se ha publicado como una actualización oficial del Sherwood. Así como paso con el Sherwood Classic, los enlaces del Sherwood Dungeon fueron redireccionados al Sherwood Alpha. Solo es posible entrar al Sherwood Dungeon en su versión 2.6 desde el Sherwood Browser.
                </p>
                <a href="https://www.sherwooddungeon.com/" className="text-blue-500 hover:underline">Jugar Sherwood Dungeon</a>
            </section>
        </div>
    );
};

export default Historia;
