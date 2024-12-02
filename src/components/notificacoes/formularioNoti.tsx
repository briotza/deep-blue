import { useState } from "react";

type Notificacao = {
  id: number;
  titulo: string;
  descricao: string;
  data: string;
};

export default function FormNotificacao() {
  const [novaNotificacao, setNovaNotificacao] = useState<Partial<Notificacao>>({
    titulo: "",
    descricao: "",
  });

  // Obtém a data atual
  const dataAtual = new Date().toISOString().split('T')[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNovaNotificacao((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddNotificacao = (e: React.FormEvent) => {
    e.preventDefault();

    // Adiciona a data automaticamente
    if (novaNotificacao.titulo && novaNotificacao.descricao) {
      const notificacaoComData = {
        ...novaNotificacao,
        data: dataAtual,
      };


      console.log("Notificação cadastrada:", notificacaoComData);
      setNovaNotificacao({ titulo: "", descricao: "" });
    }
  };

  return (
    <div className="bg-[#94A3B8] h-[100%] p-12 flex flex-col space-y-6 overflow-y-auto">
      {/* Formulário */}
      <form onSubmit={handleAddNotificacao} className="space-y-4 bg-white p-6 rounded-md shadow-md">
        <div className="flex flex-col">
          <label className="font-semibold">Título</label>
          <input
            type="text"
            name="titulo"
            value={novaNotificacao.titulo || ""}
            onChange={handleInputChange}
            className="p-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Descrição</label>
          <textarea
            name="descricao"
            value={novaNotificacao.descricao || ""}
            onChange={handleInputChange}
            className="p-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            rows={4}
            required
          />
        </div>

        <input
          type="hidden"
          name="data"
          value={dataAtual}
        />

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
