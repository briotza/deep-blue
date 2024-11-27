import DataTable from "react-data-table-component";
import { GraficoCustos } from "../relatorios/grafico";
import { incidentes } from "../data";

type Resolucao = {
    data: string;
    custo_total?: number;
};

type Incidente = {
    titulo: string;
    resolucao?: Resolucao;
};

export default function DadosExternos() {
    // Filtrar incidentes com resolução
    const incidentesComResolucao = incidentes.filter(
        (incidente: Incidente) => incidente.resolucao
    );

    // Configuração das colunas da tabela
    const colunas = [
        {
            name: "Título do Incidente",
            selector: (row: Incidente) => row.titulo,
            sortable: true,
        },
        {
            name: "Data da Resolução",
            selector: (row: Incidente) =>
                row.resolucao ? new Date(row.resolucao.data).toLocaleDateString() : "N/A",
            sortable: true,
        },
        {
            name: "Custo Total (R$)",
            selector: (row: Incidente) =>
                row.resolucao?.custo_total != null
                    ? row.resolucao.custo_total.toFixed(2)
                    : "N/A",
            sortable: true,
        },
    ];

    return (
        <div className="bg-[#94A3B8] h-[100%] p-12 flex flex-col space-y-8 overflow-y-auto">
            <div>
                <DataTable
                    columns={colunas}
                    data={incidentesComResolucao}
                    pagination
                    customStyles={{
                        headCells: {
                            style: { backgroundColor: "#1E293B", color: "#fff" },
                        },
                        rows: {
                            style: { backgroundColor: "#CBD5E1", color: "#000", cursor: "pointer" },
                        },
                    }}
                />
            </div>
        </div>
    );
}
