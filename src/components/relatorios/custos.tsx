import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { GraficoCustos } from "../relatorios/grafico";

type Resolucao = {
  data: string;
  custo_total?: number;
};

type Incidente = {
  titulo: string;
  situacao: string;
  resolucao?: Resolucao;
};

export default function Custos() {
  const [incidentesComResolucao, setIncidentesComResolucao] = useState<Incidente[]>([]);
  const [custosPorMes, setCustosPorMes] = useState<number[]>(Array(12).fill(0));

  useEffect(() => {
    fetch("http://localhost:3000/acidente")
      .then((response) => response.json())
      .then((data) => {
        const incidentesComResolucao = data.filter(
          (incidente: Incidente) => 
            incidente.resolucao && incidente.situacao === "Fechado"
        );

        // Atualizar os custos por mês
        const custos = Array(12).fill(0);
        incidentesComResolucao.forEach((incidente: Incidente) => {
          const dataResolucao = incidente.resolucao?.data;
          const custoTotal = incidente.resolucao?.custo_total;

          if (dataResolucao && custoTotal != null) {
            const mes = new Date(dataResolucao).getMonth();
            custos[mes] += custoTotal;
          }
        });

        // Atualizar estado
        setIncidentesComResolucao(incidentesComResolucao);
        setCustosPorMes(custos);
      })
      .catch((error) => console.error("Erro ao buscar dados da API:", error));
  }, []);

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

      {/* Gráfico de custos */}
      <div className="flex justify-center">
        <div className="bg-white shadow rounded-lg p-4 w-[700px] h-[400px]">
          <GraficoCustos custosPorMes={custosPorMes} />
        </div>
      </div>
    </div>
  );
}
