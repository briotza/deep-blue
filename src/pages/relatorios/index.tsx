import { useState } from "react";
import Sidebar from "../../components/dashboard/sidebar";
import Topbar from "../../components/dashboard/topbar";
import ListaIncidentes from "../../components/incidentes/listaIncidentes";
import Custos from "../../components/relatorios/custos";

export default function Relatorios() {

    return(
        <div className="flex flex-row h-screen">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            <div className="flex flex-col w-[100%]">
                <Topbar />
                <Custos />
            </div>
        </div>
    )
}