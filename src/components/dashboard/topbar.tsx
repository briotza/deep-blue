import search from '../../assets/Search.png'
import bell from '../../assets/bell.png'
import username from '../../assets/username.png'
import { useLocation } from 'react-router-dom'

export default function Topbar() {
const location = useLocation();

let title = " "
if (location.pathname === '/dashboard') {
    title = "Dashboard"
}else if(location.pathname === '/incidentes'){
    title = "Incidentes"
}else if(location.pathname === '/relatorios'){
    title = "Relatórios"
}

    return (
        <div className="flex flex-row p-6 h-[86px] items-center">
            <p className="font-inter text-2xl font-bold">{title}</p>
            <div className='flex flex-row items-center ml-auto space-x-8'>
                <div className="border rounded-lg flex flex-row p-2 items-center">
                    <img src={search} className='w-5 h-5 mr-2' /><input type="text" placeholder="Search..." className='p-1' />
                </div>
                <button><img src={bell} className='w-7 h-7' /></button>
                <div className='rounded-full border p-2'>
                    <img src={username} className='w-5 h-5' />
                </div>
            </div>
            <div className='ml-3 pr-16'>
                    <p className='font-bold'>Username</p>
                    <p>Plataforma</p>
                </div>
        </div>
    )
}