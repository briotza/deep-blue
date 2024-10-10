import Formulario from "../../components/home/formulario";
import Painel from "../../components/home/painel";

export default function Home() {
    return(
        <div className="flex flex-row h-screen">
            <Painel />
            <Formulario />
        </div>
    )
}