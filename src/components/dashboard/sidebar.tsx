import Logo from '../../assets/deep-blue-logo.png';

export default function Sidebar() {
    return (
        <div className="flex flex-col h-screen w-[320px] border-r-2">
            <div className='flex flex-row items-center m-6 border-b-2 pb-4'>
                <img src={Logo} alt="Logo da Deep Blue" className='max-h-12' />
                <h2 className="text-black font-inter font-bold text-[27.72px] ml-1">Deep Blue</h2>
            </div>
            <div className='flex flex-col border-b-2'>
                <h4>MENU</h4>
                <button>Dashboard</button>
                <button>My Tasks</button>
                <button>Message</button>
                <button>Goals</button>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <h4>ATIVIDADES</h4>
                    <p>+</p>
                </div>
                <button>Website Design</button>
                <button>SEO Analythics</button>
                <button>Hiphonic App</button>
            </div>
            <footer>
                <button>Settings</button>
                <button>Dark Mode</button>
            </footer>
        </div>
    )
}