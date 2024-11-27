import Sidebar from "../../components/dashboard/sidebar";
import Topbar from "../../components/dashboard/topbar";
import DadosExternos from "../../components/externo";

export default function Externo() {

    return(
        <div className="flex flex-row h-screen">
            <Sidebar />
            <div className="flex flex-col w-[100%]">
                <Topbar />
                <DadosExternos />
            </div>
        </div>
    )
}