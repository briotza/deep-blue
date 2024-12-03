import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Acidente } from "../../types/incidentes.types";

export default function ListaAcidentes() {
  const [acidentes, setAcidentes] = useState<Acidente[]>([]);
  const [filtroTexto, setFiltroTexto] = useState("");
  const [filtroSituacao, setFiltroSituacao] = useState("Todos");
  const [dadosFiltrados, setDadosFiltrados] = useState<Acidente[]>([]);
  const [acidenteSelecionado, setAcidenteSelecionado] = useState<Acidente | null>(null);
  const [mostrarResolucao, setMostrarResolucao] = useState(false);

  // Função para buscar os acidentes da API
  const fetchAcidentes = async () => {
    try {
      const response = await fetch("http://localhost:3000/acidente");
      if (!response.ok) {
        throw new Error("Erro ao buscar os acidentes");
      }
      const dados = await response.json();
      setAcidentes(dados);
    } catch (error) {
      console.error("Erro ao carregar os acidentes:", error);
    }
  };

  // Carregar acidentes na primeira renderização
  useEffect(() => {
    fetchAcidentes();
  }, []);

  // Ordenar os acidentes por data
  const acidentesOrdenados = [...acidentes].sort(
    (a, b) => new Date(b.data).getTime() - new Date(a.data).getTime()
  );

  // Função de pesquisa por texto
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value;
    setFiltroTexto(valor);
    filtrarDados(valor, filtroSituacao);
  };

  // Função de filtro por situação
  const handleSituacaoFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const valor = event.target.value;
    setFiltroSituacao(valor);
    filtrarDados(filtroTexto, valor);
  };

  // Combinar filtros
  const filtrarDados = (texto: string, situacao: string) => {
    const filtrado = acidentesOrdenados.filter((item) => {
      const textoMatch = item.titulo.toLowerCase().includes(texto.toLowerCase());
      const situacaoMatch = situacao === "Todos" || item.situacao === situacao;
      return textoMatch && situacaoMatch;
    });
    setDadosFiltrados(filtrado);
  };

  // Configuração das colunas da tabela
  const colunas = [
    { name: "Título", selector: (row: { titulo: string }) => row.titulo, sortable: true },
    { name: "Tipo", selector: (row: { tipo: string }) => row.tipo, sortable: true },
    { name: "Situação", selector: (row: { situacao: string }) => row.situacao, sortable: true },
    { name: "Data", selector: (row: { data: string }) => new Date(row.data).toLocaleDateString(), sortable: true },
  ];

  return (
    <div className="bg-[#94A3B8] h-[100%] p-12 flex flex-col space-y-6 overflow-y-auto">
      <div className="flex flex-col space-y-4">
        {/* Input de pesquisa */}
        <input
          type="text"
          placeholder="Procurar incidente..."
          value={filtroTexto}
          onChange={handleSearch}
          className="p-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />

        {/* Filtro por situação */}
        <select
          value={filtroSituacao}
          onChange={handleSituacaoFilter}
          className="p-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="Todos">Todos</option>
          <option value="Aberto">Aberto</option>
          <option value="Fechado">Fechado</option>
        </select>

        {/* Tabela de acidentes */}
        <DataTable
          columns={colunas}
          data={dadosFiltrados}
          pagination
          onRowClicked={(row) => {
            if (!mostrarResolucao) {
              setAcidenteSelecionado(row);
            }
          }}
          customStyles={{
            headCells: {
              style: { backgroundColor: "#1E293B", color: "#fff" },
            },
            rows: {
              style: { backgroundColor: "#CBD5E1", color: "#000", cursor: mostrarResolucao ? "not-allowed" : "pointer" },
            },
          }}
        />
      </div>

      <div>
        {/* Painel de detalhes */}
        {acidenteSelecionado && (
          <div className="bg-white p-4 border border-gray-300 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">{acidenteSelecionado.titulo}</h2>
            <p><strong>Tipo:</strong> {acidenteSelecionado.tipo}</p>
            <p><strong>Situação:</strong> {acidenteSelecionado.situacao}</p>
            <p><strong>Data:</strong> {new Date(acidenteSelecionado.data).toLocaleDateString()}</p>
            <p><strong>Horário:</strong> {acidenteSelecionado.horario}</p>
            <p><strong>Descrição:</strong> {acidenteSelecionado.descricao}</p>

            {/* Exibir resolução se já houver e não for "Aberto" */}
            {acidenteSelecionado.situacao !== "Aberto" && acidenteSelecionado.resolucao ? (
              <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Detalhes da Resolução:</h3>
                <p><strong>Responsável:</strong> {acidenteSelecionado.resolucao.responsavel}</p>
                <p><strong>Data:</strong> {new Date(acidenteSelecionado.resolucao.data).toLocaleDateString()}</p>
                <p><strong>Descrição:</strong> {acidenteSelecionado.resolucao.descricao}</p>
                <p><strong>Custo Total:</strong> R$ {acidenteSelecionado.resolucao.custo_total.toFixed(2)}</p>
              </div>
            ) : null}

            {/* Mostrar botão de adicionar resolução se a situação for "Aberto" */}
            {acidenteSelecionado.situacao === "Aberto" && (
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md mr-3"
                onClick={() => setMostrarResolucao(!mostrarResolucao)}
              >
                {mostrarResolucao ? "Fechar Resolução" : "Adicionar Resolução"}
              </button>
            )}

            {/* Botão Fechar Detalhes, desabilitado se Resolução estiver aberta */}
            <button
              className={`mt-4 px-4 py-2 rounded-md ${mostrarResolucao
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-500 text-white"
                }`}
              onClick={() => !mostrarResolucao && setAcidenteSelecionado(null)}
              disabled={mostrarResolucao}
            >
              Fechar Detalhes
            </button>
          </div>
        )}
      </div>

      {mostrarResolucao && acidenteSelecionado?.situacao === "Aberto" && (
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md">
          <h3 className="text-lg font-semibold mb-2">
            Adicionar Resolução para o Acidente: {acidenteSelecionado?.titulo}
          </h3>
          <form className="flex flex-col">
            <label>Responsável </label>
            <input type="text" className="h-10 mb-2 pl-2" required />
            <label>Data </label>
            <input type="date" className="h-10 mb-2 pl-2" required />
            <label>Descrição </label>
            <textarea
              className="w-full h-28 mb-2 pl-2 pt-2 border rounded-md"
              required
            />
            <label>Custo Total </label>
            <input type="number" className="h-10 mb-2 pl-2" required />
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md max-w-[154.19px]"
            >
              Enviar
            </button>
          </form>
          <button
            className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-md"
            onClick={() => setMostrarResolucao(false)}
          >
            Fechar Resolução
          </button>
        </div>
      )}
    </div>
  );
}
