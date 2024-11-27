import DataTable from "react-data-table-component";
import { incidentes } from "../data";

export default function Custos() {
  // Filtrar os incidentes que possuem resolução
  const incidentesComResolucao = incidentes.filter((incidente) => incidente.resolucao);

  // Configuração das colunas da tabela
  const colunas = [
    {
      name: "Título do Incidente",
      selector: (row: { titulo: string }) => row.titulo,
      sortable: true,
    },
    {
      name: "Data da Resolução",
      selector: (row: { resolucao: { data: string } }) =>
        new Date(row.resolucao.data).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "Custo Total (R$)",
      selector: (row: { resolucao: { custo_total: number } }) =>
        row.resolucao.custo_total.toFixed(2),
      sortable: true,
    },
  ];

  return (
    <div className="bg-[#94A3B8] h-[100%] p-12 flex flex-col space-y-6 overflow-y-auto">
      <h1 className="text-2xl font-bold text-center text-white">
        Custos das Resoluções de Acidentes
      </h1>

      {/* Tabela de custos */}
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
  );
}
