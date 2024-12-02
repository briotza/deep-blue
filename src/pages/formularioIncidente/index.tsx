import Sidebar from "../../components/dashboard/sidebar";
import Topbar from "../../components/dashboard/topbar";
import FormIncidente from "../../components/formularioIncidente";

export default function FormularioIncidentes() {

    return(
        <div className="flex flex-row h-screen">
            <Sidebar />
            <div className="flex flex-col w-[100%]">
                <Topbar />
                <FormIncidente />
            </div>
        </div>
    )
}