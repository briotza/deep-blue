import Sidebar from "../../components/dashboard/sidebar";
import Topbar from "../../components/dashboard/topbar";
import Profile from "../../components/perfil";

export default function Perfil() {

    return(
        <div className="flex flex-row h-screen">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            <div className="flex flex-col w-[100%]">
                <Topbar />
                <Profile />
            </div>
        </div>
    )
}