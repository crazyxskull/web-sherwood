import React from 'react';
// import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';
// import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ButtonRed from '../buttons/buttonRed';
import PlaySherwood from '../chat/PlaySherwood';
import PlayerCard from '../Players/PlayerCard';
import fondo from '../../assets/fondoMedieval.jpg';
import fondoCrazy from '../../assets/Ia/crazyvsDragon.png'
import character from '../../assets/paladinWoman.png';
import sherwoodAlpha from '../../assets/SherwoodVersion/sherwoodAlpha.png';
import Historia from '../Wikipedia/Historia';

function Home() {
    return (
        <div className="flex flex-col bg-gray-950 text-white">
            {/* HERO */}
            <div className="relative w-full h-[600px]">
                <img src={fondo} className="absolute inset-0 w-full h-full object-cover brightness-50" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                    <Link to="/publicar" className="bg-redSherwood hover:bg-redSherwood-600 px-6 py-3 rounded-xl font-bold text-white transition hover:scale-105">
                        📢 Publicar en la comunidad
                    </Link>
                </div>
            </div>

            {/* CONTENIDO PRINCIPAL */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-6 mt-10">
                {/* COLUMNA IZQUIERDA - Publicaciones */}
                <div className="lg:col-span-2 space-y-6">
                    <Section title="📜 Publicaciones de la Comunidad" highlight>
                        <PostCard author="JugadorX" content="¡Nuevo torneo PvP este viernes! Revisa las reglas aquí..." />
                        <PostCard author="Knight_99" content="Miren esta locura que pasó ayer en la dungeon #7" />
                    </Section>

                    <Section title="📰 Últimas Noticias">
                        <NewsCard title="¡Actualización Alpha 2.9 disponible!" date="8 de abril" />
                        <NewsCard title="Bug de los cofres resuelto" date="5 de abril" />
                    </Section>

                    <Section title="🎤 Entrevistas y Historias">
                        <Tabs items={["Jugadores", "Desarrolladores", "Clanes"]} />
                    </Section>
                </div>

                {/* COLUMNA CENTRAL - Info y Tops */}
                <div className="lg:col-span-1 space-y-6">
                    <Section title="🏆 Mejores Jugadores">
                        <PlayerCard />
                        <PlayerCard />
                        <PlayerCard />
                    </Section>

                    <Section title="🔥 Clanes Destacados">
                        <ClanCard name="NightGuard" rank={1} />
                        <ClanCard name="Los Inmortales" rank={2} />
                    </Section>

                    <Section title="📈 Jugadores conectados hoy">
                        <p className="text-center text-3xl font-bold text-green-400">87</p>
                        <p className="text-sm text-center text-gray-400">Jugadores únicos</p>
                    </Section>
                </div>

                {/* COLUMNA DERECHA - Eventos y PvP */}
                <div className="lg:col-span-1 space-y-6">
                    <Section title="⚔️ Guerras de Clanes (En Vivo)">
                        <p>Clan A vs Clan B - Zona PvP #5</p>
                        <p className="text-sm text-gray-400">Actualizado hace 2 min</p>
                    </Section>

                    <Section title="🏅 Ligas y Torneos Activos">
                        <ul className="list-disc list-inside text-sm">
                            <li>1v1 Elimination - Abril</li>
                            <li>Clan Wars por territorios</li>
                        </ul>
                    </Section>

                    <Section title="🚪 Joins más visitados">
                        <ul className="list-inside list-decimal text-sm">
                            <li>/join Arena</li>
                            <li>/join Hell</li>
                            <li>/join Volcano</li>
                        </ul>
                    </Section>
                </div>
            </div>
        </div>
    );
}

function Section({ title, children, highlight }) {
    return (
        <div className={`bg-slate-800 p-4 rounded-xl shadow-md border border-slate-700 ${highlight ? 'border-redSherwood' : ''}`}>
            <h2 className={`text-xl font-semibold mb-3 ${highlight ? 'text-redSherwood' : 'text-white'}`}>{title}</h2>
            {children}
        </div>
    );
}

function PostCard({ author, content }) {
    return (
        <div className="bg-slate-800 p-3 rounded-lg mb-2 hover:bg-slate-700 transition">
            <p className="text-sm text-gray-400">Publicado por <span className="text-white font-semibold">{author}</span></p>
            <p className="text-white">{content}</p>
        </div>
    );
}

function NewsCard({ title, date }) {
    return (
        <div className="bg-slate-800 p-3 rounded-lg mb-2 hover:bg-slate-700 transition">
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="text-xs text-gray-400">{date}</p>
        </div>
    );
}

function ClanCard({ name, rank }) {
    return (
        <div className="bg-slate-800 p-3 rounded-lg flex justify-between items-center hover:bg-slate-700 transition">
            <span className="text-white font-bold">{name}</span>
            <span className="text-yellow-400">#{rank}</span>
        </div>
    );
}

function Tabs({ items }) {
    return (
        <div className="flex space-x-2 text-sm">
            {items.map((item, i) => (
                <button key={i} className="bg-slate-700 px-3 py-1 rounded hover:bg-slate-600 transition">
                    {item}
                </button>
            ))}
        </div>
    );
}

export default Home;