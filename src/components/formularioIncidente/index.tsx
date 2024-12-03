import { useState } from "react";

type Acidente = {
  titulo: string;
  tipo: string;
  situacao: string;
  data: string;
  horario: string;
  descricao: string;
  resolucao: {
    responsavel: string;
    data: string;
    descricao: string;
    custo_total: number;
  };
};

export default function FormIncidente() {
  const [novoAcidente, setNovoAcidente] = useState<Acidente>({
    titulo: "",
    tipo: "Segurança",
    situacao: "Aberto", 
    data: "",
    horario: "",
    descricao: "",
    resolucao: {
      responsavel: "Nome",
      data: "2000-01-01",
      descricao: "Descrição.",
      custo_total: 0,
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNovoAcidente({
      ...novoAcidente,
      [name]: value,
    });
  };

  const handleAddAcidente = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3000/acidente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoAcidente),
      });
  
      if (!response.ok) {
        throw new Error("Erro ao cadastrar o acidente");
      }
  
      alert("Acidente cadastrado com sucesso!");
      setNovoAcidente({
        titulo: "",
        tipo: "Segurança",
        situacao: "ABERTO",
        data: "",
        horario: "",
        descricao: "",
        resolucao: {
          responsavel: "Nome",
          data: "2000-01-01",
          descricao: "Descrição.",
          custo_total: 0,
        },
      }); 
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message); 
      } else {
        alert("Erro desconhecido ao cadastrar o acidente");
      }
    }
  };
  
  return (
    <div className="bg-[#94A3B8] h-[100%] p-12 flex flex-col space-y-6 overflow-y-auto">
      {/* Formulário */}
      <form onSubmit={handleAddAcidente} className="space-y-4 bg-white p-6 rounded-md shadow-md">
        <div className="flex flex-col">
          <label className="font-semibold">Título</label>
          <input
            type="text"
            name="titulo"
            value={novoAcidente.titulo}
            onChange={handleInputChange}
            className="p-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Tipo</label>
          <select
            name="tipo"
            value={novoAcidente.tipo}
            onChange={handleInputChange}
            className="p-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          >
            <option value="Segurança">Segurança</option>
            <option value="Ambiental">Ambiental</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Data</label>
          <input
            type="date"
            name="data"
            value={novoAcidente.data}
            onChange={handleInputChange}
            className="p-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Horário</label>
          <input
            type="time"
            name="horario"
            value={novoAcidente.horario}
            onChange={handleInputChange}
            className="p-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Descrição</label>
          <textarea
            name="descricao"
            value={novoAcidente.descricao}
            onChange={handleInputChange}
            className="p-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
