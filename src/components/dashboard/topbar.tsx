import { useLocation } from 'react-router-dom'

export default function Topbar() {
    const location = useLocation();

    let title = " "
    if (location.pathname === '/dashboard') {
        title = "Dashboard"
    } else if (location.pathname === '/incidentes') {
        title = "Incidentes"
    } else if (location.pathname === '/relatorios') {
        title = "Relatórios"
    } else if (location.pathname === '/externo') {
        title = "Plataformas Externas"
    }else if (location.pathname === '/formulario-incidentes') {
        title = "Registrar Incidente"
    }else if (location.pathname === '/formulario-notificacoes') {
        title = "Enviar Notificação"
    }else if (location.pathname === '/perfil') {
        title = "Perfil"
    }

    return (
        <div className="flex flex-row p-6 h-[86px] items-center">
            <p className="font-inter text-2xl font-bold">{title}</p>
        </div>
    )
}