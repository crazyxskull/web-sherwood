import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="flex w-full bg-neutral-950/60">
            <div className="w-auto"> {/* Ancho fijo para el Sidebar. Ajusta según necesidad */}
                <Sidebar />
            </div>
            <div className="flex flex-col flex-grow">
                <Header class="z-50" />
                <main>
                    <Outlet /> {/* Aquí se renderizan las páginas */}
                </main>
                <Footer class="z-50" />
            </div>
        </div>
    );
};

export default Layout;