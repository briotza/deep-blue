import { useState } from "react";
import DataTable from "react-data-table-component";
import incidentesJson from "../data/dados.json";

type Incidente = {
    Numero: string;
    Empresa: string;
    Data_de_criacao: string;
    Autoridades_comunicadas?: string;
    Instalacao: string;
    Data_da_primeira_observacao: string;
    Hora_da_primeira_observacao: string;
    Data_estimada_do_incidente: string;
    Hora_do_incidente: string;
    Numero_de_feridos_graves: number;
    Numero_de_fatalidades: number;
};

const incidentes: Incidente[] = incidentesJson as Incidente[];

const formatarData = (data: string) => {
    const [dia, mes, ano] = data.split("-");
    return `${ano}-${mes}-${dia}`;
};

export default function DadosExternos() {
    const [incidenteSelecionado, setIncidenteSelecionado] = useState<Incidente | null>(null);

    const colunas = [
        {
            name: "Número",
            selector: (row: Incidente) => row.Numero,
            sortable: true,
        },
        {
            name: "Empresa",
            selector: (row: Incidente) => row.Empresa,
            sortable: true,
        },
        {
            name: "Data de Criação",
            selector: (row: Incidente) =>
                new Date(formatarData(row.Data_de_criacao)).toLocaleDateString("pt-BR"),
            sortable: true,
        },
        {
            name: "Instalação",
            selector: (row: Incidente) => row.Instalacao,
            sortable: true,
        },
        {
            name: "Número de Feridos Graves",
            selector: (row: Incidente) => row.Numero_de_feridos_graves.toString(),
            sortable: true,
        },
        {
            name: "Número de Fatalidades",
            selector: (row: Incidente) => row.Numero_de_fatalidades.toString(),
            sortable: true,
        },
    ];

    return (
        <div className="bg-[#94A3B8] h-[100%] p-12 flex flex-col space-y-8 overflow-y-auto">
          <div>
            <DataTable
              columns={colunas}
              data={incidentes}
              pagination
              onRowClicked={(row) => setIncidenteSelecionado(row)}
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
    
          {/* Painel de Detalhes */}
          {incidenteSelecionado && (
            <div className="bg-white p-4 border border-gray-300 rounded-md shadow-md">
              <h2 className="text-xl font-bold mb-4">Detalhes do Incidente</h2>
              <p><strong>Número:</strong> {incidenteSelecionado.Numero}</p>
              <p><strong>Empresa:</strong> {incidenteSelecionado.Empresa}</p>
              <p><strong>Data de Criação:</strong> {new Date(incidenteSelecionado.Data_de_criacao).toLocaleDateString("pt-BR")}</p>
              <p><strong>Instalação:</strong> {incidenteSelecionado.Instalacao}</p>
              <p><strong>Data da Primeira Observação:</strong> {incidenteSelecionado.Data_da_primeira_observacao}</p>
              <p><strong>Hora da Primeira Observação:</strong> {incidenteSelecionado.Hora_da_primeira_observacao}</p>
              <p><strong>Data Estimada do Incidente:</strong> {incidenteSelecionado.Data_estimada_do_incidente}</p>
              <p><strong>Hora do Incidente:</strong> {incidenteSelecionado.Hora_do_incidente}</p>
              <p><strong>Número de Feridos Graves:</strong> {incidenteSelecionado.Numero_de_feridos_graves}</p>
              <p><strong>Número de Fatalidades:</strong> {incidenteSelecionado.Numero_de_fatalidades}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => setIncidenteSelecionado(null)}
              >
                Fechar Detalhes
              </button>
            </div>
          )}
        </div>
      );
}
