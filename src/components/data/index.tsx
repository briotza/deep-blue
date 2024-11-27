import { Acidente } from "../../types/incidentes.types";

export const incidentes: Acidente[] = [
  {
    id: 1,
    titulo: "Acidente 1",
    tipo: "Colisão",
    situacao: "Fechado",
    data: "2024-01-15",
    horario: "10:30",
    descricao: "Descrição do acidente 1.",
    resolucao: {
      responsavel: "João Silva",
      data: "2024-01-20",
      descricao: "Reparo feito com sucesso.",
      custo_total: 1500.0,
    },
  },
  {
    id: 2,
    titulo: "Acidente 2",
    tipo: "Incêndio",
    situacao: "Fechado",
    data: "2024-02-10",
    horario: "14:00",
    descricao: "Descrição do acidente 2.",
    resolucao: {
      responsavel: "Maria Oliveira",
      data: "2024-02-15",
      descricao: "Incêndio contido e área restaurada.",
      custo_total: 3000.0,
    },
  },
];
