import Sidebar from "../../components/dashboard/sidebar";
import Topbar from "../../components/dashboard/topbar";
import FormNotificacao from "../../components/notificacoes/formularioNoti";

export default function Notificacoes() {

    return(
        <div className="flex flex-row h-screen">
            <Sidebar />
            <div className="flex flex-col w-[100%]">
                <Topbar />
                <FormNotificacao />
            </div>
        </div>
    )
}