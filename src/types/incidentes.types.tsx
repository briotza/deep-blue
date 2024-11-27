import { Resolucao } from "./resolucao.types";

export interface Acidente {
    id: number;
    titulo: string;
    tipo: string;
    situacao: string;
    data: string;
    horario: string;
    descricao: string;
    resolucao?: Resolucao; 
}