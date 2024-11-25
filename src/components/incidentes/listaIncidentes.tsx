import { useState } from "react";
import DataTable from "react-data-table-component";

export default function ListaIncidentes() {
  // Dados de exemplo
  const incidentes = [
    { id: 1, nome: "Incidente 1", status: "Aberto" },
    { id: 2, nome: "Incidente 2", status: "Fechado" },
    { id: 3, nome: "Incidente 3", status: "Pendente" },
  ];

  const [filtro, setFiltro] = useState(""); // Estado para pesquisa
  const [dadosFiltrados, setDadosFiltrados] = useState(incidentes);

  // Atualiza os dados filtrados com base no input
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value;
    setFiltro(valor);
    setDadosFiltrados(
      incidentes.filter((item) =>
        item.nome.toLowerCase().includes(valor.toLowerCase())
      )
    );
  };

  // Configuração das colunas
  const colunas = [
    { name: "ID", selector: (row: { id: number }) => row.id, sortable: true },
    { name: "Nome", selector: (row: { nome: string }) => row.nome, sortable: true },
    { name: "Status", selector: (row: { status: string }) => row.status, sortable: true },
  ];

  return (
    <div className="bg-[#94A3B8] h-[100%] p-12 flex flex-col space-y-6 overflow-y-auto">
      <h1 className="text-xl font-bold text-white">Lista de Incidentes</h1>

      {/* Input de pesquisa */}
      <input
        type="text"
        placeholder="Procurar incidente..."
        value={filtro}
        onChange={handleSearch}
        className="p-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />

      {/* Tabela de incidentes */}
      <DataTable
        columns={colunas}
        data={dadosFiltrados}
        pagination
        customStyles={{
          headCells: {
            style: { backgroundColor: "#1E293B", color: "#fff" },
          },
          rows: {
            style: { backgroundColor: "#CBD5E1", color: "#000" },
          },
        }}
      />
    </div>
  );
}
