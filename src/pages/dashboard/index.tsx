import Dashhome from "../../components/dashboard/dashhome"
import Sidebar from "../../components/dashboard/sidebar"
import Topbar from "../../components/dashboard/topbar"

export default function Dashboard(){
    return(
        <div className="flex flex-row h-screen">
            <Sidebar />
            <div className="flex flex-col w-[100%]">
                <Topbar />
                <Dashhome />
            </div>
        </div>
    )
}