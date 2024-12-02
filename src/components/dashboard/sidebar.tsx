import black from '../../assets/black.png'
import grid from '../../assets/layout-grid.png'
import square from '../../assets/square.png'
import trophy from '../../assets/trophy.png'
import settings from '../../assets/settings.png'
import { Link, useNavigate } from 'react-router-dom'
import username from '../../assets/username.png'
import grafico from '../../assets/grafico.png'
import externo from '../../assets/externo.png'


export default function Sidebar() {
    return (
        <div className="flex flex-col h-screen min-w-[320px] border-r-2 font-inter text-[#64748B]">
            <div className='flex flex-row items-center m-6 border-b-2 pb-4'>
                <img src={black} alt="Logo da Deep Blue" className='max-h-12' />
                <h2 className="text-black font-inter font-bold text-[27.72px] ml-1">Deep Blue</h2>
            </div>
            <div className='p-6 space-y-4'>
                <div className='flex flex-col border-b-2 space-y-4 items-start pb-4'>
                    <h4 className='font-bold'>MENU</h4>
                    <Link to="/dashboard" className='flex flex-row items-center'><img src={grid} className='mr-4' />Dashboard</Link>
                    <Link to="/incidentes" className='flex flex-row items-center'><img src={square} className='mr-4' />Monitoramento de Incidentes</Link>
                    <Link to="/relatorios" className='flex flex-row items-center'><img src={grafico} className='mr-4' />Relatórios e Estatísticas</Link>
                    <Link to="/externo" className='flex flex-row items-center'><img src={externo} className='mr-4' />Plataformas Externas</Link>
                </div>
                <div className='flex flex-col space-y-4 items-start relative'>
                    <div className='flex flex-row'>
                        <h4 className='font-bold'>ATIVIDADES</h4>
                    </div>
                    <Link to="/formulario-incidentes" className='flex flex-row items-center'><div className='bg-[#6366F1] rounded-full w-3 h-3 mr-6'></div> Registrar Incidente</Link>
                    <Link to="/formulario-notificacoes" className='flex flex-row items-center'><div className='bg-[#F6A723] rounded-full w-3 h-3 mr-6'></div> Enviar Notificação</Link>
                </div>
                <footer className='absolute bottom-8'>
                    <Link to="/perfil" className='flex items-center mb-3'>
                        <div className='rounded-full'>
                            <img src={username} className='w-4 h-5 mr-1' />
                        </div>
                        <div className='ml-3 pr-16'>
                            <p className=''>Perfil</p>
                        </div>
                    </Link>
                </footer>
            </div>

        </div>
    )
}