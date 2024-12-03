import { useState, useEffect } from "react";
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

export default function DadosExternos() {
  const [incidentes, setIncidentes] = useState<Incidente[]>([]);
  const [incidenteSelecionado, setIncidenteSelecionado] = useState<Incidente | null>(null);

  const formatarData = (data: string) => {
    const dataIso = new Date(data);
    if (!isNaN(dataIso.getTime())) {
      return dataIso.toLocaleDateString("pt-BR");
    }

    const [dia, mes, ano] = data.split("-");
    if (dia && mes && ano) {
      const dataFormatada = new Date(`${ano}-${mes}-${dia}`);
      if (!isNaN(dataFormatada.getTime())) {
        return dataFormatada.toLocaleDateString("pt-BR");
      }
    }

    return "Data inválida";
  };

  const buscarIncidentesDaAPI = async () => {
    try {
      const response = await fetch("http://localhost:3000/incidentes");
      const dadosApi = await response.json();

      if (Array.isArray(dadosApi)) {
        setIncidentes((prevIncidentes) => {
          const novosIncidentes = [
            ...prevIncidentes,
            ...dadosApi.filter((apiIncidente: Incidente) =>
              !prevIncidentes.some((prevIncidente) => prevIncidente.Numero === apiIncidente.Numero)
            ),
          ];
          return novosIncidentes;
        });
      } else {
        console.error("Dados da API não são um array:", dadosApi);
      }
    } catch (error) {
      console.error("Erro ao buscar incidentes da API:", error);
    }
  };

  useEffect(() => {
    if (Array.isArray(incidentesJson)) {
      setIncidentes(incidentesJson);
    } else {
      console.error("Os dados locais não são um array:", incidentesJson);
    }

    buscarIncidentesDaAPI();
  }, []);

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
      selector: (row: Incidente) => formatarData(row.Data_de_criacao),
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

      {incidenteSelecionado && (
        <div className="bg-white p-4 border border-gray-300 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Detalhes do Incidente</h2>
          <p><strong>Número:</strong> {incidenteSelecionado.Numero}</p>
          <p><strong>Empresa:</strong> {incidenteSelecionado.Empresa}</p>
          <p><strong>Data de Criação:</strong> {formatarData(incidenteSelecionado.Data_de_criacao)}</p>
          <p><strong>Instalação:</strong> {incidenteSelecionado.Instalacao}</p>
          <p><strong>Data da Primeira Observação:</strong> {formatarData(incidenteSelecionado.Data_da_primeira_observacao)}</p>
          <p><strong>Hora da Primeira Observação:</strong> {incidenteSelecionado.Hora_da_primeira_observacao}</p>
          <p><strong>Data Estimada do Incidente:</strong> {formatarData(incidenteSelecionado.Data_estimada_do_incidente)}</p>
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
