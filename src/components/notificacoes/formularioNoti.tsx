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

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const dataAtual = new Date().toISOString();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNovaNotificacao((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddNotificacao = async (e: React.FormEvent) => {
    e.preventDefault();

    if (novaNotificacao.titulo && novaNotificacao.descricao) {
      const notificacaoComData = {
        ...novaNotificacao,
        data: dataAtual,
      };

      setLoading(true);
      setError(null); 

      try {
        const response = await fetch("http://localhost:3000/noticias", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(notificacaoComData),
        });

        if (response.ok) {
          console.log("Notificação cadastrada:", notificacaoComData);
          alert("Notificação enviada com sucesso!");
          setNovaNotificacao({ titulo: "", descricao: "" }); 
        } else {
          throw new Error("Falha ao cadastrar notificação");
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message); 
        } else {
          setError("Erro desconhecido");
        }
      } finally {
        setLoading(false);
      }
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
          disabled={loading}
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>

        {error && (
          <div className="text-red-500 mt-2">
            <strong>{error}</strong>
          </div>
        )}
      </form>
    </div>
  );
}
