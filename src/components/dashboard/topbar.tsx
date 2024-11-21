import search from '../../assets/Search.png'
import bell from '../../assets/bell.png'
import username from '../../assets/username.png'

export default function Topbar() {
    return (
        <div className="flex flex-row p-6 h-[86px] items-center">
            <p className="font-inter text-2xl font-bold">Dashboard</p>
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