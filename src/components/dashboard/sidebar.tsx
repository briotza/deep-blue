import black from '../../assets/black.png'
import grid from '../../assets/layout-grid.png'
import message from '../../assets/message-circle.png'
import square from '../../assets/square.png'
import trophy from '../../assets/trophy.png'
import settings from '../../assets/settings.png'

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
                    <button className='flex flex-row items-center'><img src={grid} className='mr-4'/>Dashboard</button>
                    <button className='flex flex-row items-center'><img src={square} className='mr-4' />My Tasks</button>
                    <button className='flex flex-row items-center'><img src={message} className='mr-4' />Message</button>
                    <button className='flex flex-row items-center'><img src={trophy} className='mr-4' />Goals</button>
                </div>
                <div className='flex flex-col space-y-4 items-start relative'>
                    <div className='flex flex-row'>
                        <h4 className='font-bold'>ATIVIDADES</h4>
                    </div>
                    <button className='flex flex-row items-center'><div className='bg-[#6366F1] rounded-full w-3 h-3 mr-6'></div> Website Design</button>
                    <button className='flex flex-row items-center'><div className='bg-[#F6A723] rounded-full w-3 h-3 mr-6'></div> SEO Analythics</button>
                    <button className='flex flex-row items-center'><div className='bg-[#34D399] rounded-full w-3 h-3 mr-6'></div> Hiphonic App</button>

                </div>
                <footer className='absolute bottom-8'>
                    <button className='flex flex-row items-center'><img src={settings} className='mr-4' />Settings</button>
                </footer>
            </div>

        </div>
    )
}