import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import grid from '../../assets/layout-grid.png';
import square from '../../assets/square.png';
import grafico from '../../assets/grafico.png';
import externo from '../../assets/externo.png';
import username from '../../assets/username.png';

export default function Topbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    let title = "";
    if (location.pathname === '/dashboard') title = "Dashboard";
    else if (location.pathname === '/incidentes') title = "Incidentes";
    else if (location.pathname === '/relatorios') title = "Relatórios";
    else if (location.pathname === '/externo') title = "Plataformas Externas";
    else if (location.pathname === '/formulario-incidentes') title = "Registrar Incidente";
    else if (location.pathname === '/formulario-notificacoes') title = "Enviar Notificação";
    else if (location.pathname === '/perfil') title = "Perfil";

    return (
        <div className="flex flex-row justify-between items-center p-6 h-[86px] w-full bg-white border-b">
            <p className="font-inter text-2xl font-bold">{title}</p>

            {/* Ícone do Menu Hambúrguer */}
            <button
                className="lg:hidden p-2"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className="block w-6 h-[2px] bg-black mb-1"></span>
                <span className="block w-6 h-[2px] bg-black mb-1"></span>
                <span className="block w-6 h-[2px] bg-black"></span>
            </button>

            {/* Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-16 right-6 bg-white shadow-lg rounded-md p-4 z-50 flex flex-col space-y-4">
                    <Link to="/dashboard" className="flex items-center">
                        <img src={grid} className="mr-4" alt="Dashboard" /> Dashboard
                    </Link>
                    <Link to="/incidentes" className="flex items-center">
                        <img src={square} className="mr-4" alt="Monitoramento de Incidentes" /> Monitoramento de Incidentes
                    </Link>
                    <Link to="/relatorios" className="flex items-center">
                        <img src={grafico} className="mr-4" alt="Relatórios e Estatísticas" /> Relatórios e Estatísticas
                    </Link>
                    <Link to="/externo" className="flex items-center">
                        <img src={externo} className="mr-4" alt="Plataformas Externas" /> Plataformas Externas
                    </Link>
                    <Link to="/formulario-incidentes" className="flex items-center">
                        <div className='bg-[#6366F1] rounded-full w-3 h-3 mr-6'></div>  Registrar Incidente
                    </Link>
                    <Link to="/formulario-notificacoes" className="flex items-center">
                        <div className='bg-[#F6A723] rounded-full w-3 h-3 mr-6'></div>  Enviar Notificação
                    </Link>
                    <Link to="/perfil" className="flex items-center">
                        <img src={username} className="mr-4" alt="Perfil" /> Perfil
                    </Link>
                </div>
            )}
        </div>
    );
}
