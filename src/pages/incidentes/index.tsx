import Sidebar from "../../components/dashboard/sidebar";
import Topbar from "../../components/dashboard/topbar";
import ListaIncidentes from "../../components/incidentes/listaIncidentes";

export default function Incidentes() {

    return(
        <div className="flex flex-row h-screen">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            <div className="flex flex-col w-[100%]">
                <Topbar />
                <ListaIncidentes />
            </div>
        </div>
    )
}