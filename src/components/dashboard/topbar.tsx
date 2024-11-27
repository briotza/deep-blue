import search from '../../assets/Search.png'
import bell from '../../assets/bell.png'
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
    }

    return (
        <div className="flex flex-row p-6 h-[86px] items-center">
            <p className="font-inter text-2xl font-bold">{title}</p>
        </div>
    )
}